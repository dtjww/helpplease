<!-- Mel -->

<template>
    <NavBar />
    <div>
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
                        <q-btn size="lg" class="btn" icon="favorite outlined" v-model="heart" v-if="heart == false"
                            flat @click=like></q-btn>
                    </td>
                    <td align="right">
                        <q-btn color='info' class="btn">Accept Task</q-btn>
                        <q-btn color="dark" class="btn" @click=gotoChat>Chat Now</q-btn>
                    </td>
                </tr>
            </table><br>

        </q-card>


    </div>

</template>

<script>
import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue';
import { db } from '../firebase.js';
import { ref as dbRef, update, set } from "firebase/database";
import axios from 'axios';
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()

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
            heart: ref(false),
            id: '',
            taskid:'',
            status:'',

        }
    },
    components: {
        NavBar
    },
    methods: {
        // Run when Button is clicked
        gotoHome() {
            setTimeout(() => {
                this.$router.push('/home')
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
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/' + storeName.username + '/tasksInteracted.json')
                .then(response => {
                    var tasks = response.data
                    for (var task in tasks) {
                        if (task == this.id) {
                            this.heart = true
                            this.taskid = this.id
                            this.status = 'saved'
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
                set(dbRef(db, 'Login/' + storeName.username + "/tasksInteracted/" + this.id), {
                    taskid: this.id,
                    status: 'saved'
                })
            } else {
                this.heart = false
                this.taskid = null
                this.status = null
                console.log(this.taskid)
                update(dbRef(db, 'Login/' + storeName.username + '/tasksInteracted/' + this.id), {
                    taskid: null,
                    status: null
                })
            }
        }
    },
    created() {

        this.getPost();
        this.checkTask();
        this.id = this.$route.params.id
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