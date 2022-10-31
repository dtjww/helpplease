<!-- Ban -->
<template>
  <div>
    <q-layout view="lHh Lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header >
        <NavBarLogIn/>
      </q-header>
      <q-page-container>
        <q-page>
      <div class="container">
            <q-carousel
                animated
                v-model="slide"
                infinite
                :autoplay="autoplay"
                transition-prev="slide-right"
                transition-next="slide-left"
                @mouseenter="autoplay = false"
                @mouseleave="autoplay = true"
                height="100vh"
                width=""
            >
                <q-carousel-slide :name="1" img-src="https://i.picsum.photos/id/319/5445/2768.jpg?hmac=oZV0pFhNqKHhhKnqoPwpG3MS68TynWZVdMhaqHZ68x4" />
                <q-carousel-slide :name="2" img-src="https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8" />
                <q-carousel-slide :name="3" img-src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" />
                <q-carousel-slide :name="4" img-src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" />
                <q-carousel-slide :name="5" img-src="https://i.picsum.photos/id/4/5616/3744.jpg?hmac=8wIoVTScZoSiagRtRYlNfcd7dYHEf9tGyyEF44ihYFI" />
                <q-carousel-slide :name="6" img-src="https://i.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU" />
                <q-carousel-slide :name="7" img-src="https://i.picsum.photos/id/1082/5416/3611.jpg?hmac=GrASx5oGYbTwT4xyJDYkurgXFFfgj37WHvaJNe8Sr1E" />
                <q-carousel-slide :name="8" img-src="https://i.picsum.photos/id/1076/4835/3223.jpg?hmac=sw_W2oBUV1Pp_QwMbkODYHgWlX-SOkVRatS_UErh64Q" />
                <q-carousel-slide :name="9" img-src="https://i.picsum.photos/id/1073/5472/3648.jpg?hmac=xCDetU9pLnLGZopbvHOQOkQRhTiYwyrzWc0YyHPzp5Y" />
                <q-carousel-slide :name="10" img-src="https://i.picsum.photos/id/304/6016/4000.jpg?hmac=ULWayz92dKMWLEZviIJkgLRd6J5FClakkDq_3VmXbw0" />
                <q-carousel-slide :name="11" img-src="https://i.picsum.photos/id/1047/3264/2448.jpg?hmac=ksy0K4uGgm79hAV7-KvsfHY2ZuPA0Oq1Kii9hqkOCfU" />
            </q-carousel>
            <div class="container-2 absolute-top">
                <div class="text-h1" :class="textColor">Lend a hand today!</div>
                <div class="text-h5" :class="subtextColor">Complete tasks as an Angel and earn</div>
            </div>
        </div>
      <div class="">
        <div class="row bg-primary center q-mb-xl" style="height: 700px;">
          <div class="col q-pl-xl">
            <div style="max-width: 550px; text-align: center; margin-left:auto; margin-right: auto">
              <div class="text-h2 text-bold text-white q-pb-md"> Find an angel on Mortal Portal </div>
              <div class="text-h6 text-italic text-white"> 
                As a mortal, leverage on local residents to complete tasks you don't have time or knowledge to carry out. 
                <br>
                Ask for more, with angels at your door!
              </div>
              <div class="text-h5 text-bold text-white q-pl-lg q-pr-lg q-pb-sm"> What do you need help with today?</div>
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
        <div class='top-bottom'> 
          <div>
            <div class="text-h2 text-bold text-left q-ml-md"> Services provided </div>
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
        <q-carousel-slide :name="1" class="column no-wrap" >
        <!-- <q-carousel-slide :name="1" class="column no-wrap" v-for="post in posts" v-bind:key="post.id"> -->
            <div class="row fit justify-start items-center q-gutter-xl q-col-gutter no-wrap">
              <!-- <div v-for="post in firstFour" v-bind:key="post.id">
              <q-img class="rounded-borders col-3 full-height" :src="post.file">
                <div class="absolute-bottom text-subtitle1 text-center caption">
                {{post.name}}
                </div>
                </q-img>
              </div> -->
              <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" >
                <div class="absolute-top text-left">
                    <div class="text-h7" :class="subtextColor">Get help with your site</div>
                    <div class="text-h4" :class="textColor">Logo Design</div>
                </div>
              </q-img>
              <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
              <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
              <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
              <q-img class="rounded-borders col-2 full-height" src="https://placeimg.com/640/480/arch" />
            </div>

          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xl q-col-gutter no-wrap">
              <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/500/300/nature" />
              <q-img class="rounded-borders col-3 full-height" src="https://i.picsum.photos/id/201/5184/3456.jpg?hmac=3SX-1t9hHlAmc653Ox-EmJonZBCaCSK5b9FayvY4sbI" />
              <q-img class="rounded-borders col-3 full-height" src="https://i.picsum.photos/id/1066/2144/1424.jpg?hmac=J3AeMzlHPnXjRZdkB3pj5QrRPY8kPPqGjfRjgGyP4NI" />
              <q-img class="rounded-borders col-3 full-height" src="https://picsum.photos/id/1011/367/267" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xl q-col-gutter no-wrap">
              <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
              <q-img class="rounded-borders col-3 full-height" src="https://picsum.photos/id/1010/367/267" />
              <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/people?t=1666261665705" />
              <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/tech" />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xl q-col-gutter no-wrap">
              <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/tech?t=1666261817930" />
              <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/nature?t=1666261852008" />
              <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/nature?t=1666261861717" />
              <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/arch" />
            </div>
          </q-carousel-slide>
        </q-carousel>
        </div>  
        

        <div class="row bg-primary center q-mt-xl" style="height: 550px;">
          <div class="col">
            <q-img style="height: auto; max-height:400px" src="../assets/Angels.png"></q-img>
          </div>
          <div class="col q-pr-xl">
            <div style="max-width: 600px; text-align: center; margin-left:auto; margin-right: auto">
              <div class="text-h2 text-bold text-white q-pb-md"> Lend your hand in everyday tasks </div>
              <div class="text-h6 text-italic text-white"> 
                As an angel, you can start earning money by helping out your neighbours with everyday tasks.
                <br>
                <strong>Get started today!</strong>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row bg-primary justify-center q-pb-md">
          <div class="row text-h6 text-dark q-pr-xs"> Interested? </div>
            <div class="q-pl-xs">
              <q-btn color="dark" label="Become an Angel" @click=gotoSignup />
            </div>
          </div>
        </div>

        <div class="q-gutter-md row justify-end items-start q-pr-md q-pb-sm">
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
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="accent" />
        </q-page-scroller>
      </q-page>
      </q-page-container>
    </q-layout>
  </div>
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
          // fourthFour: [],
          textColor: 'text-white',
          subtextColor: 'text-white',
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

<style>
  .caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, .5)
  }
  .left_center{
      margin-left:50px;
      margin-top:400px;
      margin-bottom: auto;
      text-align: left;
  }
  .container{
      height: 100%;
  }
  .container-2{
      height: 100vh;
      width: 100%;
      background-color: #000000;
      opacity: 0.5;
      text-align:left;
      padding-top: 400px;
      padding-left: 100px;
      /* margin-top: 78.17px; */
  }
  .content {
      width: 100%;
      height: 700px;
  }
  .center {
    align-items: center;
  }
  .top-bottom {
    margin-top: 100px;
    margin-bottom: 100px
  }
  .overlap {
    display: flex;
  }
</style>