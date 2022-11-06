<template>

<table align="center">
        <tr>
            <td class="actionbtns">
                <q-btn flat rounded v-model="Selection" @click='activeBtn'>
                    <h7>Active</h7>
                </q-btn>
            </td>
            <td width:10px>
                |
            </td>
            <td class="actionbtns">
                <q-btn flat rounded v-model="Selection" @click="completedBtn">
                    <h7>Completed</h7>
                </q-btn>
            </td>
        </tr>
    </table>

<div v-if="Selection == 'Active'">
    <h1> wassup</h1>
</div>
<div v-else>
    <h1> nth much hbu</h1>
</div>


</template>

<script>
// import axios from 'axios';
export default {
    name: 'MyTask',
    data (){
        return {
            Selection: 'Active',        
        }
    },

    methods: {
        activeBtn() {
            this.Selection = 'Active'
        },
        completedBtn() {
            this.Selection = 'Completed'
        }
    }
    
}


</script>

<style scoped>

.actionbtns {
    border-radius: 10px;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
}
</style>