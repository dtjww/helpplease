<template>
    <div>
        <button @click="getPost">Get Post</button>
    </div>

    <div class="grid" > 
        <div v-for="post in posts" v-bind:key="post.name" class="grid-item">
            <q-card :style="height= post.width">
                <q-card-section>
                    {{ post.Task }}<br>
                    {{ post.Mortal }}<br>
                    <img :src="post.Image" style="width:200px" ><br>
                    {{ post.DateTime }}<br>
                    {{ post.Amount }}<br>
                    
                </q-card-section>
            </q-card>
            </div>
        </div>

        <!-- <div class="grid"> 
            <div class=" q-card grid-item">
                <q-card-section>
                    Clean my Car<br>
                    @merweeeeen<br>
                    <img src='https://firebasestorage.googleapis.com/v0/b/dreemteem-829c5.appspot.com/o/helpplease%2Fcleancar.jpg?alt=media&token=f3737917-3319-4397-bf45-5bb6c39c299aImage' style="width:200px" ><br>
                    20/10/2022 20:00<br>
                    $15<br>
                    
                </q-card-section>
            </div>
            <q-card class="my-card grid-item">
                <q-card-section>
                    Clean my Car<br>
                    @merweeeeen<br>
                    <img src='https://firebasestorage.googleapis.com/v0/b/dreemteem-829c5.appspot.com/o/helpplease%2Fcaifan.jpg?alt=media&token=fdd29019-3802-4a28-8502-a56fddabd5bf' style="width:200px" ><br>
                    20/10/2022 20:00<br>
                    $15<br>
                    
                </q-card-section>
            </q-card>
            <q-card class="my-card grid-item">
                <q-card-section>
                    Clean my Car<br>
                    @merweeeeen<br>
                    <img src='https://firebasestorage.googleapis.com/v0/b/dreemteem-829c5.appspot.com/o/helpplease%2Fdb.jpg?alt=media&token=37a09204-5d5c-4878-9d4e-65fafa8d7bc5' style="width:200px" ><br>
                    20/10/2022 20:00<br>
                    $15<br>
                    
                </q-card-section>
            </q-card>
            <q-card class="my-card grid-item">
                <q-card-section>
                    Clean my Car<br>
                    @merweeeeen<br>
                    <img src='https://firebasestorage.googleapis.com/v0/b/dreemteem-829c5.appspot.com/o/helpplease%2Fcode.jpeg?alt=media&token=00494bdc-09c6-435b-ae8a-f67354d56c65' style="width:200px" ><br>
                    20/10/2022 20:00<br>
                    $15<br>
                    
                </q-card-section>
            </q-card>
            <q-card class="my-card grid-item">
                <q-card-section>
                    Clean my Car<br>
                    @merweeeeen<br>
                    <img src='https://firebasestorage.googleapis.com/v0/b/dreemteem-829c5.appspot.com/o/helpplease%2Fbuyinggroceries.jpg?alt=media&token=3b8744ed-bc04-4bb3-bb34-afc488d1900f' style="width:200px" ><br>
                    20/10/2022 20:00<br>
                    $15<br>
                    
                </q-card-section>
            </q-card>
            <q-card class="my-card grid-item">
                <q-card-section>
                    Clean my Car<br>
                    @merweeeeen<br>
                    <img src='https://firebasestorage.googleapis.com/v0/b/dreemteem-829c5.appspot.com/o/helpplease%2Fcode.jpeg?alt=media&token=00494bdc-09c6-435b-ae8a-f67354d56c65' style="width:200px" ><br>
                    20/10/2022 20:00<br>
                    $15<br>
                    
                </q-card-section>
            </q-card>
            <q-card class="my-card grid-item">
                <q-card-section>
                    Clean my Car<br>
                    @merweeeeen<br>
                    <img src='https://firebasestorage.googleapis.com/v0/b/dreemteem-829c5.appspot.com/o/helpplease%2Fdownload.jfif?alt=media&token=c12fb1e0-bd58-4b3c-8d87-8ea7c49a6859' style="width:200px" ><br>
                    20/10/2022 20:00<br>
                    $15<br>
                    
                </q-card-section>
            </q-card>
            <q-card class="my-card grid-item">
                <q-card-section>
                    Clean my Car<br>
                    @merweeeeen<br>
                    <img src='https://firebasestorage.googleapis.com/v0/b/dreemteem-829c5.appspot.com/o/helpplease%2Fdogwalking.jpeg?alt=media&token=48a63e42-2591-44c0-bd6c-048f22f48837' style="width:200px" ><br>
                    20/10/2022 20:00<br>
                    $15<br>
                    
                </q-card-section>
            </q-card>
        
    </div>  -->
        <!-- <div class="grid">
            <q-card class="my-card grid-item">
                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                    <div><img src='@/assets/Angels.png'></div>
                </q-card-section>

                <q-card-section>
                    wot
                </q-card-section>
            </q-card>
            <q-card class="my-card grid-item">
                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                </q-card-section>

                <q-card-section >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </q-card-section>

                <q-separator inset />

                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </q-card-section>
                </q-card>
                <q-card class="my-card grid-item">
                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                    <div><img src='@/assets/Angels.png'></div>
                </q-card-section>

                <q-card-section>
                    wot
                </q-card-section>
            </q-card>
            <q-card class="my-card grid-item">
                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                </q-card-section>

                <q-card-section >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </q-card-section>

                <q-separator inset />

                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </q-card-section>
                </q-card>
                <q-card class="my-card grid-item">
                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                    <div><img src='@/assets/Angels.png'></div>
                </q-card-section>

                <q-card-section>
                    wot
                </q-card-section>
            </q-card>
            <q-card class="my-card grid-item">
                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                </q-card-section>

                <q-card-section >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </q-card-section>

                <q-separator inset />

                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </q-card-section>
                </q-card> 
                   </div>-->


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
  width: 100%;
  max-width: 300px
}
.grid-item{
    width:300px;
    border:1px solid black;
    img{
        width:200px;
    }

}
// .grid{
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     grid-gap: 10px;
//     grid-auto-rows: minmax(300px, auto);

// }

</style>