<template>
    <NavBar />
    <div>
        <div class="q-pa-md qTableClass">
            <q-table dense title="Offers" :rows="rows" :columns="columns" row-key="index" v-model:selected="selected">

                <template v-slot:body-cell-actions="props">
                    <q-td :props="props">
                        <q-btn flat icon="check" color="dark" @click="acceptOffer(props.row)"></q-btn>
                        <q-btn flat icon="clear" color="dark" @click="rejectOffer(props.row)"></q-btn>
                    </q-td>
                </template>
            </q-table>
        </div>
    </div>
    <q-dialog v-model="confirm">
        <q-card class="q-px-lg q-py-md">

            <q-card-section class="q-pt-lg">
                <h7 class="q-mb-sm "><strong>Task:</strong> {{ currPost.name }}</h7><br>
                <h7 class="q-mb-sm"><strong>Angel:</strong> {{ currRow.Angel }}</h7><br>
                <h7><strong>Offered Price:</strong> ${{ currRow.Offer }}</h7>
            </q-card-section>

            <q-card-section>
                <div class="text-h7"><strong>Would you like to accept this Angel?</strong></div>
                <div align="center" class="q-mt-sm">
                    <q-btn flat label="Yes" color="secondary" v-close-popup @click="updateDB()" />
                    <q-btn flat label="No" color="negative" v-close-popup />
                </div>

            </q-card-section>

            <!-- <q-card-actions align="right">
                <q-btn flat label="Yes" color="accent" v-close-popup @click="updateDB()" />
                <q-btn flat label="No" color="negative" v-close-popup />
            </q-card-actions> -->
        </q-card>
    </q-dialog>

    <q-dialog v-model="reject">
        <q-card class="q-px-lg q-py-md">
            <q-card-section>
                <div class="text-h6">Confirm</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div> Do you want to reject offer ?</div>
            </q-card-section>
            <q-card-actions align="center" class="q-mt-sm">
                <q-btn flat label="Yes" color="secondary" v-close-popup @click="updateReject()" />
                <q-btn flat label="No" color="negative" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>


<script>
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'
import { update, ref as dbRef, remove, set } from "firebase/database";
import { db } from '../firebase.js'
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()
import { useQuasar, QSpinnerOval } from 'quasar'
import { onBeforeUnmount } from 'vue'


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
        const $q = useQuasar()
        let timer

        onBeforeUnmount(() => {
            if (timer !== void 0) {
                clearTimeout(timer)
                $q.loading.hide()
            }
        })
        return {
            columns,
            selected: ref([]),
            showLoading() {
                $q.loading.show(
                    {
                        spinner: QSpinnerOval,
                        spinnerSize: 100,
                        message: 'Loading...',
                        messageColor: 'white',
                        backgroundColor: 'black'
                    }
                )
                // hiding in 2s
                timer = setTimeout(() => {
                    $q.loading.hide()
                    this.$router.push({ name: 'Home', params: { targetP: 'mortal' } })
                    timer = void 0
                }, 2500)
            },

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
            currPost: '',
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
                        if (row.status == 'offer') {
                            this.rows.push({ Angel: row.angel, Offer: row.offer })
                        }
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getcurrPost() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData/' + this.id + '.json')
                .then(response => {
                    this.currPost = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        acceptOffer(row) {
            this.currRow = row
            console.log(this.currRow)
            this.confirm = true
        },
        updateDB() {
            set(dbRef(db, 'TaskData/' + this.id + '/accepted/' + this.currRow.Angel), {
                status: 'accepted',
                angel: this.currRow.Angel,
                offer: this.currRow.Offer,
                date: ''
            });
            update(dbRef(db, 'TaskData/' + this.id), {
                price: this.currRow.Offer
            })
            remove(dbRef(db, 'TaskData/' + this.id + '/offer'))
            for (var offer in this.offers) {
                if (this.offers[offer].angel != this.currRow.Angel) {
                    update(dbRef(db, 'Login/' + this.offers[offer].angel + '/tasksInteracted/active/' + this.id), {
                        status: 'rejected'
                    });
                }
            }
            update(dbRef(db, 'Login/' + this.currRow.Angel + '/tasksInteracted/active/' + this.id), {
                status: 'accepted',
            })
            const date = (new Date()).getDate() + '/' + ((new Date()).getMonth() + 1) + '/' + (new Date()).getFullYear()
            update(dbRef(db, 'Login/' + this.currRow.Angel + "/tasksInteracted/active/" + this.id), {
                dateAccepted: date
            })
            this.showLoading()
        },
        rejectOffer(row) {
            this.currRow = row
            this.reject = true
        },
        updateReject() {
            update(dbRef(db, 'TaskData/' + this.id + "/offer/" + this.currRow.Angel), {
                status: 'rejected'
            })
            this.$route.go()
        },
        exit() {
            storeName.username = ''
            storeName.email = ''
            storeName.name = ''
            this.$router.push({ name: 'Landing' })
        },
        handleClick() {
            this.$router.push('/profile')
        },
        gotoChat(){
            this.$router.push({ name: 'Chat', params: { id: this.id } })
        }
    },
    created() {
        this.getPost()
        this.getcurrPost()
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

.qTableClass {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    margin-top: 20px;
    padding: 20px;
}
</style>