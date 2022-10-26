<!-- Ban -->
<template>
  <NavBar />
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff" container style="height: 600px" class="shadow-2 rounded-borders">

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
        <q-list v-model="tab" style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
          padding>

          <q-item clickable v-ripple :active="tab === 'MyAccount'" @click="tab = 'MyAccount'" >
            <q-item-section avatar>
              <q-icon name="face 6" />
            </q-item-section>

            <q-item-section>
              My Account
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple :active="tab === 'MyTasks'" @click="tab = 'MyTasks'"
            >
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>

            <q-item-section>
              My Tasks
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section @click=gotoHome>
              Logout
            </q-item-section>
          </q-item>

        </q-list>
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Chuck Norris</div>
            <div>@chucknorris</div>
          </div>
        </q-img>

      </q-drawer>

      <q-page-container>
        <q-card-section>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="MyAccount">
              <MyAccount />
            </q-tab-panel>
            <q-tab-panel name="MyTasks">
              <div class="text-h6">billing</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
        <!-- need to add the account and task components in here -->
        
      </q-page-container>
    </q-layout>
  </div>


</template>
  
<script>
import NavBar from '@/components/NavBar.vue';
import MyAccount from '@/components/MyAccount.vue';
import { ref } from 'vue';

export default {
  name: 'ProfileView',
  props: {

  },
  components: {
    NavBar,
    MyAccount
  },
  data(){
    return{
      tab: 'MyAccount'
    }
  },
  setup() {

    return {
      NavBar,
      drawer: ref(false),
    }
  },
  methods: {
    gotoHome() {
      this.$router.push('/home')
    },

    gotoMyTasks() {
      this.$router.push('/home')
    },
  }
}

</script>
  