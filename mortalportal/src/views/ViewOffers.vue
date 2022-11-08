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
import {update, ref as dbRef, remove, set } from "firebase/database";
import {db} from '../firebase.js'
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()

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
            currUser: storeName.username,

        }
    },
    components: {
        NavBar
    },

    methods: {
        getPost() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData/' + this.id + '/offer.json')
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
            this.confirm = true 
        },
        updateDB(){
            set(dbRef(db, 'TaskData/' + this.id + '/accepted/' + this.currRow.Angel), {
                status: 'accepted',
                angel: this.currRow.Angel,
                offer: this.currRow.Offer
            });
            update(dbRef(db,'TaskData/' + this.id), {
                price: this.currRow.Offer
            })
            remove(dbRef(db, 'TaskData/' + this.id + '/offer'))
            for(var offer in this.offers){
                if(this.offers[offer].angel != this.currRow.Angel){
                    update(dbRef(db, 'Login/' + this.offers[offer].angel + '/tasksInteracted/active/' + this.id), {
                        status: 'rejected'
                    });
                }
            }
            update(dbRef(db, this.currRow.Angel + '/tasksInteracted/active/' + this.id), {
                status: 'accepted'
            })
            setTimeout(() => {
                this.$router.push({name: 'Home', params:{targetP:'mortal'}})
            }, 1500)


            
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