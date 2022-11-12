<template>
    <div class="q-pa-none">
        <q-toolbar class="text-white q-my-none shadow-2 bg-positive" >

            <q-toolbar-title shrink>
                <router-link to="/home/angel" style="color: white; text-decoration: none">
                    <q-img src="../assets/MainLogoWhite.png" style="width:170px"></q-img>
                </router-link>
            </q-toolbar-title>
            <q-space />
            
            <div class="lt-xs">
            <q-btn stretch flat label="Saved" @click="gotoSaved()"/>

            <q-btn stretch flat label="My Account" @click="handleClick()"/>

            <q-btn stretch flat label="Log Out" @click="exit()"/>
            </div>

            <div class="gt-s">
                <!-- <q-btn flat dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" /> -->
                <q-btn-dropdown flat dense dropdown-icon="menu" no-icon-animation=True> 
                <q-list>
                    <q-item-label header>Menu</q-item-label>
                    <q-item clickable v-ripple >
                        <q-item-section avatar>
                            <q-icon name="favorite" />
                        </q-item-section>
                        <q-item-section @click="gotoSaved()">Saved</q-item-section>
                    </q-item>
                    
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="person" />
                        </q-item-section>
                        <q-item-section @click="handleClick()">My Account</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="logout" />
                        </q-item-section>
                        <q-item-section @click="exit()">Log Out</q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
            </div>

        </q-toolbar>
    </div>
    
</template>

<style>
    /* .navbar-bg {
        background-color: #eaac8b;
    } */
    @media (max-width: 729px) {
        .lt-xs {
            display: none;
        }
    }
    @media (min-width: 730px) {
        .gt-s {
            display: none;
        }
    }
</style>

<script>

import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()

    export default {
    
        data() {
            return {
                menuItems: [
                    {
                        label: "My Account",
                        to: "/profile",
                        icon: "person"
                    },
                    {
                        label: "My Tasks",
                        to: "/profile",
                        icon: "assignment"
                    },
                    {
                        label: "Logout",
                        to: "/",
                        icon: "exit_to_app"
                    }
                ]
            }
        },

        methods: {
            handleClick () {
                this.$router.push('/profile')
            },
            gotoSaved() {
                this.$router.push('/home/angel/saved')
                // need to include a way to select the saved tasks filter
            },
            gotoChat(){
                this.$router.push('/chat')
            },
            exit(){
                storeName.username = ''
                storeName.email = ''
                this.$router.push({name:'Landing'})
            }
        }
    }

</script>