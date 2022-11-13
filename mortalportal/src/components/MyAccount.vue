<template>
    

    <form @submit.prevent="simulateSubmit" class="q-px-md karla" style=" height: calc(100vh - 200px)">
        <div class="row text-h4 text-bold justify-left karla">
        Edit Profile
    </div>
        <!-- Profile photo change (should remove tbh)
        <div class="row q-pa-md q-gutter-sm justify-left">
            <q-img src="https://placeimg.com/500/300/nature" spinner-color="white"
                style="height: 140px; max-width: 150px" />

            <q-btn class="align-center" color="secondary" style="height: 50px">
                <q-icon class="q-mr-sm" name="add_a_photo" />
                <input type="file" accept="image/*" @change="uploadImage" />
            </q-btn>
        </div> -->
        <div class="q-pa-md">
            <div class="row border q-mb-none">
                <div class="col-md-2 text-right border self-center">
                    <h7 class="q-pr-md karla">Username: </h7>
                </div>
                <div class="col-md-10 border">
                    <q-input borderless readonly input-class="text-left karla" class="self-center full-width no-outline karla" tabindex="0" v-model="this.loginData.username" />
                </div>
            </div>

            <div class="row border q-mb-sm">
                <div class="col-md-2 text-right border self-center">
                    <h7 class="q-pr-md karla">Full Name: </h7>
                </div>
                <div class="col-md-10 border">
                    <q-input rounded outlined input-class="text-left karla" class="self-center no-outline karla" tabindex="0" v-model="this.loginData.name" />
                </div>
            </div>

            <div class="row border q-mb-sm">
                <div class="col-md-2 text-right border self-center">
                    <h7 class="q-pr-md karla">Email: </h7>
                </div>
                <div class="col-md-10 border">
                    <q-input rounded outlined input-class="text-left karla" class="self-center no-outline karla" tabindex="0" v-model="this.loginData.email" />
                </div>
            </div>

            <div class="row border q-mb-sm">
                <div class="col-md-2 text-right border self-center">
                    <h7 class="q-pr-md karla">Password: </h7>
                </div>
                <div class="col-md-10 border">
                    <q-input input-class="text-left karla" class="self-center no-outline karla" v-model="this.loginData.password" rounded outlined :type="isPwd ? 'password' : 'text'" >
                        <template v-slot:append>
                        <q-icon
                            :name="isPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"
                        />
                        </template>
                        
                    </q-input>
                </div>
            </div>
        </div>


        <!-- <div class="q-pa-md">
            <div class="q-gutter-y-md column" style="max-width: 600px;"> 

                <q-field borderless prefix="Username: ">
                    <template v-slot:control>
                        <q-input borderless readonly input-class="text-center" class="self-center full-width no-outline" tabindex="0" v-model="this.loginData.username" />
                    </template>
                </q-field>

                <q-field borderless prefix="Full Name: "> 
                    <template v-slot:control>
                        <q-input filled input-class="text-center" class="self-center full-width no-outline" tabindex="0" v-model="this.loginData.name" />
                    </template>

                </q-field>
                    
                <q-field borderless prefix="Email: "> 
                    <template v-slot:control>
                        <q-input filled input-class="text-center" class="self-center full-width no-outline" tabindex="0" v-model="this.loginData.email" />
                    </template>
                </q-field>

                <q-field borderless prefix="Password: ">
                    <q-input input-class="text-center" class="self-center full-width no-outline" v-model="this.loginData.password" filled :type="isPwd ? 'password' : 'text'" >
                        <template v-slot:append>
                        <q-icon
                            :name="isPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"
                        />
                        </template>
                        
                    </q-input>
                </q-field>
                
                
            </div>
        </div> -->

        <div class="row justify-end q-mb-md">
            <q-btn flat type="submit" label="Save" class="q-mt-md" color="secondary" @click="saveChanges()"> 

                <template v-slot:loading>
                    <q-spinner-facebook />
                </template>
            </q-btn>

            <q-btn flat type="submit" label="Cancel" class="q-mt-md q-ml-xs" color="negative" @click="refreshAccount()"/>
        </div>

    </form>
    <q-dialog v-model="submit">
        <q-card class="q-pa-md">
            <q-card-section>
                <!-- <div class="text-h5">Success!</div> -->
                <q-icon name="task_alt" color="secondary" size="50px" class="center"/>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Your account details have been updated successfully. 
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="Close" color="dark" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>

</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore();
import { db  } from '../firebase.js';
import { ref as dbRef, update } from "firebase/database";

export default {
    name: 'MyAccount',

    setup() {
        const submitting = ref(false)

        function simulateSubmit() {
            submitting.value = true
            // Simulating a delay here.
            // When we are done, we reset "submitting"
            // Boolean to false to restore the
            // initial state.
            setTimeout(() => {
                // delay simulated, we are done,
                // now restoring submit to its initial state
                submitting.value = false
            }, 3000)
        }

        return {
            submitting,
            simulateSubmit,
            password: ref(''),
            isPwd: ref(true),
        }
    },


    data() {

        return {
            loginData: {},
            submit: ref(false),

        }

    },


    methods: {

        getUserData() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/' + storeName.username + '.json')
                .then(response => {
                    console.log(response.data)
                    this.loginData = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        refreshAccount(){
            this.$router.go(0)
        },
        
        saveChanges() {
            update(dbRef(db, 'Login/' + storeName.username), this.loginData)
            this.submit = true;
        },
        
    },

    created() {
        this.getUserData();
    },

}
</script>

<style>
.border {
    border: none;
}
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
.karla {
    font-family: karla;
}

@import url("https://fonts.googleapis.com/css?family=Karla")
</style>