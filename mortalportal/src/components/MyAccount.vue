<template>
    <div class="text-h4">
        Username: {{loginData.username}}
    </div>
    <div>
        Name: {{loginData.fName}} {{loginData.lName}}
    </div>
    <div>
        Email: {{loginData.email}}
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
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/user1.json')
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