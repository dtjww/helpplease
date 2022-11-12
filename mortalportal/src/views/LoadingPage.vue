<script>
import axios from 'axios';
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()

export default {
    data(){
        return{
            logins: [],
            email: storeName.email
        }
    },  
    methods: {
        validateEmail() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login.json')
                .then(response => {
                    this.logins = response.data
                    for (var item in this.logins) {
                        if (this.logins[item].email == this.email) {
                            storeName.username = this.logins[item].username
                        }
                    }
                    console.log(storeName.username)
                    if (storeName.username == "") {
                        this.$router.push('/gSignin')
                    }
                    else {
                        this.$router.push('/home/angel')
                    }
                })

        },
    },
    created(){
        this.validateEmail()
    }
}
</script>