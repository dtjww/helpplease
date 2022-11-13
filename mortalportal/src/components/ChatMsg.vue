<template>
    <div class="q-pa-md row justify-center">
        <div style="width: 100%; max-width: 1200px">
    <template v-for="msg in textList" :key="msg">
        <template v-if="getMyUsername(msg.username)">
            <!-- <div> MEMEME: {{msg.text}}</div> -->
            <q-chat-message
                name="me"            
                :text= Array(msg.text)
                :stamp=reformatDate(msg.date)
                sent
                bg-color="teal-7"
                text-color="white"
                />
        </template>
        <template v-else>
            <q-chat-message class="bubbleOther"
                :name= msg.username
                :text= Array(msg.text)
                :stamp=reformatDate(msg.date)
                bg-color="teal-4"
                text-color="white"
                />
        </template>
    </template>
</div>
</div>
</template>

<script>
// import { date } from 'quasar'



export default {
    name: 'ChatMsg',
        props: {
            textList: Object,
            username: String,
            myUsername: String,
        },
    methods: {
        getMyUsername(variable){
                console.log("called getMyUsername")
                // console.log(variable)
                // console.log(this.myUsername)
                if (variable == this.myUsername){
                    return true
                }
                else{
                    return false
                }
            },
        reformatDate(dateString){
            var date = new Date(dateString)
            var month = (date.getMonth() + 1).toLocaleString('en-US', {month: 'short'});
            if ( dateString == null){
                return " "
            }
            return date.getDate() + "/" + month + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
        }
    },

}
</script>
