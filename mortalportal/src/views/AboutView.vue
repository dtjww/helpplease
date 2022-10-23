<!--Renee testing NavBar output here-->
<template>
  
  <div class="about bg-image" style="
      background-image: url('https://marketplace.canva.com/EAFHm4JWsu8/1/0/1600w/canva-pink-landscape-desktop-wallpaper-HGxdJA_xIx0.jpg')
      height: 100vh;
    ">
    <NavBar/>
    <BackgroundImage/>
    <h1>This is an about page</h1>
    <NavBarLogIn/>
    <TaskComplete/>
  </div>
  
  <!-- <div
    class="bg-image"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp');
      height: 100vh;
    "
  ></div> -->
</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import NavBarLogIn from '@/components/NavBarLogIn.vue'
  import TaskComplete from '@/components/TaskComplete.vue'
  import BackgroundImage from '@/components/BackgroundImage.vue'


  export default {
    name: 'AboutView',
    components: {
      NavBar,
      NavBarLogIn,
      TaskComplete,
      BackgroundImage
    }
  }
</script>