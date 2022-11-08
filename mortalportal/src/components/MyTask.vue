<template>

    <table align="center">
        <tr>
            <td class="actionbtns">
                <q-btn flat rounded v-model="Selection" @click='activeBtn' label ='Active'/>
            </td>
            <!-- Separation between Active and Completed -->
            <td width:10px>
                |
            </td>
            <td class="actionbtns">
                <q-btn flat rounded v-model="Selection" @click="completedBtn" label="Completed" />
            </td>
        </tr>

    </table>
                
    <!-- need to include parameters for completed vs active tasks -->
    <div class="myBox myContainer">
        <div v-if="Selection == 'Active'">
            <figure v-for="post in MortalTasks" v-bind:key="post.id">
                <div v-if="post.accepted == null">
                    <q-card class="my-card grid-item" style="background: #efcebe">
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
            <figure v-for="post in MortalTasks" v-bind:key="post.id">
                <!-- need to include parameters for completed vs active tasks -->
                <div v-if="post.accepted != null">
                    <q-card class="my-card grid-item" style="background: #699dd1">
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
            currUser: storeName.username,
            posts: [],
            status: 'active',

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
        iTask(id, username) {
            console.log(username)
            this.$router.push({ name: 'Task Details', params: { id: id, poster: username } })
        },
        
    },
    computed: {
        MortalTasks() {
            var values = Object.values(this.posts)
            var result = values.filter(post => post.username == this.currUser)
            console.log(result)
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

.myBox {
    padding: 50px 10%;
}

.fontAlign {
    text-align: left;
    padding-left: 30px;
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

.my-card {
    max-width: 250px;
    width: 100%;

}

.grid-item {
    max-width: 300px;
    display: block;
    border: 1px solid black;
}

.myContainer {
    column-count: 3;
    column-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
}
</style>