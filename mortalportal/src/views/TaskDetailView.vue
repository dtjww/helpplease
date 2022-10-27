<!-- Mel -->

<template>
    <NavBar />

    <div v-if="this.format == 'View'">

        <q-card class="card">
            <h3>{{ posts.name }}</h3><br>
            <img :src="posts.file">
            <table>
                <tr>
                    <td>
                        <h6>Description</h6>
                        <q-field readonly>
                            <template v-slot:control>
                                <div>{{ posts.desc }}</div>
                            </template>
                        </q-field>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6>Category</h6>
                        <q-field readonly>
                            <template v-slot:control>
                                <div>{{ posts.category }}</div>
                            </template>
                        </q-field>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6>Location</h6>
                        <q-field readonly>
                            <template v-slot:control>
                                <div>{{ posts.loc }}</div>
                            </template>
                        </q-field>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6>Price</h6>
                        <q-field readonly prefix="$">
                            <template v-slot:control>
                                <div>{{ posts.price }}</div>
                            </template>
                        </q-field>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6>Date & Time</h6>
                        <q-field readonly>
                            <template v-slot:control>
                                <div>{{ posts.date }} {{ posts.time }}</div>
                            </template>
                        </q-field>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <q-btn size="lg" class="btn iconbtn" icon="favorite" v-model="heart" v-if="heart == true" flat
                            @click=like></q-btn>
                        <q-btn size="lg" class="btn" icon="favorite outlined" v-model="heart" v-if="heart == false" flat
                            @click=like></q-btn>
                    </td>
                    <td align="right">
                        <q-btn color='info' class="btn" @click=offerPopup>Make an Offer</q-btn>
                        <q-btn color="dark" class="btn" @click=gotoChat>Chat Now</q-btn>
                    </td>
                </tr>
            </table>
        </q-card>
    </div>

    <div v-else>
        <q-card class="card">
            <h3>{{ posts.name }}</h3><br>
            <img :src="posts.file">
            <table>
                <tr>
                    <td>
                        <h6>Task</h6>
                        <q-input dense type="text" class="inputBoxes" v-model="this.posts.name"
                            :rules="[val => val && val.length > 0 || 'Please Enter a Task Name']"></q-input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6>Description</h6>
                        <q-input dense type="text" class="inputBoxes" v-model="this.posts.desc"
                            :rules="[val => val && val.length > 0 || 'Please Enter a Description']"></q-input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6>Category</h6>
                        <q-select dense v-model="this.posts.category" :options="task" lazy-rules
                            :rules="[val => val && val.length > 0 || 'Please Choose a Category']" class="inputBoxes" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6>Location</h6>
                        <q-select dense v-model="this.posts.loc" :options="this.locations" lazy-rules
                            :rules="[val => val && val.length > 0 || 'Please Choose a Location']" class="inputBoxes" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6>Price</h6>
                        <q-input prefix="$" dense type="number" class="price" v-model="this.posts.price">
                        </q-input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6>Date & Time</h6>
                        <q-input dense type='date' v-model="this.posts.date" class="date">
                        </q-input>
                        <q-input dense type='time' v-model="this.posts.time" class="date">
                        </q-input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <q-btn color="dark" label="upload image" @click="uploadImage" class="date" />
                        <input type="file" style="display: none" ref="fileInput" accept='image/*'
                            @change=onFilePicked /><br>

                    </td>
                </tr>
                <tr>
                    <td>
                        <img v-if='imageUrl != ""' :src="imageUrl" width="400" class="date">
                    </td>
                </tr>
            </table>
            <q-btn color='info' class="btn" @click=saveChanges>Save Changes</q-btn>
            <q-btn color="black" class="btn" @click=delPost>Delete Task</q-btn>
            <q-btn class="btn" @click=gotoHomeInstant>Cancel</q-btn>
        </q-card>
    </div>
    <q-dialog v-model="submit">
        <q-card>
            <q-card-section>
                <div class="text-h6">Success!</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Your task has been successfully updated!
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="Close" color="dark" v-close-popup @click=gotoHome />
            </q-card-actions>
        </q-card>
    </q-dialog>
    <q-dialog v-model="deletePost">
        <q-card>
            <q-card-section>
                <div class="text-h6">Deleted!</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Your task has been successfully deleted!
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="Close" color="dark" v-close-popup @click=gotoHome />
            </q-card-actions>
        </q-card>
    </q-dialog>
    <q-dialog v-model="Offer">
        <q-card>
            <q-card-section>
                <div class="text-h6">Make an Offer</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input type="number" v-model="this.offer_price" prefix="$"></q-input>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Make Offer" color="dark" v-close-popup @click=makeAnOffer />
                <q-btn flat label="Cancel" color="black" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>

