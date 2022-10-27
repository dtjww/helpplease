<!-- Ban -->
<template>
  <NavBarLogIn/>
  <div class="q-pa-md">
    <div class="row bg-primary">
      <div class="col">
        <div style="max-width: 550px; text-align: center; margin-left:auto; margin-right: auto">
          <div class="text-h2 text-bold text-white q-mt-xl q-pt-l q-pb-sm"> Find an angel on Mortal Portal </div>
          <div class="text-h6 text-italic text-white q-pt-xl q-pb-sm"> 
            As a mortal, you can leverage on local residents to complete the tasks you don't have time or knowledge to carry out. 
            <br>
            Ask for more, with angels at your door!
          </div>
          <div class="text-h6 text-bold text-white q-pl-lg q-pr-lg q-pb-sm"> What do you need help with today?</div>
          <q-input class="q-pl-md q-pb-md"
          color="black"
          bg-color="white"
          rounded
          outlined
          placeholder="Try searching for a task (e.g. 'help me buy groceries')"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
            <template v-slot:append>
              <q-btn unelevated rounded color="primary" label="Search" />
            </template>
          </q-input>
        </div>
      </div>
      <div class="col gt-sm q-pt-l q-pr-xl q-mt-xl">
        <q-img src="../assets/MainLogo2.png"></q-img>
      </div>
    </div>    
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"     
    >
    <q-carousel-slide :name="1" class="column no-wrap">
    <!-- <q-carousel-slide :name="1" class="column no-wrap" v-for="post in posts" v-bind:key="post.id"> -->
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <!-- <div v-for="post in firstFour" v-bind:key="post.id">
          <q-img class="rounded-borders col-3 full-height" :src="post.file">
            <div class="absolute-bottom text-subtitle1 text-center caption">
            {{post.name}}
            </div>
            </q-img>
          </div> -->
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
        </div>

      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/500/300/nature" />
          <q-img class="rounded-borders col-3 full-height" src="https://i.picsum.photos/id/201/5184/3456.jpg?hmac=3SX-1t9hHlAmc653Ox-EmJonZBCaCSK5b9FayvY4sbI" />
          <q-img class="rounded-borders col-3 full-height" src="https://i.picsum.photos/id/1066/2144/1424.jpg?hmac=J3AeMzlHPnXjRZdkB3pj5QrRPY8kPPqGjfRjgGyP4NI" />
          <q-img class="rounded-borders col-3 full-height" src="https://picsum.photos/id/1011/367/267" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-3 full-height" src="https://picsum.photos/id/1010/367/267" />
          <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/people?t=1666261665705" />
          <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/tech" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/tech?t=1666261817930" />
          <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/nature?t=1666261852008" />
          <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/nature?t=1666261861717" />
          <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/arch" />
        </div>
      </q-carousel-slide>
    </q-carousel>

     <div class="row bg-primary justify-center q-pa-md">
      <div class="col gt-sm q-pt-l q-pr-xl q-mt-xl">
        <q-img style="height: auto; max-height:250px" src="../assets/Angels.png"></q-img>
      </div>
      <div class="col">
        <div style="max-width: 550px; text-align: center; margin-left:auto; margin-right: auto">

          <div class="text-h4 text-white q-pa-xl"> 
            Lend your hand in everyday tasks
            <br><br>
            <div class="text-h6 text-italic text-white"> 
              As an angel, you can start earning money by helping out your neighbours with everyday tasks.
              <br>
              Get started today!
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="row bg-primary justify-center q-pa-md">
        <div class="row text-h6 text-white"> Interested? </div>
        <div>
          <q-btn color="negative" label="Become an Angel" @click=gotoSignup />
        </div>
      </div>

  </div>

    <div class="q-gutter-md row justify-end items-start q-pr-md q-pb-md">
      <div class="col-3">
        <div class="text-h4 text-primary"> Find an angel for </div>
      </div>
        <div style="min-width: 250px; max-width: 300px" class="bg-primary">
          <q-select
            filled
            v-model="modelMultiple"
            multiple
            :options="options"
            use-chips
            stack-label
            label="Task Category"
          />
        </div>

        <div class="row">
        <div class="text-h4 text-primary">
          Explore active missions
          <q-btn color="primary" label="Post a Mission Now!" push @click=gotoTask />
        </div>
        </div>
    </div>


    <!-- <div class="container box">
        <figure v-for="post in posts " v-bind:key="post.id">
            <q-card class="my-card grid-item" style="background: #f2cbb6">
                <img :src="post.file">
                <q-card-section class="fontAlign">
                    Task: {{ post.name }}<br>
                    <q-btn color='white' text-color="black" @click=iTask(post.id)><b>Details</b></q-btn>
                </q-card-section>
            </q-card>
        </figure>
    </div> -->


</template>

<script>
import axios from 'axios';
import NavBarLogIn from '@/components/NavBarLogIn.vue';
import {ref} from 'vue';
  
export default {
  name: 'HomeView',
  setup(){
    return {
      tab: ref('mails'),
      slide: ref(1),
      autoplay: ref(true),
      NavBarLogIn,
      modelMultiple: ref(['Academics']),

      options: [
        'Academics', 'Research', 'Housework', 'Pet Care', 'Errands', 'Other'
      ]
    }
    },
  data() {
        return {
          isLoading: true,
          useData: false,
          useWifi: false,
          posts: {},
          angel: false,
          mortal: false,
          search: '',
          searchPost: [],
          // firstFour: [],
          // secondFour: [],
          // thirdFour: [],
          // fourthFour: []
        }
    },
  components: {
      NavBarLogIn
    },
  methods: {
    gotoHome() {
      this.$router.push('/home');
        },
    gotoSignup() {
      this.$router.push('/signup');
    },
    getPost() {
        axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData.json')
        .then(response => {
            console.log(response.data)
            this.posts = response.data
        })
        .catch(error => {
            console.log(error)
        })
      },

    iTask(id) {
        console.log(this.posts.id)
        this.$router.push({ name: 'Task Details', params: { id: id } })
    },
    // getPhotos(){
    //   this.firstFour = this.posts[0:4];
      // this.secondFour = this.posts.slice(4,8)
      // this.thirdFour = this.posts.slice(8,12)
      // this.fourthFour = this.posts.slice(12,16)
    // }
  },
  computed: {
    searchForTask() {
        var values = Object.values(this.posts)
        var result = values.filter(post => post.name.toLowerCase().includes(this.search.toLowerCase()))
        return result
    }
    },
    created() {
        this.getPost();
        // this.getPhotos();
    },
    
  }
  

</script>
<style lang="sass" scoped>
.caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .5)
</style>