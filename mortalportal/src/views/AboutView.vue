<!--Renee testing NavBar output here-->
<template>
  <NavBar msg="This is my NavBar bro"/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <NavBarLogIn msg="This is the LogIn page NavBar"/>
  <TaskComplete msg="This is my TaskComplete Pop Up"/>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import NavBarLogIn from '@/components/NavBarLogIn.vue'
  import TaskComplete from '@/components/TaskComplete.vue'

  export default {
    name: 'AboutView',
    components: {
      NavBar,
      NavBarLogIn,
      TaskComplete
    }
  }
</script>