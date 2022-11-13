<!-- Mel -->

<template>
    <q-scroll-area style="height: 100vh; max-width: 100vw;" :thumb-style="thumbStyle" :bar-style="barStyle">

        <div v-if="this.format == 'View'">
            <q-toolbar class="text-white q-my-none shadow-2 bg-white" id="navbar">

                <q-toolbar-title shrink>
                    <router-link to="/home/angel" style="color: white; text-decoration: none">
                        <q-img src="../assets/MainLogo2.png" style="width:170px"></q-img>
                    </router-link>
                </q-toolbar-title>
                <q-space />
                <div class="lt-xs mainMenu">


                    <q-btn rounded flat label="Chat" @click="gotoChat()" class="text-black "
                        @mouseover="hover3 = true" @mouseleave="hover3 = false"
                        v-if="hover3 == false && currUser != poster" />
                    <q-btn rounded flat label="Chat" @click="gotoChat()" class="text-teal-5"
                        @mouseover="hover3 = true" @mouseleave="hover3 = false"
                        v-if="hover3 == true && currUser != poster" />

                    <q-btn rounded flat label="My Account" @click="handleClick()" class="text-black "
                        @mouseover="hover = true" @mouseleave="hover = false"
                        v-if="hover == false && currUser != poster" />
                    <q-btn rounded flat label="My Account" @click="handleClick()" class="text-teal-5"
                        @mouseover="hover = true" @mouseleave="hover = false"
                        v-if="hover == true && currUser != poster" />

                    <q-btn rounded flat label="Log Out" @click="exit()" class="text-black" @mouseover="hover2 = true"
                        @mouseleave="hover2 = false" v-if="hover2 == false && currUser != poster" />
                    <q-btn rounded flat label="Log Out" @click="exit()" class="text-teal-5 " @mouseover="hover2 = true"
                        @mouseleave="hover2 = false" v-if="hover2 == true && currUser != poster" />

                        
                    <q-btn rounded flat label="Chat" @click="gotoChat()" class="text-black "
                        @mouseover="hover3 = true" @mouseleave="hover3 = false"
                        v-if="hover3 == false && currUser == poster" />
                    <q-btn rounded flat label="Chat" @click="gotoChat()" class="text-indigo-6"
                        @mouseover="hover3 = true" @mouseleave="hover3 = false"
                        v-if="hover3 == true && currUser == poster" />

                    <q-btn rounded flat label="My Account" @click="handleClick()" class="text-black "
                        @mouseover="hover = true" @mouseleave="hover = false"
                        v-if="hover == false && currUser == poster" />
                    <q-btn rounded flat label="My Account" @click="handleClick()" class="text-indigo-6"
                        @mouseover="hover = true" @mouseleave="hover = false"
                        v-if="hover == true && currUser == poster" />

                    <q-btn rounded flat label="Log Out" @click="exit()" class="text-black" @mouseover="hover2 = true"
                        @mouseleave="hover2 = false" v-if="hover2 == false && currUser == poster" />
                    <q-btn rounded flat label="Log Out" @click="exit()" class="text-indigo-6 " @mouseover="hover2 = true"
                        @mouseleave="hover2 = false" v-if="hover2 == true && currUser == poster" />

                </div>

                <div class="gt-s hamburgMenu">
                    <!-- <q-btn flat dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" /> -->
                    <q-btn-dropdown flat dense dropdown-icon="menu">
                        <q-list>
                            <q-item-label header>Menu</q-item-label>

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

            <q-card class="card">
                <h3 style="font-family:radley ;">{{ posts.name }}</h3><br>
                <img :src="posts.file">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <h6>Description</h6>
                            <q-field disabled dense style="margin-bottom:2vh;">
                                <template v-slot:control>
                                    <div>{{ posts.desc }}</div>
                                </template>
                            </q-field>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>Category</h6>
                            <q-field disabled dense style="margin-bottom:2vh;">
                                <template v-slot:control>
                                    <div>{{ posts.category }}</div>
                                </template>
                            </q-field>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>Location</h6>
                            <q-field disabled dense style="margin-bottom:2vh;">
                                <template v-slot:control>
                                    <div>{{ posts.loc }}</div>
                                </template>
                            </q-field>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>Price</h6>
                            <q-field disabled dense prefix="$" style="margin-bottom:2vh;">
                                <template v-slot:control>
                                    <div>{{ posts.price }}</div>
                                </template>
                            </q-field>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>Date & Time</h6>
                            <q-field disabled dense style="margin-bottom:2vh;">
                                <template v-slot:control>
                                    <div>{{ posts.date }} {{ posts.time }}</div>
                                </template>
                            </q-field>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <div v-if="posts.accepted == null">
                                <q-btn size="lg" class="btn iconbtn" icon="favorite" v-model="heart"
                                    v-if="heart == true" flat @click=like style="margin:0"></q-btn>
                                <q-btn size="lg" class="btn" icon="favorite outlined" v-model="heart"
                                    v-if="heart == false" flat @click=like style="margin:0"></q-btn>
                            </div>
                        </div>
                        <div class="col-5" align="right">
                            <div v-if="posts.accepted == null">
                                <q-btn color='secondary' class="btn text-white" @click=offerPopup>Make an Offer</q-btn>
                            </div>
                        </div>
                        <div class="col-5" align="right">
                            <div v-if="posts.accepted == null">
                                <q-btn color="secondary" class="btn text-white" @click=gotoChat>Chat Now</q-btn>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="completedCheck(posts) == 'accepted' && currUser != poster">
                    <q-btn color="teal-5" class="btn text-white" @click="taskComplete = true">Task Completed</q-btn>
                </div>

                <div v-else-if="completedCheck(posts) == 'pending' && currUser == poster">
                    <q-btn color="indigo-6" class="btn text-white" @click="confirmComplete = true">Confirm Completed Task
                    </q-btn>
                </div>
            </q-card>
        </div>

        <div v-else>
            <q-toolbar class="text-white q-my-none shadow-2 bg-white" id="navbar">

                <q-toolbar-title shrink>
                    <router-link to="/home/angel" style="color: white; text-decoration: none">
                        <q-img src="../assets/MainLogo2.png" style="width:170px"></q-img>
                    </router-link>
                </q-toolbar-title>
                <q-space />
                <div class="lt-xs mainMenu">

                    <q-btn rounded flat label="Chat" @click="gotoChat()" class="text-black "
                        @mouseover="hover3 = true" @mouseleave="hover3 = false"
                        v-if="hover3 == false && currUser == poster" />
                    <q-btn rounded flat label="Chat" @click="gotoChat()" class="text-indigo-6"
                        @mouseover="hover3 = true" @mouseleave="hover3 = false"
                        v-if="hover3 == true && currUser == poster" />

                    <q-btn rounded flat label="My Account" @click="handleClick()" class="text-black "
                        @mouseover="hover = true" @mouseleave="hover = false"
                        v-if="hover == false && currUser == poster" />
                    <q-btn rounded flat label="My Account" @click="handleClick()" class="text-indigo-6"
                        @mouseover="hover = true" @mouseleave="hover = false"
                        v-if="hover == true && currUser == poster" />

                    <q-btn rounded flat label="Log Out" @click="exit()" class="text-black" @mouseover="hover2 = true"
                        @mouseleave="hover2 = false" v-if="hover2 == false && currUser == poster" />
                    <q-btn rounded flat label="Log Out" @click="exit()" class="text-indigo-6 " @mouseover="hover2 = true"
                        @mouseleave="hover2 = false" v-if="hover2 == true && currUser == poster" />

                </div>

                <div class="gt-s hamburgMenu">
                    <!-- <q-btn flat dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" /> -->
                    <q-btn-dropdown flat dense dropdown-icon="menu" no-icon-animation=True>
                        <q-list>
                            <q-item-label header>Menu</q-item-label>
                            <q-item clickable v-ripple>
                                <q-item-section avatar>
                                    <q-icon name="favorite" />
                                </q-item-section>
                                <q-item-section @click="gotoSaved()">Saved</q-item-section>
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
            <q-card class="card">
                <h3>{{ posts.name }}</h3><br>
                <img :src="posts.file">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <h6>Task</h6>
                            <q-input dense type="text" class="inputBoxes" v-model="this.posts.name"
                                :rules="[val => val && val.length > 0 || 'Please Enter a Task Name']"></q-input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>Description</h6>
                            <q-input dense type="text" class="inputBoxes" v-model="this.posts.desc"
                                :rules="[val => val && val.length > 0 || 'Please Enter a Description']"></q-input>
                        </div>
                    </div>
                    <div class="row">
                        <div class=col>
                            <h6>Category</h6>
                            <q-select dense v-model="this.posts.category" :options="task" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please Choose a Category']"
                                class="inputBoxes" />
                        </div>
                    </div>
                    <div class=row>
                        <div class="col">
                            <h6>Location</h6>
                            <q-select dense v-model="this.posts.loc" :options="this.locations" lazy-rules
                                :rules="[val => val && val.length > 0 || 'Please Choose a Location']"
                                class="inputBoxes" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>Price</h6>
                            <q-input prefix="$" dense type="number" class="price" v-model="this.posts.price"
                                style="width:15vw;">
                            </q-input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>Date & Time</h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <q-input dense type='date' v-model="this.posts.date" class="date">
                            </q-input>
                        </div>
                        <div class="col-6">
                            <q-input dense type='time' v-model="this.posts.time" class="date">
                            </q-input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <q-btn color="accent" label="upload new image" @click="uploadImage"
                                class="date bg-white text-indigo-6" />
                            <input type="file" style="display: none" ref="fileInput" accept='image/*'
                                @change=onFilePicked /><br>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style="margin-bottom:5vh;margin-top:2vh">
                            <img v-if='imageUrl != ""' :src="imageUrl" width="400" class="date">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <q-btn color='indigo-2' class="btn" @click=saveChanges>Save Changes</q-btn>
                    </div>
                    <div class="col-6">
                        <q-btn color="indigo-2" class="btn" @click=delPost>Delete Task</q-btn>
                    </div>
                </div>
            </q-card>
        </div>
    </q-scroll-area>

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
        <q-card class="q-pa-lg">
            <q-card-section>
                <div class="text-h6"><strong>Make an offer</strong></div>
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

    <q-dialog v-model="taskComplete">
        <q-card class="q-pa-md">
            <q-card-section>
                <div class="text-h6 text-center text-secondary">Confirm Mission Success</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Do you confirm you have completed the task?
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Yes" color="secondary" v-close-popup @click=updateCompleted />
                <q-btn flat label="No" style="color:#ac5147" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>

    <q-dialog v-model="confirmComplete">
        <q-card class="q-pa-md">
            <q-card-section>
                <div class="text-h6 text-center text-secondary">Confirm Mission Success</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Do you confirm that your Angel has completed the task?
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Yes" color="secondary" v-close-popup @click=updateConfirmCompleted />
                <q-btn flat label="No" style="color:#ac5147" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>

