<template>
    <div class="q-pa-none karla">
        <q-toolbar class="text-black q-my-none shadow-2 bg-white" id="navbar">

            <q-toolbar-title shrink>
                <router-link to="/home/angel" style="color: white; text-decoration: none">
                    <q-img src="../assets/MainLogoBlack.png" style="width:170px"></q-img>
                </router-link>
            </q-toolbar-title>
            <q-space />
            
            <div class="lt-xs">
            <template v-if="!this.$route.fullPath.includes('/Chat') && !this.$route.fullPath.includes('/chat') "> 
            <q-btn rounded flat label="Chats" @click="gotoChat()" style="font-size: medium" @mouseover="chatColor = true"
                @mouseleave="chatColor = false"
                :class="{ onHover: chatColor }"/>
            </template>

            <template v-if="!this.$route.fullPath.includes('/profile')">
            <q-btn rounded flat label="My Account" @click="handleClick()" style="font-size: medium" @mouseover="profileColor = true"
            @mouseleave="profileColor = false"
            :class="{ onHover: profileColor }"/>
            </template>

            <q-btn rounded flat label="Log Out" @click="exit()" style="font-size: medium" @mouseover="logColor = true"
            @mouseleave="logColor = false"
            :class="{ onHover: logColor }"/>

            <!-- <q-btn stretch flat label="My Account" @click="handleClick()"/>

            <q-btn stretch flat label="Log Out" @click="exit()"/> -->
            </div>

            <div class="gt-s">
                <!-- <q-btn flat dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" /> -->
                <q-btn-dropdown flat dense dropdown-icon="menu" no-icon-animation=True> 
                <q-list>
                    <q-item-label header>Menu</q-item-label>
                    <template v-if="!this.$route.fullPath.includes('/Chat') && !this.$route.fullPath.includes('/chat') ">
                    <q-item clickable v-ripple @click="gotoChat()">
                        <q-item-section avatar>
                            <q-icon name="chat" />
                        </q-item-section>
                        <q-item-section>Chat</q-item-section>
                    </q-item>
                    </template>
                    <template v-if="!this.$route.fullPath.includes('/profile')">
                    <q-item clickable v-ripple @click="handleClick()">
                        <q-item-section avatar>
                            <q-icon name="person" />
                        </q-item-section>
                        <q-item-section>My Account</q-item-section>
                    </q-item>
                    </template>
                    <q-item clickable v-ripple @click="exit()">
                        <q-item-section avatar>
                            <q-icon name="logout" />
                        </q-item-section>
                        <q-item-section>Log Out</q-item-section>
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
    .onHover {
        color: #27A69A;
    }
    .hamburgMenu {
    display: none;
    }
    .karla {
    font-family: karla;
    }
    .mainMenu {
    display: inline-block
    }   
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
                ],
                style: '',
                
                profileColor: false,
                chatColor:false,
                logColor: false,
            }
        },

        methods: {
            handleClick () {
                this.$router.push('/profile')
            },
            gotoChat(){
                this.$router.push('/chat')
            },
            exit(){
                storeName.username = ''
                storeName.email = ''
                this.$router.push({name:'Landing'})
            },
        },
        created (){
            if (storeName.username == '') {
            this.$router.push('/login')
        }
        else {
            this.currUser = storeName.username
        }
        }
    }

</script>