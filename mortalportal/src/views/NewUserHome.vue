<!-- Ban -->
<template>
  <NavBarLogIn msg="This is the LogIn page NavBar"/>
  <div class="home">
  <img alt="MainLogo" src="../assets/MainLogo.png" style="max-width: 300px">
    </div>

  <div class="q-pa-md">
    
    <div class="row justify-end">
        <div class="q-gutter-md" style="max-width: 700px" >
        <q-input rounded standout="bg-teal text-white" v-model="text" label="Search for a Task!" />
        <br>
          </div>
    </div>
  
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      infinite
      control-color="primary"
      navigation
      padding
      arrows
      height="300px"
      class="bg-grey-1 shadow-2 rounded-borders"
      >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://st3.depositphotos.com/12548352/16352/i/600/depositphotos_163528228-stock-photo-african-american-child-with-swimming.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="../assets/Mortals.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
          <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
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
    <router-view/>
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
      NavBarLogIn,
      modelMultiple: ref(['Academics']),

      options: [
        'Academics', 'Research', 'Housework', 'Pet Care', 'Errands', 'Other'
      ]
    }
    }
  }
  

</script>
