<!-- Mel -->

<template>

    <head>
        <title>
            Home
        </title>
    </head>

    <NavBar />
    <!-- <div>
        <button @click="getPost">Get Post</button>
    </div> -->

    <table align="center">
        <tr>
            <td class="actionbtns">
                <q-btn flat rounded v-model="Selection" @click='angelBtn'>
                    <h5>Angel</h5>
                </q-btn>
            </td>
            <td width:10px>
                |
            </td>
            <td class="actionbtns">
                <q-btn flat rounded v-model="Selection" @click="mortalBtn">
                    <h5>Mortal</h5>
                </q-btn>
            </td>
        </tr>
    </table>

    <div v-if="Selection == 'Angel'">
        <table align="center">
            <tr>

                <td>
                    <q-btn v-model="activeBtn" class="actionbtns" @click="FindBtn">Find</q-btn>
                </td>
                <td>
                    <q-btn v-model="activeBtn" class="actionbtns" @click="SavedBtn">Saved</q-btn>
                </td>
                <td>
                    <q-btn v-model="activeBtn" class="actionbtns" @click="ActiveBtn">Active</q-btn>
                </td>

            </tr>
            <tr>
                <td colspan="3">
                    <q-input rounded outlined label="Search" class="search" v-model="search" v-if="activeBtn == 'Find'">
                    </q-input>
                </td>
            </tr>
        </table>

        <div class="container box">
            <div v-if="activeBtn == 'Find'">
                <figure v-for="post in searchForTask " v-bind:key="post.id">
                    <q-card class="my-card grid-item" style="background: #f2cbb6">
                        <img :src="post.file">
                        <q-card-section class="fontAlign">
                            Mortal: {{ post.username }} <br>
                            Task: {{ post.name }}<br>
                            Date: {{ post.date }}<br>
                            Time: {{ post.time }}<br>
                            Amount: ${{ post.price }}<br>

                            <q-btn color='white' text-color="black" @click=iTask(post.id)><b>Details</b></q-btn>
                        </q-card-section>
                    </q-card>
                </figure>
            </div>
            <div v-else-if="activeBtn == 'Saved'">
                <figure v-for="post in searchForSavedTask " v-bind:key="post.id">
                    <q-card class="my-card grid-item" style="background: #f2cbb6">
                        <img :src="post.file">
                        <q-card-section class="fontAlign">
                            Mortal: {{ post.username }} <br>
                            Task: {{ post.name }}<br>
                            Date: {{ post.date }}<br>
                            Time: {{ post.time }}<br>
                            Amount: ${{ post.price }}<br>

                            <q-btn color='white' text-color="black" @click=iTask(post.id)><b>Details</b></q-btn>
                        </q-card-section>
                    </q-card>
                </figure>
            </div>
            <div v-else-if="activeBtn == 'Active'">
                <figure v-for="post in searchForActiveTask " v-bind:key="post.id">
                    <q-card class="my-card grid-item" style="background: #f2cbb6">
                        <img :src="post.file">
                        <q-card-section class="fontAlign">
                            Mortal: {{ post.username }} <br>
                            Task: {{ post.name }}<br>
                            Date: {{ post.date }}<br>
                            Time: {{ post.time }}<br>
                            Amount: ${{ post.price }}<br>

                            <q-btn color='white' text-color="black" @click=iTask(post.id)><b>Details</b></q-btn>
                        </q-card-section>
                    </q-card>
                </figure>
            </div>

        </div>
    </div>

    <div v-else>
        <q-btn color='dark' @click=goToTask>New Post</q-btn>
    </div>

</template>

<script>
import axios from 'axios';
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue';
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()

export default {
    setup() {

        return {
            tab: ref('mails')
        }
    },

    name: 'PageIndex',
    data() {
        return {
            isLoading: true,
            useData: false,
            useWifi: false,
            posts: {},
            angel: false,
            mortal: false,
            search: '',
            searchPost: [],
            activeBtn: 'Find',
            interactedTasks: [],
            Selection: 'Angel',
        }
    },
    components: {
        NavBar
    }

    ,
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
        goToTask() {
            this.$router.push('/task')
        },
        iTask(id) {
            console.log(this.posts.id)
            this.$router.push({ name: 'Task Details', params: { id: id } })
        },
        FindBtn() {
            this.activeBtn = 'Find'
            console.log(this.activeBtn)
        },
        SavedBtn() {
            this.activeBtn = 'Saved'
            console.log(this.activeBtn)
        },
        ActiveBtn() {
            this.activeBtn = 'Active'
            console.log(this.activeBtn)
        },
        angelBtn() {
            this.Selection = 'Angel'
        },
        mortalBtn() {
            this.Selection = 'Mortal'
        }



    },

    computed: {

        searchForTask() {
            var values = Object.values(this.posts)
            var result = values.filter(post => post.name.toLowerCase().includes(this.search.toLowerCase()))
            return result
        },
        searchForSavedTask() {
            var allTask = Object.values(this.posts)
            var values = Object.values(this.interactedTasks)
            var result = allTask.filter(post => (values.filter(task => task.taskid == post.id && task.status == 'saved')).length > 0)
            console.log(result)
            return result
        },
        searchForActiveTask() {
            var allTask = Object.values(this.posts)
            var values = Object.values(this.interactedTasks)
            console.log(allTask)
            console.log(values)
            var result = allTask.filter(post => (values.filter(task => task.taskid == post.id && task.status == 'active')).length > 0)
            console.log(result)
            return result
        },
    },


    created() {
        this.getPost();
        this.getOwnTask();
    },

}
</script>

<style lang="scss" scoped>
.search {
    margin-top: 15px;
    margin-bottom: 15px;
}

.actionbtns {
    width: 150px;
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

.box {
    padding: 50px 10%;
}

.fontAlign {
    text-align: left;
    padding-left: 30px;
}

// ----------------------------------


/////////////////////////////////////////////////////////////

body {
    background-color: #000;
    font: 1.1em Arial, Helvetica, sans-serif;

}

img {
    max-width: 100%;
    display: block;
    border-radius: 10%;
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

//figure a {
//color: black;
//text-decoration: none;
//}

//figcaption {
//grid-row: 2;
//grid-column: 1;
//background-color: rgba(255,255,255,.5);
//padding: .2em .5em;
//justify-self: start;
//}

.container {
    column-count: 4;
    column-gap: 10px;
    //display: grid;
    grid-template-columns: repeat(5, 1fr);
    //grid-template-rows: masonry;
}

// @media (max-width: 1850px) {
//     .container {
//         grid-template-columns: repeat(4, 1fr);
//         column-count: 4;
//         column-gap: 10px;
//     }

//     .q-card {
//         max-width: 100%;
//     }

// }

@media (max-width: 1080px) {
    .container {
        grid-template-columns: repeat(3, 1fr);
        column-count: 3;
        column-gap: 10px;
    }

    .q-card {
        max-width: 100%;
    }

}

@media (max-width: 800px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
        column-count: 2;
        column-gap: 10px;
    }

    .q-card {
        max-width: 100%;
    }

}

@media (max-width: 600px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
        column-count: 2;
        column-gap: 10px;
    }

    .q-card {
        max-width: 100%;
    }
}

@media (max-width: 500px) {
    .container {
        grid-template-columns: repeat(1, 1fr);
        column-count: 1;
        column-gap: 10px;
    }

    .q-card {
        max-width: 100%;
    }
}
</style>
