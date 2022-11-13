<template>
    <q-scroll-area style="height: 100vh; max-width: 100vw;" :thumb-style="thumbStyle" :bar-style="barStyle" class="karla">

        <q-toolbar class="text-white q-my-none shadow-2 bg-white karla" id="navbar">

            <q-toolbar-title shrink>
                <router-link to="/home/angel" style="color: black; text-decoration: none">
                    <q-img src="../assets/MainLogo2.png" style="width:170px"></q-img>
                </router-link>
            </q-toolbar-title>
            <q-space />
            <div class="lt-xs mainMenu">
                <q-btn rounded flat label="Chats" @click="gotoChat()" class="text-black " @mouseover="hover3 = true"
                    @mouseleave="hover3 = false" v-if="hover3 == false && status == 'pending'" />
                <q-btn rounded flat label="Chats" @click="gotoChat()" class="text-teal-5" @mouseover="hover3 = true"
                    @mouseleave="hover3 = false" v-if="hover3 == true && status == 'pending'" />

                <q-btn rounded flat label="My Account" @click="handleClick()" class="text-black "
                    @mouseover="hover = true" @mouseleave="hover = false"
                    v-if="hover == false && status == 'pending'" />
                <q-btn rounded flat label="My Account" @click="handleClick()" class="text-teal-5"
                    @mouseover="hover = true" @mouseleave="hover = false" v-if="hover == true && status == 'pending'" />

                <q-btn rounded flat label="Log Out" @click="exit()" class="text-black" @mouseover="hover2 = true"
                    @mouseleave="hover2 = false" v-if="hover2 == false && status == 'pending'" />
                <q-btn rounded flat label="Log Out" @click="exit()" class="text-teal-5 " @mouseover="hover2 = true"
                    @mouseleave="hover2 = false" v-if="hover2 == true && status == 'pending'" />

                <q-btn rounded flat label="Chats" @click="gotoChat()" class="text-black " @mouseover="hover3 = true"
                    @mouseleave="hover3 = false" v-if="hover3 == false && status == 'completed'" />
                <q-btn rounded flat label="Chats" @click="gotoChat()" class="text-indigo-6" @mouseover="hover3 = true"
                    @mouseleave="hover3 = false" v-if="hover3 == true && status == 'completed'" />

                <q-btn rounded flat label="My Account" @click="handleClick()" class="text-black "
                    @mouseover="hover = true" @mouseleave="hover = false"
                    v-if="hover == false && status == 'completed'" />
                <q-btn rounded flat label="My Account" @click="handleClick()" class="text-indigo-6"
                    @mouseover="hover = true" @mouseleave="hover = false"
                    v-if="hover == true && status == 'completed'" />

                <q-btn rounded flat label="Log Out" @click="exit()" class="text-black" @mouseover="hover2 = true"
                    @mouseleave="hover2 = false" v-if="hover2 == false && status == 'completed'" />
                <q-btn rounded flat label="Log Out" @click="exit()" class="text-indigo-6 " @mouseover="hover2 = true"
                    @mouseleave="hover2 = false" v-if="hover2 == true && status == 'completed'" />

            </div>

            <div class="gt-s hamburgMenu">
                <!-- <q-btn flat dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" /> -->
                <q-btn-dropdown flat dense dropdown-icon="menu">
                    <q-list>
                        <q-item-label header>Menu</q-item-label>
                        <q-item clickable @click="gotoChat()">
                            <q-item-section avatar>
                                <q-icon name="chat" />
                            </q-item-section>
                            <q-item-section>Chats</q-item-section>
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
            <div v-if="this.status == 'completed'">
                <h3 class="q-mt-lg text-dark"><strong>
                        Great !<br>
                        Task Status: Completed
                    </strong>
                </h3>
                <q-card class="card text-dark">
                <h3>Task: {{ posts.name }}</h3><br>
                <img :src="posts.file">
                <table>
                    <tr>
                        <td>
                            <h6>Description</h6>
                            <q-field disable dense class="q-mb-md text-dark">
                                <template v-slot:control>
                                    <div><strong>{{ posts.desc }}</strong></div>
                                </template>
                            </q-field>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6>Category</h6>
                            <q-field disable dense class="q-mb-md text-dark">
                                <template v-slot:control>
                                    <div><strong>{{ posts.category }}</strong></div>
                                </template>
                            </q-field>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6>Location</h6>
                            <q-field disable dense class="q-mb-md text-dark">
                                <template v-slot:control>
                                    <div><strong>{{ posts.loc }}</strong></div>
                                </template>
                            </q-field>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6>Date & Time</h6>
                            <q-field disable dense class="q-mb-md text-dark">
                                <template v-slot:control>
                                    <div><b>{{ posts.date }} {{ posts.time }}</b></div>
                                </template>
                            </q-field>
                        </td>
                    </tr>
                    <tr>
                        <div v-if="this.status == 'completed'">
                            <td>
                                <h6 class="text-dark">Amount To Be Paid: <b><u>${{ posts.price }}</u></b></h6>
                            </td>
                        </div>

                        <div v-else-if="this.status == 'pending'">
                            <td>
                                <h6 class="text-secondary">Amount To Be Earned: <b><u>${{ posts.price }}</u></b></h6>
                            </td>
                        </div>


                    </tr>
                </table>
                <q-btn color="dark" class="q-mt-md text-white" icon="arrow_back" label="Back to Home" v-close-popup
                    @click="BackToHome"></q-btn>
            </q-card>
            </div>

            <div v-else-if="this.status == 'pending'">
                <h3 class="q-mt-lg text-teal-5"><strong>
                        Good Job!<br>
                        Task Status: Pending Confirmation
                    </strong>
                </h3>
                <q-card class="card text-secondary">
                <h3>Task: {{ posts.name }}</h3><br>
                <img :src="posts.file">
                <table>
                    <tr>
                        <td>
                            <h6>Description</h6>
                            <q-field disable dense class="q-mb-md text-secondary">
                                <template v-slot:control>
                                    <div><strong>{{ posts.desc }}</strong></div>
                                </template>
                            </q-field>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6>Category</h6>
                            <q-field disable dense class="q-mb-md text-secondary">
                                <template v-slot:control>
                                    <div><strong>{{ posts.category }}</strong></div>
                                </template>
                            </q-field>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6>Location</h6>
                            <q-field disable dense class="q-mb-md text-secondary">
                                <template v-slot:control>
                                    <div><strong>{{ posts.loc }}</strong></div>
                                </template>
                            </q-field>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6>Date & Time</h6>
                            <q-field disable dense class="q-mb-md text-secondary">
                                <template v-slot:control>
                                    <div><b>{{ posts.date }} {{ posts.time }}</b></div>
                                </template>
                            </q-field>
                        </td>
                    </tr>
                    <tr>
                        <div v-if="this.status == 'completed'">
                            <td>
                                <h6 class="text-secondary">Amount To Be Paid: <b><u>${{ posts.price }}</u></b></h6>
                            </td>
                        </div>

                        <div v-else-if="this.status == 'pending'">
                            <td>
                                <h6 class="text-secondary">Amount To Be Earned: <b><u>${{ posts.price }}</u></b></h6>
                            </td>
                        </div>


                    </tr>
                </table>
                <q-btn color="secondary" class="q-mt-md text-white" icon="arrow_back" label="Back to Home" v-close-popup
                    @click="BackToHome"></q-btn>
            </q-card>
            </div>

        </div>
    </q-scroll-area>
</template>

<script>
import axios from 'axios'

export default {
    setup() {
        return {
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
            }
        }
    },

    data() {
        return {
            id: '',
            posts: [],
            status: '',
            style: '',
            hover: false,
            hover2: false,
            hover3: false,

        }
    },


    methods: {
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
        BackToHome() {
            this.$router.push({ name: 'Home', params: { targetP: 'angel' } })
        },
        gotoChat(){
            this.$router.push('/chat')
        }
    },
    created() {
        this.status = this.$route.params.status
        this.getPost()
        if (this.status == 'pending') {
            this.thumbStyle.backgroundColor = '#27A69A'
        }
        else if (this.status == 'completed') {
            this.thumbStyle.backgroundColor = '#4050B5'
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

.karla {
    font-family: 'karla';
}

h6 {
    margin: auto;
    text-align: left;
}

h3 {
    margin: auto
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