<!-- Ban -->
<template>
  <div>
    <q-layout view="lHh Lpr lFf" container style="height:100vh" class="shadow-2">
      <q-scroll-area style="height: 100vh; max-width: 100vw;" :thumb-style="thumbStyle" :bar-style="barStyle">
        <q-header v-scroll=onScroll>
          <NavBarLogIn class="animate__animated animate__fadeIn" style="position:absolute;top:100%;width:100vw"
            :class="{ hidden: WhiteNavbar }" />

          <NavBarLogIn2 class="animate__animated animate__fadeIn" style="position:absolute;top:100%;width:100vw"
            :class="{ hidden: !WhiteNavbar }" />

        </q-header>
        <q-page-container>

          <q-page>

            <div style="margin:0%;padding:0px">
              <div>
                <div class="container-3 font bg-transparent text-white"
                  style="position:absolute;width:100%;height:100vh;z-index:3">
                  <h1>Lend a hand today!</h1>
                  <h5>Complete tasks as an Angel and earn</h5>
                </div>
                <div class="container-2" style="position:absolute;width:100%;height:100vh;z-index:2">
                </div>
                <q-carousel class="animate__animated animate__fadeIn" animated v-model="slide" infinite
                  :autoplay="autoplay1" transition-prev="slide-right" transition-next="slide-left"
                  @mouseenter="autoplay1 = false" @mouseleave="autoplay1 = true" height="100vh" width="">

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


              <div v-motion-fade-visible>
                <div class="container-fluid bg-teal-1" style="width:100vw;height:90vh">
                  <div class="row">
                    <q-parallax src="@/assets/testing2.jpg" :speed="1"
                      style="opacity: 0.9; height: 80vh;width:50vw;display:flex;margin:5vh;"
                      class="col-6 rounded-borders">
                    </q-parallax>
                    <div class="col-6 bg-transparent center"
                      style="display:flex;margin-left:auto;margin-right:auto;width:40vw;">

                      <div class="text-bold text-black bg-transparent fonts">
                        <div class="text-h2 text-bold text-black q-pb-md bg-transparent fonts"> Find
                          an angel on Mortal
                          Portal</div>
                        <div class="text-h5 text-black bg-transparent fonts fonts" >
                          As a mortal, leverage on local residents to complete tasks you don't have time or
                          knowledge
                          to carry out.
                          <br>
                          <b>Ask for more, with angels at your door!</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="font" style="margin:0;padding:0;width:100%">
                <div style="padding-top:7vw" v-motion-fade-visible>
                  <div class="text-h3 text-bold text-left font" style="margin-left:7.5vw;"> Services provided
                  </div>
                  <q-carousel animated v-model="slide2" arrows transition-prev="slide-right"
                    transition-next="slide-left"
                    class="rounded-borders animate__animated animate__fadeIn animated__slower"
                    control-text-color="accent" control-active-color="accent" control-type="flat"
                    style=";margin-bottom: 5vw" @mouseenter="autoplay2 = false" @mouseleave="autoplay2 = true" infinite
                    :autoplay="autoplay2">
                    <q-carousel-slide :name="1" class="column font items-center" style="width:98vw;height:100%;">
                      <div class="row justify-center items-center q-gutter-md q-col-gutter"
                        style="height:100%; width:97vw;margin-left:auto;margin-right:auto;">

                        <q-img class="col-2 full-height qimgStyle">
                          <img class=" rounded-borders col-2 imgStyle "
                            src="https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">

                          <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                            <div class="text-h7 bg-transparent" :class="subtextColor">Build your site</div>
                            <div class="text-h5 bg-transparent" :class="textColor"><strong>Website Design</strong></div>
                          </div>
                        </q-img>

                        <q-img class="col-2 full-height qimgStyle">
                          <img class=" rounded-borders col-2 imgStyle"
                            src="https://images.unsplash.com/photo-1628435600697-6a954dea5055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
                          <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                            <div class="text-h7 bg-transparent" :class="subtextColor">Enhance your photos</div>
                            <div class="text-h5 bg-transparent" :class="textColor"><strong>Photo Editing</strong></div>
                          </div>
                        </q-img>

                        <q-img class="col-2 full-height qimgStyle">
                          <img class="rounded-borders col-2 imgStyle"
                            src="https://images.unsplash.com/photo-1558975285-193b2c315c2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
                          <div class="absolute-bottom text-right bg-transparent">
                            <div class="text-h7 bg-transparent" :class="subtextColor">Go Viral</div>
                            <div class="text-h5 bg-transparent" :class="textColor"><strong>Content Creation</strong>
                            </div>
                          </div>
                        </q-img>

                        <q-img class="col-2 full-height qimgStyle">
                          <img class="rounded-borders col-2 imgStyle"
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80">
                          <div class="absolute-bottom text-right bg-transparent">
                            <div class="text-h7 bg-transparent" :class="subtextColor">All Languages</div>
                            <div class="text-h5 bg-transparent" :class="textColor"><strong>Coding</strong></div>
                          </div>
                        </q-img>

                        <q-img class="col-2 full-height qimgStyle">
                          <img class="rounded-borders col-2 imgStyle"
                            src="https://images.unsplash.com/photo-1565689876697-e467b6c54da2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
                          <div class="absolute-bottom text-right bg-transparent">
                            <div class="text-h7 bg-transparent" :class="subtextColor">Make some quick bucks</div>
                            <div class="text-h5 bg-transparent" :class="textColor"><strong>Wash a Car</strong></div>
                          </div>
                        </q-img>
                      </div>
                    </q-carousel-slide>

                    <q-carousel-slide :name="2" class="column font items-center" style="width:98vw;height:98%">
                      <div class="row justify-center items-center q-gutter-md q-col-gutter"
                        style="height:100%; width:97vw;margin-left:auto;margin-right:auto;">

                        <q-img class="col-2 full-height qimgStyle">
                          <img class="rounded-borders col-2 imgStyle"
                            src="https://images.unsplash.com/photo-1618007625018-51cbd56c0520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60">

                          <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                            <div class="text-h7 bg-transparent" :class="subtextColor">On the go</div>
                            <div class="text-h5 bg-transparent" :class="textColor"><strong>Food Delivery</strong></div>
                          </div>
                        </q-img>
                        <q-img class="col-2 full-height qimgStyle">
                          <img class="rounded-borders col-2 imgStyle"
                            src="https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80">

                          <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                            <div class="text-h7 bg-transparent" :class="subtextColor">Tidy up your workspace</div>
                            <div class="text-h5 bg-transparent" :class="textColor"><strong>Cleaning</strong></div>
                          </div>
                        </q-img>
                        <q-img class="col-2 full-height qimgStyle">
                          <img class="rounded-borders col-2 imgStyle"
                            src="https://images.unsplash.com/photo-1580236244963-a380f57499e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">

                          <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                            <div class="text-h7 bg-transparent" :class="subtextColor">Walk a furry friend</div>
                            <div class="text-h5 bg-transparent" :class="textColor"><strong>Dog Walking</strong></div>
                          </div>
                        </q-img>
                        <q-img class="col-2 full-height qimgStyle">
                          <img class="rounded-borders col-2 imgStyle "
                            src="https://images.unsplash.com/photo-1599453052061-5c377643e4fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80">

                          <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                            <div class="text-h7 bg-transparent" :class="subtextColor">Deepen your learning</div>
                            <div class="text-h5 bg-transparent" :class="textColor"><strong>Private Tuition</strong>
                            </div>
                          </div>
                        </q-img>
                        <q-img class="col-2 full-height qimgStyle">
                          <img class="rounded-borders col-2 imgStyle"
                            src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">

                          <div class="absolute-bottom text-right bg-transparent" style="position:absolute;z-index:2">
                            <div class="text-h7 bg-transparent" :class="subtextColor">Get professional shots</div>
                            <div class="text-h5 bg-transparent" :class="textColor"><strong>Photography</strong></div>
                          </div>
                        </q-img>
                      </div>
                    </q-carousel-slide>
                  </q-carousel>
                </div>

                <div v-motion-fade-visible>
                  <q-img
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                    style="height: 100vh;">
                    <div class="row bg-transparent"
                      style="width:100%;height: 100vh;margin-left:auto;margin-right:auto;margin-top:60vh">
                      <div class="col q-pl-xl bg-transparent" style="padding:0px;">
                        <div class="bg-transparent"
                          style="max-width: 80vw; text-align: center; margin-left:auto; margin-right: auto">
                          <div class="text-h5 text-italic text-bold text-white bg-transparent textShadow">
                            <div class="text-h2 text-bold text-white q-pb-md bg-transparent"> Lend your hand in everyday
                              tasks</div>
                            <div class="text-h6 text-italic text-white bg-transparent">
                              As an Angel, you can start earning money by helping out your neighbours with everyday
                              tasks.
                            </div>
                            <strong>Get started today!</strong>
                            <br>
                            <q-btn color="dark" label="Become an Angel" @click=gotoSignup />
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-img>
                </div>
              </div>
            </div>

          </q-page>
        </q-page-container>
      </q-scroll-area>
    </q-layout>
  </div>


