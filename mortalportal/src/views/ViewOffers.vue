<template>
    <NavBar />
    <div>
        <div class="q-pa-md">
            <q-table
            title="Offers"
            :rows="rows"
            :columns="columns"
            row-key="Angel"
            selection="single"
            v-model:selected="selected"
            />

            Selected: {{ JSON.stringify(selected) }}
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'

const columns = [
    { name: 'Angel', align: 'center', label: 'Angel',field: row => row.Angel,
    format: val => `${val}`, required:true,
    sortable: true },
    { name: 'Offer', align: 'center', label: 'Offer($)' ,field: row => row.Offer,
    format: val => `${val}`, required:true, sortable: true},
]
export default {
    setup() {
        return {
            columns,
            selected:ref([])

        }
    },
    data() {
        return {
            id: this.$route.params.id,
            offers: [],
            rows:[],
            
        }
    },
    components: {
        NavBar
    },

    methods: {
        getPost() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData/' + this.id + '/active.json')
                .then(response => {
                    console.log(response)
                    console.log(response.data)
                    this.offers = response.data
                    for (var offer in this.offers) {
                        var row = this.offers[offer]
                        this.rows.push({Angel: row.angel, Offer:row.offer})
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getRows() {
            for (var offer in this.offers) {
                console.log(offer.value)
            }
        }
    },
    created() {
        this.getPost()
        this.getRows()

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

}
</style>