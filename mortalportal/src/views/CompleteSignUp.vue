<template>
    <q-card class="qcard">
        <q-card-section>
            <h2>Complete your profile !</h2>
        </q-card-section>
        <q-card-section>
            <table align="center">
                <tr>
                    <td>
                        <q-input type="text" v-model="username" prefix="Username:" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <q-field readonly prefix="Full Name: ">
                            <template v-slot:control>
                                <div>{{ fullname }}</div>
                            </template>
                        </q-field>

                    </td>
                </tr>

                <tr>
                    <td>
                        <q-field readonly prefix="Email: ">
                            <template v-slot:control>
                                <div>{{ email }}</div>
                            </template>
                        </q-field>
                    </td>
                </tr>
            </table>

        </q-card-section>

        <q-btn label="Complete" @click="validate()">

        </q-btn>
    </q-card>
</template>

<script>
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()
import { ref as dbRef, set } from 'firebase/database'
import { db } from '../firebase'
import axios from 'axios'

export default {
    data() {
        return {
            username: '',
            fullname: storeName.name,
            email: storeName.email,
            logins: []
        }
    },
    methods: {
        completeSignIn() {
            storeName.username = this.username
            set(dbRef(db, 'Login/' + this.username), {
                username: this.username,
                fullname: this.fullname,
                email: this.email
            })
            this.$router.push('/home/angel')
        },
        validate() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login.json')
                .then(response => {
                    var truefalse = true
                    this.logins = response.data
                    for (var item in response.data) {
                        if (item == this.username) {
                            alert('Username already exists')
                            console.log('false')
                            truefalse = false
                        }
                    }
                    console.log(truefalse)
                    if (truefalse == true) {
                        this.completeSignIn();
                    }
                })
        }
    }
}

</script>

<style>
.qcard {
    padding: 20px;
    margin: 30px;
}
</style>