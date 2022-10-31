<template>
    <div>
        <div>
                Username: {{loginData.username_SU}}
            </div>
            <div>
                <!-- Name: {{loginData.fName}} {{loginData.lName}} -->
                Name : {{loginData.name_SU}}
            </div>
            <div>
                Email: {{loginData.email_SU}}
            </div>
    </div>
    
</template>

<script>
import axios from 'axios';
export default {
    name: 'MyAccount',

    data (){
        return {
            loginData: {},
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
    }
    ,
    created() {
        this.getPost();
    },

    }
</script>