</template>

<script>
import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue';
import { db, storage } from '../firebase.js';
import { ref as dbRef, update, set, remove } from "firebase/database";
import { ref as stRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import axios from 'axios';
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()
// import { location } from '@/components/MrtData.js';

export default {


    data() {
        return {
            model: '',
            task: [
                'Shopping', 'Physical', 'Assignment/Project', 'Hardware/Software'
            ],
            posts: [],
            imageUrl: '',
            image: null,
            submit: ref(false),
            deletePost: ref(false),
            heart: ref(false),
            id: '',
            taskid: '',
            status: '',
            currUser: '',
            poster: '',
            format: '',
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
            Offer: ref(false),
            offer_price: ref(0),
            ownPosts:[]

        }
    },
    components: {
        NavBar
    },
    methods: {
        // Run when Button is clicked
        gotoHome() {
            setTimeout(() => {
                this.$router.push({ name: 'Home', params: { targetP: 'mortal' } })
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
                    this.posts = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        checkTask() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/' + storeName.username + '/tasksInteracted/saved.json')
                .then(response => {
                    this.ownPosts = response.data
                    console.log(this.ownPosts)
                    for(var task in this.ownPosts){
                        if(task == this.id){
                            this.heart = true
                        }
                        else{
                            this.heart = false
                        }
                    }
                })

        },

        gotoChat() {
            this.$router.push({ name: 'Chat', params: { id: this.id } })
        },
        like() {
            if (this.heart == false) {
                this.heart = true
                set(dbRef(db, 'Login/' + storeName.username + "/tasksInteracted/saved/" + this.id), {
                    taskid: this.id,
                    status: 'saved'
                })
            } else {
                this.heart = false
                this.taskid = null
                this.status = null
                console.log(this.taskid)
                update(dbRef(db, 'Login/' + storeName.username + '/tasksInteracted/saved/' + this.id), {
                    taskid: null,
                    status: null
                })
            }
        },
        updateImage() {
            let ext

            const filename = this.image.name;
            ext = filename.slice(filename.lastIndexOf('.'));
            uploadBytes(stRef(storage, 'TaskData/' + this.id + '.' + ext), this.image)
            getDownloadURL(stRef(storage, 'TaskData/' + this.id + '.' + ext))
                .then(url => {

                    this.posts.file = url

                })

        },
        saveChanges() {
            update(dbRef(db, 'TaskData/' + this.id), this.posts)
            this.submit = true;
        },
        uploadImage() {
            this.$refs.fileInput.click()
        },
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
            this.updateImage()
        },
        delPost() {
            remove(dbRef(db, 'TaskData/' + this.id))
            this.deletePost = true
            setTimeout(() => {
                this.$router.push({ name: 'Home', params: { targetP: 'mortal' } })
            }, 3200);
        },
        gotoHomeInstant() {
            this.$router.push({ name: 'Home', params: { targetP: 'mortal' } })
        },
        offerPopup() {
            this.offer_price = this.posts.price
            this.Offer = true
        },
        makeAnOffer(){
            set(dbRef(db, 'Login/' + storeName.username + "/tasksInteracted/active/" + this.id ), {
                status: 'offer',
                taskid: this.id,
                offer: this.offer_price
            })
            set(dbRef(db, 'TaskData/' + this.id + "/active/" + storeName.username ), {
                status: 'offer',
                taskid: this.id,
                offer: this.offer_price,
                angel: storeName.username
            })
            setTimeout(() => {
                this.$router.push({ name: 'Home', params: { targetP: 'angel' } })
            }, 1500);
        }
    },
    // computed:{
    //     getSaved(){
    //         var own = Object.values(this.ownPosts)
    //         if(this.ownPosts == null){
    //             return []
    //         }else{
    //             var result = own.filter(post => (post.taskid == post.id && post.status == 'saved').length > 0)
    //             console.log(result)
    //             return result
    //         }
    //     }
    // }
    // ,
    created() {

        this.getPost();
        this.checkTask();
        this.id = this.$route.params.id
        this.poster = this.$route.params.poster
        this.currUser = storeName.username
        console.log(this.poster)
        console.log(this.currUser)
        if (this.poster == this.currUser) {
            this.format = "Edit"
        }
        else {
            this.format = "View"
        }
    }

}

</script>

<style>
.iconbtn {
    color: red;
}

.btn {
    margin: 10px;
}

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