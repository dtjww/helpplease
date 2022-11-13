<template>
    <q-toolbar class="text-white q-my-none shadow-2" :style="style" id="navbar">

        <q-toolbar-title shrink>
            <router-link to="/home/angel" style="color: white; text-decoration: none">
                <q-img src="../assets/MainLogoWhite.png" style="width:170px"></q-img>
            </router-link>
        </q-toolbar-title>
        <q-space />
        <div class="lt-xs mainMenu">

            <q-btn stretch flat label="My Account" @click="handleClick()" />

            <q-btn stretch flat label="Log Out" @click="exit()" />

        </div>

        <div class="gt-s hamburgMenu">
            <!-- <q-btn flat dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" /> -->
            <q-btn-dropdown flat dense dropdown-icon="menu">
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
    <div>
        <div v-if="this.status == 'completed'">
            <h3 class="q-mt-lg"><strong>
                Great !<br>
                Task Status: Completed
                </strong>
            </h3>
        </div>

        <div v-else-if="this.status == 'pending'">
            <h3 class="q-mt-lg"><strong>
                Good Job!<br>
                Task Status: Pending Confirmation
                </strong>
            </h3>
        </div>

        <q-card class="card text-dark">
            <h3>Task: {{ posts.name }}</h3><br>
            <img :src="posts.file">
            <table>
                <tr>
                    <td>
                        <h6>Description</h6>
                        <q-field disable dense class="q-mb-md">
                            <template v-slot:control>
                                <div><strong>{{ posts.desc }}</strong></div>
                            </template>
                        </q-field>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6>Category</h6>
                        <q-field disable dense class="q-mb-md">
                            <template v-slot:control>
                                <div><strong>{{ posts.category }}</strong></div>
                            </template>
                        </q-field>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6>Location</h6>
                        <q-field disable dense class="q-mb-md">
                            <template v-slot:control>
                                <div><strong>{{ posts.loc }}</strong></div>
                            </template>
                        </q-field>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6>Date & Time</h6>
                        <q-field disable dense class="q-mb-md">
                            <template v-slot:control>
                                <div><b>{{ posts.date }} {{ posts.time }}</b></div>
                            </template>
                        </q-field>
                    </td>
                </tr>
                <tr>
                    <div v-if="this.status == 'completed'">
                        <td>
                            <h6>Amount To Be Paid: <b><u>${{ posts.price }}</u></b></h6>
                        </td>
                    </div>

                    <div v-else-if="this.status == 'pending'">
                        <td>
                            <h6>Amount To Be Earned: <b><u>${{ posts.price }}</u></b></h6>
                        </td>
                    </div>


                </tr>
            </table>
            <q-btn flat color="accent" class="q-mt-md" icon="arrow_back" label="Back to Home" v-close-popup @click="BackToHome"></q-btn>
        </q-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {

    data() {
        return {
            id: '',
            posts: [],
            status: '',
            style: '',
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
        }
    },
    created() {
        this.status = this.$route.params.status
        this.getPost()

    }
    ,
    mounted() {
        if (this.status == 'completed') {
            this.style = "background-color: #efa2a4";
        }
        else {
            this.style = "background-color: #3760b8";

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