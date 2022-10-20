<!-- Mel -->

<template>
    <div>
        <button @click="getPost">Get Post</button>
    </div>



            <div class="container">
                <figure v-for="post in posts" v-bind:key="post.name">
                    <q-card class="my-card grid-item" :style="height=post.width">
                        <q-card-section>
                            {{ post.Task }}<br>
                            {{ post.Mortal }}<br>
                            <img :src="post.Image" style="max-width:200px" ><br>
                            {{ post.DateTime }}<br>
                            {{ post.Amount }}<br>
                        </q-card-section>
                    </q-card>
                </figure>
            </div>



</template>

<script>
import axios from 'axios';
import Masonry from 'masonry-layout'
import { ref } from 'vue'


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
            
        }
    },
    component(){
        return{
            Masonry
        }
    },
    methods: {
        getPost(){
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/DreemTeem.json')
                .then(response => {
                    console.log(response.data)
                    this.posts = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    // created(){
    //     this.getPost();
    // },

}
</script>

<style lang="scss" scoped>
.my-card{
//width: 100%;
max-width: 100%;
display: block;
}
.grid-item{
max-width: 300px;
display: block;
border:1px solid black;
img{
    max-width:200px;
}

}
//----------------------------------


/////////////////////////////////////////////////////////////

body {
    background-color: #000;
    font: 1.1em Arial, Helvetica, sans-serif;
  }
  
  img {
    max-width: 100%;
    display: block;
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
    column-count: 4;
    column-gap: 10px;
    //display: grid;
    grid-template-columns: repeat(4, 1fr);
    //grid-template-rows: masonry;
  }

  @media (max-width: 950px) {
    .container { 
        grid-template-columns: repeat(3, 1fr);
        column-count: 3;
        column-gap: 10px;
    }
  }
  @media (max-width: 700px) {
    .container { 
        grid-template-columns: repeat(2, 1fr);
        column-count: 2;
        column-gap: 10px;
    }
  }
  @media (max-width: 400px) {
    .container { 
        grid-template-columns: repeat(1, 1fr);
        column-count: 1;
        column-gap: 10px;
    }
  }


</style>
