<!-- Ban QAjaxBar -->
<!-- Ban -->
<template>
    <div class="q-pa-md">
        <q-layout view="lHh Lpr lff" container style="height: 600px" class="shadow-2 rounded-borders">
            

        <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
        >
      
      
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="face 6" />
              </q-item-section>

              <q-item-section>
                My Account
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
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

              <q-item-section>
                <nav>
                <router-link to="/SignUp">
                Logout
                </router-link>
                </nav>
                <router-view/>
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
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
        <!-- need to add the account and task components in here -->
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
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
        
      },
    setup(){
      
      return {
        NavBarLogIn,
        drawer: ref(false)
      }
      }
    }
    
  
  </script>
  