<!-- Mel -->

<template>
    <NavBar />


    <div>
        <q-card class="card">
            <h3>Create a New Task</h3><br>
            <q-form @submit="submitDB">

                <table>
                    <tr>
                        <td>
                            <h6>Category of Task</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <q-select outlined v-model="inputData.category" :options="task" label="Choose a Task" lazy-rules :rules="[ val => val && val.length > 0 || 'Please Choose a Category']"
                                class="inputboxes" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h6>Name of Task</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <q-input outlined v-model="inputData.name" maxlength="50" lazy-rules label="Name of Task"
                            :rules="[ val => val && val.length > 0 || 'Please Enter a Name for the Task']" class="inputboxes" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h6>Description of Task</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <q-input outlined v-model="inputData.desc" label="Description of Task" minlength="1" lazy-rules :rules="[ val => val && val.length > 0 || 'Please Enter a Description']"
                                maxlength="500" class="inputboxes" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h6>Price</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <q-input outlined v-model="inputData.price" label="Price" maxlength="30" class="price" lazy-rules :rules="[ val => val && val.length > 0 || 'Please Enter a Price']"
                                prefix='$' />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h6>Location</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <q-input outlined v-model="inputData.loc" label="Location of Task" maxlength="30" lazy-rules :rules="[ val => val && val.length > 0 || 'Please Enter a Location']"
                                class="inputboxes" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h6>Date & Time</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <q-input v-model="inputData.time" outlined type="time" class='date' lazy-rules :rules="[ val => val && val.length > 0 || 'Please Input a Time']" />
                            <q-input v-model="inputData.date" outlined type="date" class="date" lazy-rules :rules="[ val => val && val.length > 0 || 'Please Input a Date']" />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <h6>Image (Optional)</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <q-btn color="dark" label="upload image" @click="uploadImage" class="date" />
                            <input type="file" style="display: none" ref="fileInput" accept='image/*'
                                @change=onFilePicked />

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img v-if='imageUrl != ""' :src="imageUrl" height="150" class="date">
                        </td>
                    </tr>
                </table>
                <q-btn color="white" text-color="black" label="Post Task" class='button' type="submit" />
            </q-form>
        </q-card>

        <q-dialog v-model="submit">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Success!</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Your task has been successfully published for our Angels to pick up ! 
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Home" color="dark" v-close-popup @click=gotoHome />
                    <q-btn flat label="Post Another Task" color="dark" v-close-popup @click=gotoTask />
                </q-card-actions>
            </q-card>
        </q-dialog>

    </div>

</template>

<script>
import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue';
import { db, storage } from '../firebase.js';
import { push, ref as dbRef, update } from "firebase/database";
import { ref as stRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import {useCounterStore } from "@/store/store";
const storeName = useCounterStore()

export default {

    data() {
        return {
            model: '',
            task: [
                'Shopping', 'Physical', 'Assignment/Project', 'Hardware/Software'
            ],
            inputData: {
                time: '',
                date: '',
                loc: '',
                name: '',
                desc: '',
                category: '',
                file: '',
                price: '',
                id:'',
                user: storeName.username,
            },
            imageUrl: '',
            image: null,
            submit: ref(false)
        }
    },
    components: {
        NavBar
    },
    methods: {
        // Run when Button is clicked
        uploadImage() {
            this.$refs.fileInput.click()
        },
        // running the input function, pushing a preview of the image file
        onFilePicked(event) {
            console.log(event.target);
            const file = event.target.files;

            let filename = file[0].name;
            if (filename.lastIndexOf(
                '.') <= 0) {
                return alert('Not a valid file');
            }
            const fileReader = new FileReader();
            fileReader.onload = () => {
                this.imageUrl = fileReader.result
            };
            fileReader.readAsDataURL(file[0]);
            this.image = file[0];
        },
        submitDB() {
            // Parsing the data into firebase Realtime Database
            let key;
            let ext;
            push(dbRef(db, 'TaskData'), this.inputData)
                .then((data) => {
                    // to get the key of the file                
                    key = data.key;
                    return key
                })
                .then(key => {
                    // to get the extension of the file + uploading onto firebase
                    const filename = this.image.name;
                    ext = filename.slice(filename.lastIndexOf('.'));
                    return uploadBytes(stRef(storage, 'TaskData/' + key + '.' + ext), this.image)
                })
                .then(() => {
                    // Get the download URL from the storage and then pushing that URL onto Firebase Database "file" key. 
                    getDownloadURL(stRef(storage, 'TaskData/' + key + '.' + ext))
                        .then((url) => {
                            console.log('123')
                            console.log(url)

                            const updates = {
                                file: url,
                                id: key
                            }
                            return update(dbRef(db, 'TaskData/' + key), updates)
                        })
                        .catch(catchError => {
                            console.log(catchError)
                        })

                })
                .catch((error) => {
                    console.log(error)
                })
            this.submit = true;
        },
        gotoHome() {
            setTimeout(() => {
                this.$router.push('/home')
            }, 3000);
        },
        gotoTask() {
            setTimeout(() => {
                window.location.reload()
            }, 3200);
                
        }
    }

}

</script>

<style>
.card {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    padding: 50px;

}

h6 {
    margin: auto;
    text-align: left;
}

.inputboxes {
    width: 600px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0px;
    text-align: center;

}

.price {
    width: 100px;
    text-align: center;

}

.date {
    width: 250px;
    float: left;
    margin-right: 5px;
}


h3 {
    margin: auto
}

.button {
    margin: 15px;
}

@media (max-width: 750px) {

    .card {
        width: 500px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50px;
        padding: 50px;

    }

    .inputboxes {
        width: 400px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 0px;
        text-align: center;

    }
}

@media (max-width: 400px) {

    .card {
        width: 350px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50px;
        padding: 25px;

    }

    .inputboxes {
        width: 300px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 0px;
        text-align: center;

    }

    .date {
        width: 150px;
        float: left;
        margin-right: 0px;
    }
}
</style>