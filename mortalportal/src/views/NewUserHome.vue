<!-- Ban -->
<template>
  <div>
    <q-layout view="lHh Lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header>
        <NavBarLogIn style="position:absolute;top:100%;width:100%" />
      </q-header>
      <q-page-container>
        <q-page>
          <div class="container" style="margin:0%">
            <div class="container-2" style="position:absolute;width:100%;height:100vh;z-index:2">
              <div class="text-h1 bg-transparent" :class="textColor" style="position:absolute;top:70%">Lend a hand
                today!</div>
              <div class="text-h5 bg-transparent" :class="subtextColor" style="position:absolute;top:90%">Complete tasks
                as an Angel and earn</div>
            </div>
            <q-carousel animated v-model="slide" infinite :autoplay="autoplay1" transition-prev="slide-right"
              transition-next="slide-left" @mouseenter="autoplay1 = false" @mouseleave="autoplay1 = true" height="100vh"
              width="">

              <q-carousel-slide :name="1"
                img-src="https://i.picsum.photos/id/304/6016/4000.jpg?hmac=ULWayz92dKMWLEZviIJkgLRd6J5FClakkDq_3VmXbw0" />
              <q-carousel-slide :name="2"
                img-src="https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" />
              <q-carousel-slide :name="3"
                img-src="https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" />
              <q-carousel-slide :name="4"
                img-src="https://images.unsplash.com/photo-1521999693742-4717d76f97cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80" />
              <q-carousel-slide :name="5"
                img-src="https://images.unsplash.com/photo-1580256081112-e49377338b7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
              <q-carousel-slide :name="6"
                img-src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
              <q-carousel-slide :name="7"
                img-src="https://images.unsplash.com/photo-1620140036708-455ed5c0426a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
              <q-carousel-slide :name="8"
                img-src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80" />
              <q-carousel-slide :name="9"
                img-src="https://images.unsplash.com/photo-1516386408840-d718a820a05c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
              <q-carousel-slide :name="10"
                img-src="https://images.unsplash.com/photo-1613068687893-5e85b4638b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />


            </q-carousel>

          </div>
          <div class="font">
            <div class="row bg-primary center q-mb-xl" style="height: 100vh;">
              <div class="col q-pl-xl bg-transparent" style="padding:0px">
                <div class="bg-transparent"
                  style="max-width: 550px; text-align: center; margin-left:auto; margin-right: auto">
                  <div class="text-h2 text-bold text-white q-pb-md bg-transparent"> Find an angel on Mortal Portal
                  </div>
                  <div class="text-h6 text-italic text-white bg-transparent">
                    As a mortal, leverage on local residents to complete tasks you don't have time or knowledge to carry
                    out.
                    <br>
                    Ask for more, with angels at your door!
                  </div>
                  <div class="text-h5 text-bold text-white q-pl-lg q-pr-lg q-pb-sm bg-transparent"> What do you need
                    help with today?
                  </div>
                  <q-input class="q-pl-md q-pb-md bg-transparent" color="black" rounded outlined
                    placeholder="Try searching for a task (e.g. 'help me buy groceries')">
                    <template v-slot:prepend>
                      <q-icon name="search" />
                    </template>
                    <template v-slot:append>
                      <q-btn unelevated rounded color="primary" label="Search" class="bg-transparent" />
                    </template>
                  </q-input>
                </div>
              </div>
            </div>

            <div class='top-bottom'>
              <div>
                <div class="text-h3 text-bold text-left q-ml-md q-mb-lg font"> Services provided </div>
              </div>
              <!--  @mouseenter="autoplay2 = false" @mouseleave="autoplay2 = true" infinite :autoplay="autoplay2" -->
              <q-carousel animated v-model="slide2" arrows transition-prev="slide-right" transition-next="slide-left"
                class="rounded-borders" control-text-color="accent" control-active-color="accent" control-type="flat">
                <q-carousel-slide :name="1" class="column font items-center" style="width:98vw">
                  <!-- <div class="row fit justify-center q-gutter-md q-col-gutter  bg-transparent"
                    style="height:100%; width:98vw;margin-left:auto;margin-right:auto;"> -->
                  <div class="row justify-center items-center q-gutter-md q-col-gutter"
                    style="height:100%; width:98vw;margin-left:auto;margin-right:auto;">

                    <q-img class="col-2 full-height" style="width:15vw;height:100%;display:flex">
                      <img class="rounded-borders col-2 full-height" style="width:15vw"
                        src="https://images.unsplash.com/photo-1628435600697-6a954dea5055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
                      <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                        <div class="text-h7 bg-transparent" :class="subtextColor">Build your site</div>
                        <div class="text-h5 bg-transparent" :class="textColor"><strong>Website Design</strong></div>
                      </div>
                    </q-img>
                    <!-- </q-img> -->
                    <q-img class="col-2 full-height" style="width:15vw;height:100%;display:flex">
                      <img class="rounded-borders col-2 full-height bg-transparent" style="width:15vw"
                        src="https://images.unsplash.com/photo-1628435600697-6a954dea5055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
                      <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                        <div class="text-h7 bg-transparent" :class="subtextColor">Enhance your photos</div>
                        <div class="text-h5 bg-transparent" :class="textColor"><strong>Photo Editing</strong></div>
                      </div>
                    </q-img>

                    <q-img class="col-2 full-height" style="width:15vw;height:100%;display:flex">
                      <img class="rounded-borders col-2 full-height" style="width:15vw"
                        src="https://images.unsplash.com/photo-1558975285-193b2c315c2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
                      <div class="absolute-bottom text-right bg-transparent">
                        <div class="text-h7 bg-transparent" :class="subtextColor">Go Viral</div>
                        <div class="text-h5 bg-transparent" :class="textColor"><strong>Content Creation</strong></div>
                      </div>
                    </q-img>

                    <q-img class="col-2 full-height" style="width:15vw;height:100%;display:flex">
                      <img class="rounded-borders col-2 full-height" style="width:15vw"
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80">
                      <div class="absolute-bottom text-right bg-transparent">
                        <div class="text-h7 bg-transparent"  :class="subtextColor">All Languages</div>
                        <div class="text-h5 bg-transparent" :class="textColor"><strong>Coding</strong></div>
                      </div>
                    </q-img>

                    <q-img class="col-2 full-height" style="width:15vw;height:100%;display:flex">
                      <img class="rounded-borders col-2 full-height" style="width:15vw"
                        src="https://images.unsplash.com/photo-1565689876697-e467b6c54da2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
                      <div class="absolute-bottom text-right bg-transparent">
                        <div class="text-h7 bg-transparent" :class="subtextColor">Make some quick bucks</div>
                        <div class="text-h5 bg-transparent" :class="textColor"><strong>Wash a Car</strong></div>
                      </div>
                    </q-img>
                  </div>
                </q-carousel-slide>

                <q-carousel-slide :name="2" class="column font items-center" style="width:98vw">
                  <div class="row justify-center items-center q-gutter-md q-col-gutter"
                    style="height:100%; width:98vw;margin-left:auto;margin-right:auto;">
                    <q-img class="col-2 full-height" style="width:15vw;height:100%;display:flex">
                      <img class="rounded-borders col-2 full-height"
                        src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80">
                      <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                        <div class="text-h7 bg-transparent" :class="subtextColor">On the go</div>
                        <div class="text-h5 bg-transparent" :class="textColor"><strong>Food Delivery</strong></div>
                      </div>
                    </q-img>
                    <q-img class="col-2 full-height" style="width:15vw;height:100%;display:flex">
                      <img class="rounded-borders col-2 full-height"
                        src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                      <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                        <div class="text-h7 bg-transparent" :class="subtextColor">Tidy up your workspace</div>
                        <div class="text-h5 bg-transparent" :class="textColor"><strong>Cleaning</strong></div>
                      </div>
                    </q-img>
                    <q-img class="col-2 full-height" style="width:15vw;height:100%;display:flex">
                      <img class="rounded-borders col-2 full-height"
                        src="https://images.unsplash.com/photo-1601758125997-67e236238ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                      <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                        <div class="text-h7 bg-transparent" :class="subtextColor">Walk a furry friend</div>
                        <div class="text-h5 bg-transparent"  :class="textColor"><strong>Dog Walking</strong></div>
                      </div>
                    </q-img>
                    <q-img class="col-2 full-height" style="width:15vw;height:100%;display:flex">
                      <img class="rounded-borders col-2 full-height"
                        src="https://images.unsplash.com/photo-1621356986575-05811227a42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                      <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                        <div class="text-h7 bg-transparent" :class="subtextColor">Deepen your learning</div>
                        <div class="text-h5 bg-transparent" :class="textColor"><strong>Private Tuition</strong></div>
                      </div>
                    </q-img>
                    <q-img class="col-2 full-height" style="width:15vw;height:100%;display:flex">
                      <img class="rounded-borders col-2 full-height"
                        src="https://images.unsplash.com/photo-1621992906830-b3f3aabac38b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                      <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                        <div class="text-h7 bg-transparent" :class="subtextColor">Get professional shots</div>
                        <div class="text-h5 bg-transparent" :class="textColor"><strong>Photography</strong></div>
                      </div>
                    </q-img>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>

            <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60">
            <div class="row bg-transparent center q-mt-xl font"
              style="position:absolute;width:100%;height:100vh;z-index:2">
              <div class="col q-pr-xl">
                <div style="max-width: 600px; text-align: center; margin-left:auto; margin-right: auto">
                  <div class="text-h2 bg-transparent text-bold text-black q-pb-md" style="position:absolute;z-index:2"> Lend your hand in everyday tasks
                  </div>
                  <div class="text-h6 bg-transparent text-italic text-black" style="position:absolute;z-index:2">
                    As an Angel, you can start earning money by helping out your neighbours with everyday tasks.
                    <br>
                    <strong style="position:absolute;z-index:2">Get started today!</strong>
                    <q-btn color="dark" label="Become an Angel" @click=gotoSignup />
                  </div>
                </div>
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
import { ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    return {
      tab: ref('mails'),
      slide: ref(1),
      slide2: ref(1),
      autoplay1: ref(true),
      autoplay2: ref(true),
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

.left_center {
  margin-left: 50px;
  margin-top: 400px;
  margin-bottom: auto;
  text-align: left;
}

.container {
  height: 100%;
}

.container-2 {
  height: 100vh;
  width: 100%;
  background-color: #000000;
  opacity: 0.5;
  text-align: left;
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