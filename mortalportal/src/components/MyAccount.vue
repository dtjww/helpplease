<template>
    <div class="row text-h4 justify-left">
        Edit Profile
    </div>

    <!-- Profile photo change -->
    <form @submit.prevent="simulateSubmit" class="q-pa-md">
        <div class="row q-pa-md q-gutter-sm justify-left">
            <q-img src="https://placeimg.com/500/300/nature" spinner-color="white"
                style="height: 140px; max-width: 150px" />

            <q-btn class="align-center" color="secondary" style="height: 50px">
                <q-icon class="q-mr-sm" name="add_a_photo" />
                <input type="file" accept="image/*" @change="uploadImage" />
            </q-btn>
        </div>

        <div class="q-pa-md">
            <div class="q-gutter-y-md column" style="max-width: 300px">

                <q-field borderless prefix="Username: "> 
                    <template v-slot:before>
                        <q-icon name="face 4" />
                    </template>

                    <template v-slot:control>
                        <q-input filled class="self-center full-width no-outline text-center" tabindex="0" v-model="this.loginData.username" />
                    </template>
                </q-field>

                <q-field borderless prefix="Full Name: "> 
                    <template v-slot:before>
                        <q-icon name="camera_front" />
                    </template>

                    <template v-slot:control>
                        <q-input filled class="self-center full-width no-outline text-center" tabindex="0" v-model="this.loginData.name" />
                    </template>

                </q-field>
                    
                <q-field borderless prefix="Email: "> 
                    <template v-slot:before>
                        <q-icon name="mail" />
                    </template>

                    <template v-slot:control>
                        <q-input filled class="self-center full-width no-outline text-center" tabindex="0" v-model="this.loginData.email" />
                    </template>
                </q-field>

                <q-field borderless prefix="Password: ">
                    <template v-slot:before>
                        <q-icon name="lock" />
                    </template>
                    <q-input v-model="this.loginData.password" filled :type="isPwd ? 'password' : 'text'" >
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
        </div>

        <!-- Save button needs to be connected to firebase and Cancel needs to refresh the page -->
        <div class="row justify-end">
            <q-btn type="submit" :loading="submitting" label="Save" class="q-mt-md" color="teal" > 
                <!-- @click=saveChanges -->

                <template v-slot:loading>
                    <q-spinner-facebook />
                </template>
            </q-btn>

            <q-btn type="submit" label="Cancel" class="q-mt-md q-ml-md" color="red" />
        </div>

    </form>
    <!--  -->

    <!-- Location -->



</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore();
// import { db  } from '../firebase.js';
// import { ref as dbRef, update } from "firebase/database";

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
        // saveChanges() {
        //     update(dbRef(db, 'Login/' + this.id), this.posts)
        //     this.submit = true;
        // },
        
    },

    created() {
        this.getUserData();
    },

}
</script>