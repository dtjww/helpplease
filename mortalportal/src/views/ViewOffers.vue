<template>
    <NavBar />
    <div>
        <div class="q-pa-md qTableClass">
            <q-table dense  title="Offers" :rows="rows" :columns="columns" row-key="index" v-model:selected="selected">

                <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                        <q-btn icon="check" @click="acceptOffer(props.row)"></q-btn>
                        <q-btn icon="clear" @click="rejectOffer(props.row)"></q-btn>
                    </q-td>
                </template>
            </q-table>
            Selected: {{ selected }}
        </div>
    </div>
    <q-dialog v-model="confirm">
        <q-card>
            <q-card-section>
                <div class="text-h6">Confirm Offer</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div>{{ currPost.name }}</div>
                <div>{{ currRow.Angel }}</div>
                <div>{{ currRow.Offer }}</div>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn label="Yes" color="green" v-close-popup @click="updateDB()" />
                <q-btn label="No" color="red" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>

    <q-dialog v-model="reject">
        <q-card>
            <q-card-section>
                <div class="text-h6">Confirm</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div> Do you want to reject offer ?</div>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn label="Yes" color="green" v-close-popup @click="updateReject()" />
                <q-btn label="No" color="red" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>


<script>
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'
import {update, ref as dbRef, remove } from "firebase/database";
import {db} from '../firebase.js'

const columns = [

    {
        name: 'Angel', align: 'center', label: 'Angel', field: row => row.Angel,
        format: val => `${val}`, required: true,
        sortable: true
    },
    {
        name: 'Offer', align: 'center', label: 'Offer($)', field: row => row.Offer,
        format: val => `${val}`, required: true, sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
    },
    { name: 'actions', label: 'Action', align: 'center', }
]
export default {
    setup() {
        return {
            columns,
            selected: ref([])

        }
    },
    data() {
        return {
            id: this.$route.params.id,
            offers: [],
            rows: [],
            confirm: false,
            accepted: false,
            reject: false,
            currRow: [],
            currPost:'',

        }
    },
    components: {
        NavBar
    },

    methods: {
        getPost() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData/' + this.id + '/active.json')
                .then(response => {
                    console.log(response)
                    console.log(response.data)
                    this.offers = response.data
                    for (var offer in this.offers) {
                        var row = this.offers[offer]
                        this.rows.push({ Angel: row.angel, Offer: row.offer })
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getcurrPost(){
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData/' + this.id +'.json')
                .then(response => {
                    this.currPost = response.data
                    })
                .catch(error => {
                    console.log(error)
                })
        },
        acceptOffer(row){
            this.currRow = row
            console.log(this.currRow)
            this.getcurrPost()
            update(dbRef(db, 'TaskData/' + this.id + '/active/' + row.Angel), {
                status: 'accepted'
            });
            for(var offer in this.offers){
                if(this.offers[offer].angel != row.Angel){
                    remove(dbRef(db, 'TaskData/' + this.id + '/active/' + this.offers[offer].angel))
                    update(dbRef(db, 'Login/' + this.offers[offer].angel + '/tasksInteracted/active/' + this.id), {
                        status: 'rejected'
                    });
                }
            }
            this.confirm = true 
        },
        updateDB(){
            update(dbRef(db, 'TaskData/' + this.id + '/active/' + this.currRow.Angel), {
                status: 'accepted'
            });
            for(var offer in this.offers){
                if(this.offers[offer].angel != this.currRow.Angel){
                    remove(dbRef(db, 'TaskData/' + this.id + '/active/' + this.offers[offer].angel))
                    update(dbRef(db, 'Login/' + this.offers[offer].angel + '/tasksInteracted/active/' + this.id), {
                        status: 'rejected'
                    });
                }
            }
        },
        updateReject(){
            
        }
    },
    created() {
        this.getPost()
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

.qTableClass{
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    margin-top: 20px;
    padding: 20px;
}
</style>