</template> 

<script>
import axios from 'axios';
import NavBarLogIn from '@/components/NavBarLogIn.vue';
import NavBarLogIn2 from '@/components/NavBarLogIn2.vue';
import 'animate.css';
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
      modelMultiple: ref(['Academics']),

      options: [
        'Academics', 'Research', 'Housework', 'Pet Care', 'Errands', 'Other'
      ],
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#00000',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        width: '9px',
        opacity: 0.2
      },
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
      textColor: 'text-white',
      subtextColor: 'text-white',
      WhiteNavbar: true,
      transNavbar: false,
      windowHeight: window.innerHeight
    }
  },
  components: {
    NavBarLogIn,
    NavBarLogIn2
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
    onScroll(position) {
      var viewHeight = (this.windowHeight / 3)
      if (position > (this.windowHeight - viewHeight)) {
        this.WhiteNavbar = false;
        this.transNavbar = true;
      }
      else {
        this.WhiteNavbar = true;
        this.transNavbar = false;
      }
    },
    onResize() {
      this.windowHeight = window.innerHeight

    },
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
    window.addEventListener("scroll", function () {
      this.amountscrolled()
    }, false)
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
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

.container-3 {
  height: 100vh;
  width: 100%;
  background-color: transparent;
  text-align: left;
  padding-top: 400px;
  padding-left: 100px;
  /* margin-top: 78.17px; */

}

h1 {
  margin: 0px;
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

.imgStyle {
  width: 100%;
  height: 98%
}

.pad0mar0 {
  padding: 0;
  margin: 0;
}

.qimgStyle {
  width: 15vw
}

.textShadow {
  text-shadow: #000 5px 2px 5px;
}

.fonts{
  font-family: karla;
}

@import url("https://fonts.googleapis.com/css?family=Poppins"); 
@import url("https://fonts.googleapis.com/css?family=Karla");
</style>