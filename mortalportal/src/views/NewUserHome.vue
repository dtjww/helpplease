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
                
                <q-carousel-slide :name="1" img-src="https://i.picsum.photos/id/304/6016/4000.jpg?hmac=ULWayz92dKMWLEZviIJkgLRd6J5FClakkDq_3VmXbw0" />
                <q-carousel-slide :name="2" img-src="https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" />
                <q-carousel-slide :name="3" img-src="https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" />
                <q-carousel-slide :name="4" img-src="https://images.unsplash.com/photo-1521999693742-4717d76f97cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80" />
                <q-carousel-slide :name="5" img-src="https://images.unsplash.com/photo-1580256081112-e49377338b7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                <q-carousel-slide :name="6" img-src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                <q-carousel-slide :name="7" img-src="https://images.unsplash.com/photo-1620140036708-455ed5c0426a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                <q-carousel-slide :name="8" img-src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80" />
                <q-carousel-slide :name="9" img-src="https://images.unsplash.com/photo-1516386408840-d718a820a05c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                <q-carousel-slide :name="10" img-src="https://images.unsplash.com/photo-1613068687893-5e85b4638b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                
                
            </q-carousel>
            <div class="container-2 absolute-top font">
                <div class="text-h1" :class="textColor">Lend a hand today!</div>
                <div class="text-h5" :class="subtextColor">Complete tasks as an Angel and earn</div>
            </div>
      </div>
      <div class="font">
        <div class="row bg-primary center q-mb-xl" style="height: 100vh;">
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
            <div class="text-h3 text-bold text-left q-ml-md q-mb-lg font"> Services provided </div>
          </div>
          <q-carousel
          animated
          v-model="slide"
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          class = "rounded-borders"
          control-text-color="accent"
          control-active-color="accent"
          control-type="flat"
          >
          <q-carousel-slide :name="1" class="column no-wrap font" >
          <!-- <q-carousel-slide :name="1" class="column no-wrap" v-for="post in posts" v-bind:key="post.id"> -->
            <div class="row center items-center q-gutter-xl q-col-gutter no-wrap" style="height:100%;">
              <!-- <div v-for="post in firstFour" v-bind:key="post.id">
              <q-img class="rounded-borders col-3 full-height" :src="post.file">
                <div class="absolute-bottom text-subtitle1 text-center caption">
                {{post.name}}
                </div>
                </q-img>
              </div> -->
              <q-img class="rounded-borders col-2 full-height" src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" >
                <div class="absolute-bottom text-right transparent">
                    <div class="text-h7" :class="subtextColor">Build your site</div>
                    <div class="text-h5" :class="textColor"><strong>Website Design</strong></div>
                </div>
              </q-img>
              <q-img class="rounded-borders col-2 full-height" src="https://images.unsplash.com/photo-1628435600697-6a954dea5055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" >
                <div class="absolute-bottom text-right transparent">
                    <div class="text-h7" :class="subtextColor">Enhance your photos</div>
                    <div class="text-h5" :class="textColor"><strong>Photo Editing</strong></div>
                </div>
              </q-img>
              <q-img class="rounded-borders col-2 full-height" src="https://images.unsplash.com/photo-1558975285-193b2c315c2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" >
                <div class="absolute-bottom text-right transparent">
                    <div class="text-h7" :class="subtextColor">Go Viral</div>
                    <div class="text-h5" :class="textColor"><strong>Content Creation</strong></div>
                </div>
              </q-img>
              <q-img class="rounded-borders col-2 full-height" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" >
                <div class="absolute-bottom text-right transparent">
                    <div class="text-h7" :class="subtextColor">All Languages</div>
                    <div class="text-h5" :class="textColor"><strong>Coding</strong></div>
                </div>
              </q-img>
              <q-img class="rounded-borders col-2 full-height" src="https://images.unsplash.com/photo-1565689876697-e467b6c54da2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" >
                <div class="absolute-bottom text-right transparent">
                    <div class="text-h7" :class="subtextColor">Make some quick bucks</div>
                    <div class="text-h5" :class="textColor"><strong>Wash a Car</strong></div>
                </div>
              </q-img>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row center items-center q-gutter-xl q-col-gutter no-wrap " style="height:100%;">
              <q-img class="rounded-borders col-2 full-height" src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80" >
                <div class="absolute-bottom text-right transparent">
                    <div class="text-h7" :class="subtextColor">On the go</div>
                    <div class="text-h5" :class="textColor"><strong>Food Delivery</strong></div>
                </div>
              </q-img>
              <q-img class="rounded-borders col-2 full-height" src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" >
                <div class="absolute-bottom text-right transparent">
                  <div class="text-h7" :class="subtextColor">Tidy up your workspace</div>
                    <div class="text-h5" :class="textColor"><strong>Cleaning</strong></div>
                </div>
              </q-img>
              <q-img class="rounded-borders col-2 full-height" src="https://images.unsplash.com/photo-1601758125997-67e236238ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" >
                <div class="absolute-bottom text-right transparent">
                    <div class="text-h7" :class="subtextColor">Walk a furry friend</div>
                    <div class="text-h5" :class="textColor"><strong>Dog Walking</strong></div>
                </div>
              </q-img>
              <q-img class="rounded-borders col-2 full-height" src="https://images.unsplash.com/photo-1621356986575-05811227a42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" >
                <div class="absolute-bottom text-right transparent">
                    <div class="text-h7" :class="subtextColor">Deepen your learning</div>
                    <div class="text-h5" :class="textColor"><strong>Private Tuition</strong></div>
                </div>
              </q-img>
              <q-img class="rounded-borders col-2 full-height" src="https://images.unsplash.com/photo-1621992906830-b3f3aabac38b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" >
                <div class="absolute-bottom text-right transparent">
                    <div class="text-h7" :class="subtextColor">Get professional shots</div>
                    <div class="text-h5" :class="textColor"><strong>Photography</strong></div>
                </div>
              </q-img>
            </div>
          </q-carousel-slide>
        </q-carousel>
        </div>  
        

        <div class="row bg-primary center q-mt-xl font" style="height: 550px;">
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
        
        <div class="row bg-primary justify-center q-pb-md font">
          <div class="row text-h6 text-dark q-pr-xs"> Interested? </div>
            <div class="q-pl-xs">
              <q-btn color="dark" label="Become an Angel" @click=gotoSignup />
            </div>
          </div>
        </div>

        <div class="q-gutter-md row justify-end items-start q-pr-md q-pb-sm font">
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

            <div class="row font">
            <div class="text-h4 text-primary">
              Explore active missions
              <q-btn color="primary" label="Post a Mission Now!" push @click=gotoTask />
            </div>
            </div>
        </div>

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
    margin-top: 150px;
    margin-bottom: 150px
  }
  .overlap {
    display: flex;
  }
  .font {
    font-family: radley;
  }
</style>