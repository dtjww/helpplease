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
                <q-icon name="cloud_upload" />
                <input type="file" accept="image/*" @change="uploadImage" />
            </q-btn>

        </div>

        <div class="q-pa-md">
            <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-field filled :model-value="email" prefix="Username: ">
                    <template v-slot:before>
                        <q-icon name="face 4" />
                    </template>

                    <template v-slot:control>
                        <div class="self-center full-width no-outline text-center">{{ loginData.username_SU }}</div>
                    </template>
                </q-field>

                <q-field outlined :model-value="name" prefix="First Name:">
                    <template v-slot:control>
                        <div class="self-center full-width no-outline text-center" tabindex="0">{{ loginData.name_SU }}
                        </div>
                        <!-- {{loginData.fName}} -->
                    </template>

                    <template v-slot:append>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
                        </q-avatar>
                    </template>

                </q-field>

                <q-field outlined :model-value="name" prefix="Last Name:">
                    <template v-slot:control>
                        <div class="self-center full-width no-outline text-center" tabindex="0">{{ loginData.name_SU }}
                        </div>
                        <!-- {{loginData.lName}} -->
                    </template>

                    <template v-slot:append>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
                        </q-avatar>
                    </template>
                </q-field>

                <q-field standout :model-value="email" prefix="Email:" suffix="@gmail.com">
                    <!-- the suffix should change according to the email address given -->
                    <template v-slot:prepend>
                        <q-icon name="mail" />
                    </template>

                    <template v-slot:control>
                        <div class="self-center full-width text-right" tabindex="0">{{ loginData.email_SU }}</div>
                    </template>
                </q-field>
            </div>
        </div>

        <div class="row justify-end">
            <q-btn type="submit" :loading="submitting" label="Save" class="q-mt-md" color="teal">
                <template v-slot:loading>
                    <q-spinner-facebook />
                </template>
            </q-btn>

            <q-btn type="submit" label="Cancel" class="q-mt-md q-ml-md" color="red" />
        </div>

    </form>
    <!--  -->

    <!-- Change password -->
    <!-- Location -->



</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
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
            simulateSubmit
        }
    },


    data() {


        return {
            loginData: {}
        }

    },


    methods: {
        getPost() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/adminadmin.json')
                .then(response => {
                    console.log(response.data)
                    this.loginData = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },

    created() {
        this.getPost();
    },

}
</script>