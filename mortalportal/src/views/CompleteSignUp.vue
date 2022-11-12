<template>
    <div class="row img-overlay img-wrapper">
        <div class="column">
            <img class="image"
                src="https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                style="width:100%" />
            <img class="image"
                src="https://images.unsplash.com/photo-1532713107108-dfb5d8d2fc42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFyaXN0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                style="width:100%" />
            <img class="image"
                src="https://images.unsplash.com/photo-1635445818409-64a0ff92eb39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                style="width:100%" />
        </div>

        <div class="column">
            <img class="image"
                src="https://images.unsplash.com/photo-1558975285-193b2c315c2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                style="width:100%" />
            <img class="image"
                src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                style="width:100%" />
            <img class="image"
                src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                style="width:100%" />
        </div>

        <div class="column">
            <img class="image"
                src="https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                style="width:100%" />
            <img class="image"
                src="https://images.unsplash.com/photo-1582902281043-69c645f40cd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                style="width:100%" />
            <img class="image"
                src="https://images.unsplash.com/photo-1623348282113-50395974159c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                style="width:100%" />
        </div>

        <div class="column">
            <img class="image"
                src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                style="width:100%" />
            <img class="image"
                src="https://images.unsplash.com/photo-1604881991664-593b31b88488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                style="width:100%" />
            <img class="image"
                src="https://images.unsplash.com/photo-1504222490345-c075b6008014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                style="width:100%" />
        </div>

        <div class="column">
            <img class="image"
                src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                style="width:100%" />
            <img class="image"
                src="https://images.unsplash.com/photo-1590605095243-072811dbe64c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                style="width:100%" />
            <img class="image"
                src="https://images.unsplash.com/photo-1579109652910-99b9be06aaec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGVkaXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                style="width:100%" />

        </div>
    </div>
    <q-card class="qcard font">
        <q-card-section>
            <h2>Complete your profile!</h2>
        </q-card-section>
        <q-card-section>

            <table align="center">
                <tr>
                    <td>
                        <q-field square filled dense readonly class="gutter" prefix="Full Name: " style="width:350px">
                            <template v-slot:control>
                                <div>{{ fullname }}</div>
                            </template>
                        </q-field>

                    </td>
                </tr>

                <tr>
                    <td>
                        <q-field square filled dense readonly class="gutter" prefix="Email: " style="width:350px">
                            <template v-slot:control>
                                <div>{{ email }}</div>
                            </template>
                        </q-field>
                    </td>
                </tr>
                <tr>
                    <td>
                        <q-input square filled clearable class="gutter" type="text" v-model="username"
                            prefix="Username:" style="width:350px" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <q-input square filled clearable class="gutter" type="password" v-model="password"
                            prefix="Password:" style="width:350px" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <q-input square filled clearable class="gutter" type="password" v-model="cpassword"
                            prefix="Confirm Password:" style="width:350px" />
                    </td>
                </tr>

            </table>


        </q-card-section>
        <q-btn class="bottom-padding" label="Complete" @click="validate()"> </q-btn>
    </q-card>

</template>

<script>
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()
import { ref as dbRef, set } from 'firebase/database'
import { db } from '../firebase'
import axios from 'axios'
import { useQuasar } from 'quasar'

export default {
    setup() {
        const $q = useQuasar()
        return {
            UsernameTaken() {
                $q.notify({
                    message: 'Username already taken',
                    color: 'negative',
                    position: 'top',
                    timeout: 2000
                })
            },
            FillsNotFilled() {
                $q.notify({
                    message: 'Please fill all the fields',
                    color: 'red',
                    textColor: 'white',
                    position: 'top',
                    icon: 'warning',
                })
            },
            PasswordWrong() {
                $q.notify({
                    message: 'Passwords do not match',
                    color: 'red',
                    textColor: 'white',
                    position: 'top',
                    icon: 'warning',
                })
            }
        }
    },

    data() {
        return {
            username: '',
            fullname: storeName.name,
            email: storeName.email,
            logins: [],
            password: '',
            cpassword: '',
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
            if (this.username == '' || this.password == '' || this.cpassword == '') {
                this.FillsNotFilled()
                return null
            } else if (this.password != this.cpassword) {
                this.PasswordWrong()
                return null
            } else {
                axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login.json')
                    .then(res => {
                        this.logins = res.data
                        if (this.logins[this.username] != null) {
                            this.UsernameTaken()
                            return null

                        } else {
                            this.completeSignIn()
                        }
                    })
            }
            // axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login.json')
            //     .then(response => {
            //         var truefalse = true
            //         this.logins = response.data
            //         for (var item in response.data) {
            //             if (item == this.username) {
            //                 alert('Username already exists')
            //                 console.log('false')
            //                 truefalse = false
            //             }
            //         }
            //         console.log(truefalse)
            //         if (truefalse == true) {
            //             this.completeSignIn();
            //         }
            //     })
        },
        validateEmail() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login.json')
                .then(response => {
                    this.logins = response.data
                    for (var item in this.logins) {
                        if (this.logins[item].email == this.email) {
                            storeName.username = this.logins[item].username
                        }
                    }
                })

            if (storeName.username != '') {

                this.$router.push('/home/angel')
            }
        },

    },
    created() {
        this.validateEmail()
    }

}

</script>

<style>
.qcard {
    width: 500px;
    padding: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
}

.font {
    font-family: radley;
}

h2 {
    padding-top: 0px;
    margin: 0px;
}

.gutter {
    margin-bottom: 10px;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial;
}

.header {
    text-align: center;
    padding: 32px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
    flex: 20%;
    padding-left: 5px;
    padding-right: 5px;
    /* max-height: 100vh; */
}

.column img {
    margin-top: 8px;
    vertical-align: middle;
}

.image {
    padding-bottom: 5px;
    border-radius: 15px;
    opacity: 0.8;
}

.img-wrapper {
    position: relative;
    width: 100%;
    font-size: 0;
}

.img-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.86);
}


/* Responsive layout - makes a two column-layout instead of four columns */
@media (max-width: 800px) {
    .column {
        flex: 50%;
        max-width: 50%;
    }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
    .column {
        flex: 100%;
        max-width: 100%;
    }
}
</style>