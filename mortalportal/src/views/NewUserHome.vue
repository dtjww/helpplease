<!-- Ban -->
<template>
  <NavBarLogIn/>
  <div class="q-pa-md">
    <div class="row bg-primary" style="height: auto;">
      <div class="col">
        <div style="max-width: 650px; text-align: center; margin-left:auto; margin-right: auto">
          <div class="text-h4 text-bold text-white q-mt-xl q-pt-xl q-pb-lg"> Find your angels on Mortal Portal </div>
          <div class="text-h6 text-white q-pl-lg q-pr-lg q-pb-sm"> What do you need help with today?</div>
          <q-input class="q-pl-md"
          color="black"
          bg-color="white"
          rounded
          filled
          placeholder="Search for a task!"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>
      <div class="col gt-sm" style="height: 350px; max-height: 350px;">
        <q-img class="q-pb-none" src="../assets/MainLogo.png"
        style="height: 100% ; max-height: 350px; max-width: 600px;"
        ></q-img>
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
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
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
  </div>
  <div class="text-h4 text-white"> Lend your hand in everyday tasks </div>
  <div class="text-h4 text-white"> Find jobs on the go and get paid for your time! </div>


  <div class="angelSignupButton">
    <nav>
    <router-link to="/SignUp" style="text-decoration:none">
      <div class="text-h6 text-white"> Interested? </div>
      <q-btn color="negative" label="Become an Angel"/>
      </router-link>
    </nav>
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


</template>

<script>
import NavBarLogIn from '@/components/NavBarLogIn.vue';
import {ref} from 'vue';
  
export default {
  name: 'HomeView',
  props: {
    
  },
  components: {
      NavBarLogIn
    },
  methods: {
    gotoHome() {
            setTimeout(() => {
                this.$router.push('/home')
            }, 3000);
        },
  },
  setup(){
    
    return {
      slide: ref(1),
      autoplay: ref(true),
      NavBarLogIn,
      modelMultiple: ref(['Academics']),

      options: [
        'Academics', 'Research', 'Housework', 'Pet Care', 'Errands', 'Other'
      ]
    }
    }
  }
  

</script>
