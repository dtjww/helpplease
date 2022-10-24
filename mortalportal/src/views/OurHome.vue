<!-- Mel -->

<template>
    <NavBar/>
    <!-- <div>
        <button @click="getPost">Get Post</button>
    </div> -->
    <div>
        <q-btn flat rounded v-model="angel"><h5>Angel</h5></q-btn> | <q-btn flat rounded v-model="mortal" ><h5>Mortal</h5></q-btn> <br>
        <q-btn color='dark' @click=goToTask>New Post</q-btn>
        
    </div>


            <div class="container box">
                <figure v-for="post in posts" v-bind:key="post.name">
                    <q-card class="my-card grid-item" >
                        
                            <img :src="post.file">
                        <q-card-section class="fontAlign">
                            Task: {{ post.name }}<br>
                            Date: {{ post.date }}<br>
                            Time: {{ post.time }}<br>
                            Amount: ${{ post.price }}<br>
                            Location: {{ post.loc }}<br>
                            Category: {{ post.category }}<br>
                    
                            
                        </q-card-section>
                    </q-card>
                </figure>
            </div>

</template>

<script>
import axios from 'axios';
import Masonry from 'masonry-layout'
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue';


// var Masonry = require('masonry-layout');
window.onload = () => {
    const grid = document.querySelector('.grid');

    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 10,
        originBottom: false
    });


    masonry.on('layoutComplete', () => {
return console.log('Layout Complete');
})
}


export default{
    setup () {
        return {
        tab: ref('mails')
        }
    },
    
    name: 'PageIndex', 
    data(){
        return{
            isLoading: true,
            useData: false,
            useWifi: false,
            posts:[],
            angel: false,
            mortal: false,
            
        }
    },
    components: {
        NavBar
    }            

    ,
    methods: {
        getPost(){
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData.json')
                .then(response => {
                    console.log(response.data)
                    this.posts = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        goToTask(){
            this.$router.push('/task')         
        }
    },
    created(){
        this.getPost();
    },

}
</script>

<style lang="scss" scoped>
.my-card{
    max-width: 250px;
    width:100%;

    }
.grid-item{
    max-width: 300px;
    display: block;
    border:1px solid black;
}

.box{
    padding:50px 10%;
}

.fontAlign{
    text-align: left;
    padding-left: 30px;
}
// ----------------------------------


/////////////////////////////////////////////////////////////

body {
    background-color: #000;
    font: 1.1em Arial, Helvetica, sans-serif;
    
  }
  
  img {
    max-width: 100%;
    display: block;
    border-radius: 10%;
  }
  
  figure {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
  }
  
  figure > q-card {
    grid-row: 1 / -1;
    grid-column: 1;
  }
  
  //figure a {
    //color: black;
    //text-decoration: none;
  //}
  
  //figcaption {
    //grid-row: 2;
    //grid-column: 1;
    //background-color: rgba(255,255,255,.5);
    //padding: .2em .5em;
    //justify-self: start;
  //}
  
  .container {
    column-count: 5;
    column-gap: 10px;
    //display: grid;
    grid-template-columns: repeat(5, 1fr);
    //grid-template-rows: masonry;
  }

  @media (max-width: 1850px) {
    .container { 
        grid-template-columns: repeat(4, 1fr);
        column-count: 4;
        column-gap: 10px;   
    }

    .q-card {
        max-width: 100%;
    }

    }
    @media (max-width: 1650px) {
    .container { 
        grid-template-columns: repeat(3, 1fr);
        column-count: 3;
        column-gap: 10px;
    }

    .q-card {
        max-width: 100%;
    }

    }

  @media (max-width: 1300px) {
    .container { 
        grid-template-columns: repeat(2, 1fr);
        column-count: 2;
        column-gap: 10px;
    }
    .q-card {
        max-width: 100%;
    }

    }
  
  @media (max-width: 1200px) {
    .container { 
        grid-template-columns: repeat(2, 1fr);
        column-count: 2;
        column-gap: 10px;
    }

    .q-card {
        max-width: 100%;
    }
  }
  @media (max-width: 900px) {
    .container { 
        grid-template-columns: repeat(1, 1fr);
        column-count: 1;
        column-gap: 10px;
    }

    .q-card {
        max-width: 100%;
    }
}


</style>
