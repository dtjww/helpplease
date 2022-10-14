<!--Renee testing NavBar output here-->
<template>
  <NavBar msg="This is my NavBar bro"/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <NavBarLogIn msg="This is the LogIn page NavBar"/>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import NavBarLogIn from '@/components/NavBarLogIn.vue'

  export default {
    name: 'AboutView',
    components: {
      NavBar,
      NavBarLogIn
    }
  }
</script>