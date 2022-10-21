<!-- Ban -->
<template>
  <NavBarLogIn/>

  <div class="q-pa-md">
    
    <div class="row justify-end" style="border: 1px solid #ddd">
      <div class="col-6 col-sm-3 col-md-2" style="border: 1px solid #ddd">
        <img alt="MainLogo" src="../assets/MainLogo.png" style="max-width: 300px">
      </div>
      <div class="col-6 col-sm-3 col-md-2" style="border: 1px solid #ddd">
        <div class="q-gutter-md" style="max-width: 700px" >
          <q-input rounded standout="bg-teal text-white" v-model="text" label="Search for a Task!" />
          <br>
        </div>
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
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/material.png" />
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-3 full-height" src="https://placeimg.com/640/480/people?t=1666261624394" />
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
  <h4>Lend your hand in everyday tasks.</h4>
  <h4>Find jobs on the go!</h4>

  <div class="angelSignupButton">
    <nav>
    <router-link to="/SignUp">
      <q-btn color="primary" label="Be an Angel" />
      </router-link>
    </nav>
  </div>

  <div class="q-gutter-md row justify-end items-start">
      <div style="min-width: 250px; max-width: 300px">
        
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
