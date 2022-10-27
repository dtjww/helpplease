<template>
    <NavBar/>

                <q-card class="card">
                    <table align=center width="500px">
                        <q-card-section v-for="offer in offers" :key="offer">
                        <tr width="500px">
                            <td align="left">
                                <h6>{{offer.angel}}</h6>
                            </td>
                            <td colspan="3" align="right">
                                <q-field>{{offer.offer}}</q-field>
                            </td>
                            <td>
                                <q-btn>Accept Offer</q-btn>
                            </td>
                        </tr>
                        </q-card-section>
                    </table>
                </q-card>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'

export default {
    data(){
        return {
            id: this.$route.params.id,
            offers: [],
        }
    },
    components:{
        NavBar
    },

    methods:{
        getPost(){
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData/'+ this.id + '/active.json')
            .then(response => {
                console.log(response.data)
                this.offers = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    created(){
        this.getPost()
    }
}

</script>

<style>

.card {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    padding: 50px;

}</style>