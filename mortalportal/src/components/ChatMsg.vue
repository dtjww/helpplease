<template>

    <div class="bg-bg-deep-purple-1 back">
    <template v-for="msg in textList" :key="msg">
        <template v-if="getMyUsername(msg.username)">
            <!-- <div> MEMEME: {{msg.text}}</div> -->
            <q-chat-message
                name="me"
                avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                :text= Array(msg.text)
                stamp="12:34" 
                sent
                />
        </template>
        <template v-else>
            <q-chat-message
                :name= msg.username
                avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                :text= Array(msg.text)
                stamp="12:34" 
                />
        </template>
    </template>
</div>
</template>


<script>


export default {
  name: 'ChatMsg',
    props: {
        textList: Array,
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
    },

}
</script>

