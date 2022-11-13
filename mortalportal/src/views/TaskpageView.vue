<!-- Mel -->

<template>
    <q-scroll-area style="height: 100vh; max-width: 100vw;" :thumb-style="thumbStyle" :bar-style="barStyle">

        <q-toolbar class="text-white q-my-none shadow-2 bg-white karla" id="navbar">

            <q-toolbar-title shrink>
                <router-link to="/home/angel" style="color: white; text-decoration: none">
                    <q-img src="../assets/MainLogo2.png" style="width:170px"></q-img>
                </router-link>
            </q-toolbar-title>
            <q-space />
            <div class="lt-xs mainMenu karla">

                
                <q-btn rounded flat label="Chats" @click="gotoChat()" class="text-black karla"
                        @mouseover="hover3 = true" @mouseleave="hover3 = false"
                        v-if="hover3 == false"  />
                    <q-btn rounded flat label="Chats" @click="gotoChat()" class="text-indigo-6 karla"
                        @mouseover="hover3 = true" @mouseleave="hover3 = false"
                        v-if="hover3 == true" />

                <q-btn rounded flat label="My Account" @click="handleClick()" class="text-black karla"
                        @mouseover="hover = true" @mouseleave="hover = false"
                        v-if="hover == false"  />
                    <q-btn rounded flat label="My Account" @click="handleClick()" class="text-indigo-6 karla"
                        @mouseover="hover = true" @mouseleave="hover = false"
                        v-if="hover == true" />

                    <q-btn rounded flat label="Log Out" @click="exit()" class="text-black karla" @mouseover="hover2 = true"
                        @mouseleave="hover2 = false" v-if="hover2 == false" />
                    <q-btn rounded flat label="Log Out" @click="exit()" class="text-indigo-6 karla" @mouseover="hover2 = true"
                        @mouseleave="hover2 = false" v-if="hover2 == true" />

            </div>

            <div class="gt-s hamburgMenu karla">
                <!-- <q-btn flat dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" /> -->
                <q-btn-dropdown flat dense dropdown-icon="menu" color="black">
                    <q-list>
                        <q-item-label header>Menu</q-item-label>
                        <q-item clickable v-ripple>
                            <q-item-section avatar>
                                <q-icon name="chat" />
                            </q-item-section>
                            <q-item-section @click=gotoChat()>Chats</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section avatar>
                                <q-icon name="person" />
                            </q-item-section>
                            <q-item-section @click="handleClick()">My Account</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                            <q-item-section avatar>
                                <q-icon name="logout" />
                            </q-item-section>
                            <q-item-section @click="exit()">Log Out</q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
            </div>

        </q-toolbar>


        <div>
            <q-card class="card karla">
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
                                <q-select outlined v-model="inputData.category" :options="task" label="Choose a Task"
                                    lazy-rules :rules="[val => val && val.length > 0 || 'Please Choose a Category']"
                                    class="inputboxes" color="indigo-6" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h6>Name of Task</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <q-input outlined v-model="inputData.name" maxlength="50" lazy-rules
                                    label="Name of Task"
                                    :rules="[val => val && val.length > 0 || 'Please Enter a Name for the Task']"
                                    class="inputboxes" color="indigo-6" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h6>Description of Task</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <q-input outlined v-model="inputData.desc" label="Description of Task" minlength="1"
                                    lazy-rules :rules="[val => val && val.length > 0 || 'Please Enter a Description']"
                                    maxlength="500" class="inputboxes" color="indigo-6" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h6>Price ($)</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <q-input outlined v-model="inputData.price" label="Price" maxlength="30" class="price"
                                    lazy-rules :rules="[val => val && val.length > 0 || 'Please Enter a Price']"
                                    type="number" style='width:15vw;' color="indigo-6" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h6>Location</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <q-select outlined v-model="inputData.loc" :options="this.locations" lazy-rules
                                    label="Choose a Location"
                                    :rules="[val => val && val.length > 0 || 'Please Choose a Location']"
                                    class="inputBoxes" color="indigo-6" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <h6>Date & Time</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <q-input v-model="inputData.time" outlined type="time" class='date' lazy-rules
                                    :rules="[val => val && val.length > 0 || 'Please Input a Time']" color="indigo-6" />
                                <q-input v-model="inputData.date" outlined type="date" class="date" lazy-rules
                                    :rules="[val => val && val.length > 0 || 'Please Input a Date']" color="indigo-6" />
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <h6>Image (Optional)</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <q-btn class="date" color="white" text-color="dark" label="upload image"
                                    @click="uploadImage" />
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
                    <q-btn color="dark" label="Post Task" class='button text-white' type="submit" />
                </q-form>
            </q-card>
        </div>
    </q-scroll-area>

</template>