</template>

<script>
import { ref } from 'vue';
import { db, storage } from '../firebase.js';
import { ref as dbRef, update, set, push, remove } from "firebase/database";
import { ref as stRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import axios from 'axios';
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
                $q.loading.show()
                // hiding in 2s
                timer = setTimeout(() => {
                    $q.loading.hide()
                    timer = void 0
                }, 2500)

            },
            showDeleting() {
                $q.loading.show(
                    {
                        message: 'Deleting...',
                        spinnerSize: 100,
                        backgroundColor: 'black',
                        spinner: QSpinnerOval
                    }
                )


                // hiding in 2s
                timer = setTimeout(() => {
                    $q.loading.hide()
                    this.$router.push({ name: 'Home', params: { targetP: 'mortal' } })
                    timer = void 0
                }, 2500)

            },
            showUpdating() {
                $q.loading.show(
                    {
                        message: 'Updating...',
                        spinnerSize: 100,
                        backgroundColor: 'black',
                        spinner: QSpinnerOval
                    }
                )


                // hiding in 2s
                timer = setTimeout(() => {
                    $q.loading.hide()
                    this.$router.push({ name: 'Home', params: { targetP: 'mortal' } })
                    timer = void 0
                }, 2500)

            },
            showOffer() {
                $q.loading.show(
                    {
                        message: 'Sending Offer...',
                        spinnerSize: 100,
                        backgroundColor: 'black',
                        spinner: QSpinnerOval
                    }
                )


                // hiding in 2s
                timer = setTimeout(() => {
                    $q.loading.hide()
                    this.$router.push({ name: 'Home', params: { targetP: 'angel' } })
                    timer = void 0
                }, 2500)

            },
            thumbStyle: {
                right: '4px',
                borderRadius: '5px',
                backgroundColor: '#27A69A',
                width: '5px',
                opacity: 0.75
            },

            barStyle: {
                right: '2px',
                borderRadius: '9px',
                width: '9px',
                opacity: 0.2
            },
        }
    },
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
            ownPosts: [],
            taskComplete: false,
            confirmComplete: false,
            angel: '',
            currUser: storeName.username,
            poster: this.$route.params.poster,
            myUserDetails: [],
            existingChat: false,
            chatId: '',
            hover: false,
            hover2: false,
            hover3:false,


        }
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
                    this.currUser = storeName.username
                    this.poster = this.$route.params.poster
                    if (this.posts.accepted != null) {
                        var values = this.posts.accepted
                        for (var post in values) {

                            if (values[post].status == 'pending') {
                                this.angel = values[post].angel
                            }
                        }
                        console.log(this.currUser, this.poster)
                        if (this.currUser != this.poster) {

                            this.format = 'View'
                            this.thumbStyle.backgroundColor = '#27A69A'
                        } else {
                            this.format = "View"
                            this.thumbStyle.backgroundColor = '#4050B5'
                        }
                        console.log(this.style)
                    }
                    else {
                        if (this.poster == this.currUser) {
                            this.format = "Edit"
                            this.thumbStyle.backgroundColor = '#4050B5'

                        }
                        else {
                            this.format = "View"
                            this.thumbStyle.backgroundColor = '#27A69A'
                        }
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        checkTask() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/' + storeName.username + '/tasksInteracted/saved.json')
                .then(response => {
                    this.ownPosts = response.data
                    for (var task in this.ownPosts) {
                        if (task == this.id) {
                            this.heart = true
                            return this.heart = true
                        }

                    }
                })

        },
        checkUserChats() {
            console.log("checkUserChats")
            // console.log(storeName.username)
            // var existingChat = false
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/' + this.currUser + '.json')
                .then(response => {
                    this.myUserDetails = response.data
                    console.log("checkUserChats")
                    console.log(this.myUserDetails.chats)
                    this.checkExistingChat()
                })
        },
        checkExistingChat() {
            console.log("checkUserChats")
            console.log(this.myUserDetails.chats)
            for (var chatid in this.myUserDetails.chats) {
                if (this.myUserDetails.chats[chatid] == this.id) {
                    // this.existingChat = true
                    console.log("existingChat")
                    console.log(this.existingChat)
                    console.log(chatid)
                    this.chatId = chatid
                    return chatid
                    // return existingChat
                }
            }
            return null
        },
        noExistingChat() {
            console.log("noExistingChat")
            //create chat id in Message
            let newChatId;
            let temp = "";
            push(dbRef(db, 'Message'), temp)
                .then((data) => {
                    // to get the key of the file                
                    newChatId = data.key;
                    console.log(newChatId)
                    this.chatId = newChatId
                })
                .then(() => {
                    var temp = {}
                    temp[this.chatId] = this.id
                    set(dbRef(db, 'Login/' + this.currUser + '/chats/' + this.chatId), this.id)
                    set(dbRef(db, 'Login/' + this.poster + '/chats/' + this.chatId), this.id)
                    var temp2 = {}
                    temp2[this.chatId] = this.currUser
                    set(dbRef(db, 'TaskData/' + this.id + '/chats/' + this.chatId), this.currUser)

                })
            // 
            //push to my user chats ( chat id : task id)
            //push to poster user chats ( chat id : task id)
            //push to post data (chat id : my username)
            //
        },
        gotoChat() {
            if (this.chatId != null && this.chatId != '') {
                this.checkExistingChat();
                this.paramTask(this.id, this.chatId);
            }
            else {
                this.noExistingChat()
                // this.checkExistingChat();
                setTimeout(() => {
                    this.paramTask(this.id, this.chatId)
                }, 3200);
            }
        },
        paramTask(id, chatid) {
            this.$router.push({ name: 'Chat', params: { id: id, chatid: chatid } })
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
            this.showUpdating()
        },
        uploadImage() {
            this.$refs.fileInput.click()
        },
        onFilePicked(event) {
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
            this.showDeleting()
            remove(dbRef(db, 'TaskData/' + this.id))
        },
        gotoHomeInstant() {
            this.$router.push({ name: 'Home', params: { targetP: 'mortal' } })
        },
        offerPopup() {
            this.offer_price = this.posts.price
            this.Offer = true
        },
        makeAnOffer() {
            this.showOffer()
            const date = (new Date()).getDate() + '/' + ((new Date()).getMonth() + 1) + '/' + (new Date()).getFullYear()
            set(dbRef(db, 'Login/' + storeName.username + "/tasksInteracted/active/" + this.id), {
                status: 'offer',
                taskid: this.id,
                offer: this.offer_price,
                dateOffer: date
            })
            set(dbRef(db, 'TaskData/' + this.id + "/offer/" + storeName.username), {
                status: 'offer',
                taskid: this.id,
                offer: this.offer_price,
                angel: storeName.username,
                dateOffer: date
            })
        },
        updateCompleted() {

            const date = (new Date()).getDate() + '/' + ((new Date()).getMonth() + 1) + '/' + (new Date()).getFullYear()
            update(dbRef(db, 'Login/' + storeName.username + "/tasksInteracted/active/" + this.id), {
                datePending: date
            })
            update(dbRef(db, 'Login/' + storeName.username + '/tasksInteracted/active/' + this.id), {
                status: 'pending',

            })
            update(dbRef(db, 'TaskData/' + this.id + '/accepted/' + storeName.username), {
                status: 'pending',
            });
            this.showLoading()
            this.$router.push({ name: 'Task Complete', params: { id: this.id, status: 'pending' } })

        },
        completedCheck(currPost) {
            if (currPost.accepted == null) {
                return null
            }
            else {
                var values = Object.values(currPost.accepted)
                var resultP = values.filter(post => post.status == 'pending')
                var resultA = values.filter(post => post.status == 'accepted')
                if (resultP.length > 0) {
                    return 'pending'
                }
                else if (resultA.length > 0) {
                    return 'accepted'
                }
                else {
                    return null
                }
            }
        },

        updateConfirmCompleted() {
            const date = (new Date()).getDate() + '/' + ((new Date()).getMonth() + 1) + '/' + (new Date()).getFullYear()
            update(dbRef(db, 'Login/' + this.angel + "/tasksInteracted/active/" + this.id), {
                dateCompleted: date
            })
            update(dbRef(db, 'Login/' + this.angel + '/tasksInteracted/active/' + this.id), {
                status: 'completed'
            })
            console.log(this.angel)
            update(dbRef(db, 'TaskData/' + this.id + '/accepted/' + this.angel), {
                status: 'completed',
            });
            this.$router.push({ name: 'Task Complete', params: { id: this.id, status: 'completed' } })
        },

    },

    created() {
        this.poster = this.$route.params.poster
        this.currUser = storeName.username
        this.getPost();
        this.checkTask();
        this.id = this.$route.params.id
        this.checkUserChats();



    },

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

q-input {
    padding: 0
}

.hamburgMenu {
    display: none;
}

.mainMenu {
    display: block
}

@media (max-width:700px) {
    .hamburgMenu {
        display: block;
    }

    .mainMenu {
        display: none;
    }
}
</style>