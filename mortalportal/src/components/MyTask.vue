<template>

    <table align="center">
        <tr>
            <td class="actionbtns">
                <q-btn flat rounded v-model="Selection" @click='activeBtn'>
                    <h7>Active</h7>
                </q-btn>
            </td>

            <!-- Separation between Active and Completed -->
            <td width:10px>
                |
            </td>
            <td class="actionbtns">
                <q-btn flat rounded v-model="Selection" @click="completedBtn">
                    <h7>Completed</h7>

                    <!-- <figure v-for="post in searchForSavedTask " v-bind:key="post.id">
                        <q-card class="my-card grid-item" style="background: #f2cbb6">
                            <img :src="post.file">
                            <q-card-section class="fontAlign">
                                Mortal: {{ post.username }} <br>
                                Task: {{ post.name }}<br>
                                Date: {{ post.date }}<br>
                                Time: {{ post.time }}<br>
                                Amount: ${{ post.price }}<br>

                                <q-btn color='white' text-color="black" @click="iTask(post.id, post.username)">
                                    <b>Details</b>
                                </q-btn>
                            </q-card-section>
                        </q-card>
                    </figure> -->
                </q-btn>
            </td>
        </tr>
    </table>
    <div class="container box">
    <div v-if="Selection == 'Active'">
        <h1> wassup</h1>
            <figure v-for="post in searchForTask " v-bind:key="post.id">
                <div v-if="post.username != currUser && post.accepted == null">
                    <q-card class="my-card grid-item" style="background: #f2cbb6">
                        <img :src="post.file">
                        <q-card-section class="fontAlign">
                            Mortal: {{ post.username }} <br>
                            Task: {{ post.name }}<br>
                            Date: {{ post.date }}<br>
                            Time: {{ post.time }}<br>
                            Amount: ${{ post.price }}<br>
                            <q-btn color='white' text-color="black" @click="iTask(post.id, post.username)">
                                <b>Details</b>
                            </q-btn>
                        </q-card-section>
                    </q-card>
                </div>
            </figure>
     </div>       
        
    <div v-else>
            <h1> nth much hbu</h1>
            <figure v-for="post in searchForActiveTask " v-bind:key="post.id">
                        <q-card class="my-card grid-item" style="background: #f2cbb6">
                            <img :src="post.file">
                            <q-card-section class="fontAlign">
                                Mortal: {{ post.username }} <br>
                                Task: {{ post.name }}<br>
                                Date: {{ post.date }}<br>
                                Time: {{ post.time }}<br>
                                Amount: ${{ ownOffer(post) }}<br>

                                <div v-if="post.accepted != null">
                                    Status: In Progress
                                </div>
                                <div v-else-if="activeCheck(post.offer)">
                                    Status: Offered
                                </div>
                                <q-btn color='white' text-color="black" @click="iTask(post.id, post.username)">
                                    <b>Details</b>
                                </q-btn>
                            </q-card-section>
                        </q-card>
                    </figure>
    </div>

            </div>




</template>

<script>
import axios from 'axios';
import { useCounterStore } from "@/store/store"; // start session 
const storeName = useCounterStore()


export default {
    name: 'MyTask',
    data() {
        return {
            Selection: 'Active',
        }
    },

    methods: {
        getPost() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData.json')
                .then(response => {
                    console.log(response.data)
                    this.posts = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getOwnTask() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/' + storeName.username + '/tasksInteracted.json')
                .then(response => {
                    console.log(response.data)
                    this.interactedTasks = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        activeBtn() {
            this.Selection = 'Active'
        },
        completedBtn() {
            this.Selection = 'Completed'
        },
        activeCheck(currPost) {
            var values = Object.values(currPost)
            var result = values.filter(post => post.angel == this.currUser)
            console.log(result)

            return result
        },
    },
    computed: {
        MortalTasks() {
            var values = Object.values(this.posts)
            var result = values.filter(post => post.username == this.currUser)
            return result
        }
    },

    created() {
        this.getPost();
        this.getOwnTask();
        if (this.$route.params.targetP == 'angel') {
            this.targetP = 'angel'
        }
        else {
            this.targetP = 'mortal'
        }
    },

}


</script>

<style scoped>
.actionbtns {
    border-radius: 10px;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
}

.box {
    padding: 50px 10%;
}

figure {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
}

figure>q-card {
    grid-row: 1 / -1;
    grid-column: 1;
}

</style>