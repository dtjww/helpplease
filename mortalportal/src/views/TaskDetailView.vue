<!-- Mel -->

<template>
    <NavBar />
    <div>
        <q-card class="card">
            <h3>{{ posts.name }}</h3><br>
            <img :src=" posts.file ">   
                <table>
                    <tr>
                        <td>
                            <h6>Description</h6>
                            <q-field>
                                <template v-slot:control>
                                    <div>{{ posts.desc }}</div>
                                </template>
                            </q-field>    
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6>Category</h6>
                            <q-field>
                                <template v-slot:control>
                                    <div>{{ posts.category }}</div>
                                </template>
                            </q-field>    
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6>Location</h6>
                            <q-field>
                                <template v-slot:control>
                                    <div>{{ posts.loc }}</div>
                                </template>
                            </q-field>    
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6>Price</h6>
                            <q-field>
                                <template v-slot:control>
                                    <div>{{ posts.price }}</div>
                                </template>
                            </q-field>    
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6>Date & Time</h6>
                            <q-field>
                                <template v-slot:control>
                                    <div>{{ posts.date }} {{ posts.time }}</div>
                                </template>
                            </q-field>    
                        </td>
                    </tr>
                </table><br>
                <q-btn color='info' @click=goToTask>Accept Task</q-btn>
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
import axios from 'axios';

export default {

    data() {
        return {
            model: '',
            task: [
                'Shopping', 'Physical', 'Assignment/Project', 'Hardware/Software'
            ],
            posts:[],
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
                
        },
        getPost() {
            this.id = this.$route.params.id
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData/' + this.id + '.json')
                .then(response => {
                    console.log(response.data)
                    this.posts = response.data
                    console.log(this.posts.name)
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
    created() {
        
        this.getPost();
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