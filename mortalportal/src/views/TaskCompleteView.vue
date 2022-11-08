<template>
    <NavBar />
    <div>
        <div v-if="this.status == 'completed'">
            <h2>
                Great !<br>
                Task Status: Completed
            </h2>
        </div>

        <div v-else-if="this.status == 'pending'">
            <h2>
                Good Job !<br>
                Task Status: Pending Confirmation
            </h2>
        </div>

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
                        <h6>Date & Time</h6>
                        <q-field readonly>
                            <template v-slot:control>
                                <div>{{ posts.date }} {{ posts.time }}</div>
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
            <q-btn label="Back to Home" v-close-popup @click="BackToHome"></q-btn>
        </q-card>
    </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import axios from 'axios'

export default {

    data() {
        return {
            id: '',
            posts: [],
            status: ''

        }
    },
    components: {
        NavBar
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
        this.getPost()
        this.status = this.$route.params.status
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
</style>