<script>
import { db, storage } from '../firebase.js';
import { push, ref as dbRef, update } from "firebase/database";
import { ref as stRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()
import { useQuasar, QSpinnerOval } from 'quasar'
import { onBeforeUnmount } from 'vue'

export default {
    setup() {
        const $q = useQuasar()
        let timer

        onBeforeUnmount(() => {
            if (timer !== void 0) {
                clearTimeout(timer)
                $q.loading.hide()
            }
        })
        return {
            showLoading() {
                $q.loading.show({
                    spinner: QSpinnerOval,
                    message: 'Posting Task...'
                })

                // hiding in 2s
                timer = setTimeout(() => {
                    $q.loading.show({
                        spinner: QSpinnerOval,
                        message: 'Task Posted ! Redirecting to Home Page...'
                    })
                    timer = setTimeout(() => {
                        $q.loading.hide()
                        this.$router.push('/home/mortal')
                        timer = void 0
                    }, 1500)
                }, 3000)

            },
            thumbStyle: {
                right: '4px',
                borderRadius: '5px',
                backgroundColor: '#4050B5',
                width: '5px',
                opacity: 0.75
            },

            barStyle: {
                right: '2px',
                borderRadius: '9px',
                width: '9px',
                opacity: 0.2
            }
        }
    },
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
                id: '',
                username: storeName.username,
            },
            locations: ['Admiralty', 'Aljunied', 'Ang Mo Kio', 'Bartley', 'Bayfront', 'Beauty World',
                'Bedok', 'Bedok North', 'Bedok Reservoir', 'Bencoolen', 'Bendemeer', 'Bishan',
                'Boon Keng', 'Boon Lay', 'Botanic Gardens', 'Braddell', 'Bras Basah', 'Buangkok',
                'Bugis', 'Bukit Batok', 'Bukit Gombak', 'Bukit Panjang', 'Buona Vista', 'Caldecott',
                'Canberra', 'Cashew', 'Changi Airport', 'Chinatown', 'Chinese Garden', 'Choa Chu Kang',
                'City Hall', 'Clarke Quay', 'Clementi', 'Commonwealth', 'Dakota', 'Dhoby Ghaut', 'Dover',
                'Downtown', 'Esplanade', 'Eunos', 'Expo', 'Farrer Park', 'Farrer Road', 'Fort Canning',
                'Geylang Bahru', 'Gul Circle', 'HarbourFront', 'Haw Par Villa', 'Hillview', 'Holland Village',
                'Hougang', 'Jalan Besar', 'Joo Koon', 'Jurong East', 'Kaki Bukit', 'Kallang', 'Kembangan',
                'Kent Ridge', 'Khatib', 'King Albert Park', 'Kovan', 'Kranji', 'Labrador Park', 'Lakeside',
                'Lavender', 'Little India', 'Lorong Chuan', 'MacPherson', 'Marina Bay', 'Marina South Pier',
                'Marsiling', 'Marymount', 'Mattar', 'Mountbatten', 'Newton', 'Nicoll Highway', 'Novena', 'one-north',
                'Orchard', 'Outram Park', 'Pasir Panjang', 'Pasir Ris', 'Paya Lebar', 'Pioneer', 'Potong Pasir',
                'Promenade', 'Punggol', 'Queenstown', 'Raffles Place', 'Redhill', 'Rochor', 'Sembawang', 'Sengkang',
                'Serangoon', 'Simei', 'Sixth Avenue', 'Somerset', 'Stadium', 'Stevens', 'Tai Seng', 'Tampines', 'Tampines East',
                'Tampines West', 'Tan Kah Kee', 'Tanah Merah', 'Tanjong Pagar', 'Telok Ayer', 'Telok Blangah', 'Tiong Bahru',
                'Toa Payoh', 'Tuas Crescent', 'Tuas Link', 'Tuas West Road', 'Ubi', 'Upper Changi', 'Woodlands', 'Woodlands North',
                'Woodlands South', 'Woodleigh', 'Yew Tee', 'Yio Chu Kang', 'Yishun',],
            imageUrl: '',
            image: null,
            hover: false,
            hover2: false,
        }
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
            this.showLoading()
            let key;
            let ext;
            push(dbRef(db, 'TaskData'), this.inputData)
                .then((data) => {
                    // to get the key of the file                
                    key = data.key;
                    update(dbRef(db, 'TaskData/' + key), {
                        id: key
                    })
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
                            const updates = {
                                file: url,
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
        },
        gotoChat() {
            this.$router.push('/chat')
        },
        exit() {
            storeName.username = ''
            storeName.email = ''
            storeName.name = ''
            this.$router.push({ name: 'Landing' })
        },
        handleClick() {
            this.$router.push('/profile')
        },
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

.hamburgMenu {
    display: none;
}

.mainMenu {
    display: block;
}

@media (max-width:700px) {
    .hamburgMenu {
        display: block;
    }

    .mainMenu {
        display: none;
    }
}
@import url("https://fonts.googleapis.com/css?family=Karla");
.karla {
    font-family: karla;
};
</style>