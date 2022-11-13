<template>
    <table align="center" class="q-pb-sm ">
        <tr>
            <td class="actionbtns">
                <q-btn flat rounded v-model="Selection" @click='activeBtn' label='Active' />
            </td>
            <td width:10px>
                |
                <!-- Separation between Active and Completed -->
            </td>
            <td class="actionbtns">
                <q-btn flat rounded v-model="Selection" @click="completedBtn" label="Completed" />
            </td>
        </tr>

    </table>

    <div class="myContainer myBox" >
        <div v-if="Selection == 'Active'">
            <!-- only returns user's active tasks as an angel, not user's tasks uploaded as mortal -->
            <figure v-for="post in activeAngelTasks" v-bind:key="post.id">
                <q-card class="my-card grid-item bg-white text-black">
                    <img :src="post.file">
                    <q-card-section class="fontAlign">
                        Mortal: {{ post.username }} <br>
                        Task: {{ post.name }}<br>
                        Date: {{ post.date }}<br>
                        Time: {{ post.time }}<br>
                        Amount: ${{ post.price }}<br>

                        <div v-if="completedCheck(post) == 'pending'" class="text-dark text-bold">
                            Status: Pending
                        </div>
                        <div v-else-if="post.accepted != null" class="text-dark text-bold">
                            Status: In Progress
                        </div>
                        <div v-else-if="activeCheck(post)" class="text-dark text-bold">
                            Status: Offered
                        </div>

                        <q-btn class="q-mt-md" color='dark' text-color="white"
                            @click="iTask(post.id, post.username)">
                            <b>Details</b>
                        </q-btn>
                    </q-card-section>
                </q-card>
            </figure>

            <figure v-for="post in activeMortalTasks" v-bind:key="post.id">
                <q-card class="my-card grid-item bg-white text-black">
                    <img :src="post.file">
                    <q-card-section class="fontAlign">
                        Mortal: {{ post.username }} <br>
                        Task: {{ post.name }}<br>
                        Date: {{ post.date }}<br>
                        Time: {{ post.time }}<br>
                        Amount: ${{ post.price }}<br>

                        <div v-if="completedCheck(post) == 'pending'" class="text-secondary text-bold">
                            Status: Pending
                        </div>
                        <div v-else-if="post.accepted != null" class="text-secondary text-bold">
                            Status: In Progress
                        </div>
                        <div v-else-if="activeCheck(post)" class="text-secondary text-bold">
                            Status: Offered
                        </div>

                        <q-btn class="q-mt-md" color='secondary' text-color="white"
                            @click="iTask(post.id, post.username)">
                            <b>Details</b>
                        </q-btn>
                    </q-card-section>
                </q-card>
            </figure>
        </div>

        <div v-else>
            <figure v-for="post in MortalTasks" v-bind:key="post.id">
                <!-- returns all of user's mortal tasks, completed and otherwise -->
                <q-card class="my-card grid-item bg-white text-black">
                    <img :src="post.file">
                    <q-card-section class="fontAlign">
                        Mortal: {{ post.username }} <br>
                        Task: {{ post.name }}<br>
                        Date: {{ post.date }}<br>
                        Time: {{ post.time }}<br>
                        Amount: ${{ post.price }}<br>

                        <q-btn class="q-mt-md" color='secondary' text-color="white" @click="iTask(post.id, post.username)">
                            <b>Details</b>
                        </q-btn>
                    </q-card-section>
                </q-card>
            </figure>
            <figure v-for="post in AngelTasks" v-bind:key="post.id">
                <!-- returns all of user's mortal tasks, completed and otherwise -->
                <q-card class="my-card grid-item bg-white text-black">
                    <img :src="post.file">
                    <q-card-section class="fontAlign">
                        Mortal: {{ post.username }} <br>
                        Task: {{ post.name }}<br>
                        Date: {{ post.date }}<br>
                        Time: {{ post.time }}<br>
                        Amount: ${{ post.price }}<br>

                        <q-btn class="q-mt-md" color='dark' text-color="white" @click="iTask(post.id, post.username)">
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
            currUser: storeName.username,
            posts: [],
            interactedTasks: [],
        }
    },

    methods: {
        getPost() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData.json')
                .then(response => {
                    // console.log(response.data)
                    this.posts = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getOwnTask() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/' + storeName.username + '/tasksInteracted.json')
                .then(response => {
                    // console.log(response.data)
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
        iTask(id, username) {
            console.log(username)
            this.$router.push({ name: 'Task Details', params: { id: id, poster: username } })
        },
        activeCheck(currPost) {
            console.log(currPost)
            var values = Object.values(currPost)

            var result = values.filter(post => post.angel == this.currUser)
            console.log(result)

            return result
        },
        completedCheck(currPost) {

            if (currPost.accepted == null) {
                return null
            }
            else {
                var values = Object.values(currPost.accepted)
                var result = values.filter(post => post.status == 'pending')
                if (result.length > 0) {
                    return 'pending'
                }
                else {
                    return null
                }
            }

        },



    },
    computed: {
        // Retrieve all tasks posted by current user (as a mortal)
        MortalTasks() {
            var values = Object.values(this.posts)
            var result = values.filter(post => post.username == this.currUser && post.accepted != null)
            console.log(result)
            var fResult = []
            for (var i in result) {
                var values2 = Object.values(result[i].accepted)
                var result2 = values2.filter(post => post.status == 'completed')
                if (result2.length > 0) {
                    fResult.push(result[i])
                }

            }
            return fResult
        },

        AngelTasks() {
            var fResult = []
            var values = Object.values(this.posts)
            var aResult = values.filter(post => post.accepted != null)
            for (var v in aResult) {
                console.log(aResult[v].accepted[this.currUser])
                if (aResult[v].accepted[this.currUser] != null &&
                    aResult[v].accepted[this.currUser].angel == this.currUser) {
                    console.log('yes')
                    if (aResult[v].accepted[this.currUser] != null && aResult[v].accepted[this.currUser].status == 'completed') {
                        fResult.push(aResult[v])
                    }
                }
            }
            console.log(fResult)
            return fResult
        },

        activeAngelTasks() {
            var allTask = Object.values(this.posts)
            if (this.interactedTasks.active == null) {
                return []
            } else {
                var values = Object.values(this.interactedTasks.active)
                console.log(allTask)
                console.log(values)
                var result = allTask.filter(post =>
                    (values.filter(task =>
                        task.taskid == post.id && (task.status == 'accepted' || task.status == 'offer' || task.status == 'pending'))).length > 0)
                console.log(result)
                return result
            }
        },

        activeMortalTasks() {
            var allTask = Object.values(this.posts)
            var result = allTask.filter(post => post.username == this.currUser)
           
                return result
            
        },




        // allCompletedTasks(){
        //     var allTask = Object.values(this.posts)
        //     if (this.interactedTasks.active == null) {
        //         return []
        //     } else {
        //         var values = Object.values(this.interactedTasks.active)
        //         // console.log(allTask)
        //         // console.log(values)
        //         var result = allTask.filter(post =>
        //             values.filter(task =>
        //                 task.taskid == post.id && task.status == 'completed' )) 
        //                 // && post.offer == this.currUser
        //         console.log(result)
        //         return result
        //     }

        // },

        // Retrieve all tasks that are active
        // TaskStatus() {
        //     var values = Object.values(this.post)
        //     var result = values.filter(post => post.accepted == null)
        //     // console.log(result)
        //     return result
        // },

        // ActiveTaskIDs() {
        //     var values = Object.values(this.posts)
        //     var result = values.filter(post => post.username.status != null)
        //     console.log(result)
        //     return result
        // },

    },

    created() {
        this.getPost();
        this.getOwnTask();

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
    padding: 0px 10% 50px 5%;
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
}

.myContainer {
    column-count: 3;
    column-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 1080px) {
    .myContainer {
        column-count: 3;
        column-gap: 10px;
        grid-template-columns: repeat(5, 1fr);
    }

    .my-card {
        max-width: 100%;
    }

}

@media (max-width: 880px) {
    .myContainer {
        column-count: 2;
        column-gap: 10px;
        grid-template-columns: repeat(1, 1fr);
    }
}

@media (max-width: 710px) {
    .myContainer {
        column-count: 1;
        column-gap: 10px;
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>