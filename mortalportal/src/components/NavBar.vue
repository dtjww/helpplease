<!-- Renee -->
<template>
    <div class="q-pa-none">
        <q-toolbar class="text-black q-my-none bg-white" style="padding-left:50px;">
            <router-link to="/home/angel" style="width:170px; padding: 0%">
                <q-img src="@/assets/MainLogoBlack.png"  style="width:170px;"></q-img>
            </router-link>      
    
            <q-space />
            
            <router-link to="/chat" style="color: black; text-decoration: none">
                <div 
                @mouseover="chatColor = true"
                @mouseleave="chatColor = false"
                :class="{ onHover: chatColor }">
                <q-btn stretch flat label="Chats" style="font-size: medium"  />
                </div>
            </router-link>

            <q-separator />

            <router-link to="/profile" style="color: black; text-decoration: none">
                <div 
                @mouseover="profileColor = true"
                @mouseleave="profileColor = false"
                :class="{ onHover: profileColor }">
                    <q-btn stretch flat label="Profile" style="font-size: medium;" />
                </div>
                </router-link>

            <q-separator />
            
            <div 
                @mouseover="logColor = true"
                @mouseleave="logColor = false"
                :class="{ onHover: logColor }">
            <q-btn stretch flat label="Log Out" style="font-size: medium;" @click="exit()"/>
            </div>

             <!--    </div> 
            <q-btn stretch flat label="Chats" @click="gotoChat()"/>

            <q-btn stretch flat label="Profile" @click="handleClick()"/> -->
            
            

            <!-- <q-btn stretch flat label="Notifications" /> -->
            <!-- <q-btn-dropdown stretch flat label="Notifications"> 
                <q-list>
                    <q-item-label header>Recently Received Notifications</q-item-label>
                        <q-item clickable v-close-popup class="bg-secondary">
                            <q-item-section avatar>
                                <q-icon name="notifications" color="warning"/>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label caption style="color:aliceblue">You have just received a message from User 329732</q-item-label>
                                <q-item-label caption style="color:aliceblue">Hi! Roughly how long will you be?</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup class="bg-negative">
                            <q-item-section avatar>
                                <q-icon name="notifications" color="info"/>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label style="color: aliceblue">Your mission was launched successfully!</q-item-label>
                                <q-item-label caption style="color: aliceblue">Your Mission "Shower my dog" has been launched successfully for angels to pick up!</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup class="bg-negative">
                            <q-item-section avatar>
                                <q-icon name="notifications" color="info"/>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label style="color: aliceblue">You received an offer of $100 from Poopoo123</q-item-label>
                                <q-item-label caption style="color: aliceblue">Hi! I would like to complete this task for you!</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup class="bg-secondary">
                            <q-item-section avatar>
                                <q-icon name="notifications" color="warning"/>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label caption style="color:aliceblue">You have just received a message from User 329732</q-item-label>
                                <q-item-label caption style="color:aliceblue">Hi! Roughly how long will you be?</q-item-label>
                            </q-item-section>
                        </q-item>
                    <q-separator inset spaced />
                </q-list>
            </q-btn-dropdown> -->
            
            <!-- <q-btn stretch flat label="Top Angels" /> -->

            <!-- <q-btn-dropdown flat icon ="person_outline" split @click="handleClick" auto-close>
                <q-list>

                    <q-item clickable style="color:black" @click="handleClick()">
                        <q-item-section avatar>
                            <q-icon name="person"/>
                        </q-item-section>
                        <q-item-section>
                            My Account
                        </q-item-section>
                    </q-item>

                    <q-item clickable style="color:black" @click="handleClick()">
                        <q-item-section avatar>
                            <q-icon name="assignment"/>
                        </q-item-section>
                        <q-item-section>
                            My Tasks
                        </q-item-section>
                    </q-item>

                    <q-item clickable style="color:black" @click="gotoChat()">
                        <q-item-section avatar>
                            <q-icon name="chat"/>
                        </q-item-section>
                        <q-item-section>
                            My Chats
                        </q-item-section>
                    </q-item>

                    <q-item clickable style="color:black" @click="exit()">
                        <q-item-section avatar>
                            <q-icon name="exit_to_app"/>
                        </q-item-section>
                        <q-item-section>
                            Logout
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown> -->

            <!-- </div>

            <div class="gt-s"> -->
                <!-- <q-btn flat dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" /> -->
                <!-- <q-btn-dropdown flat dense dropdown-icon="menu" no-icon-animation=True> 
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
                </q-list> -->
            <!-- </q-btn-dropdown>
            </div> -->

        </q-toolbar>
    </div>
    
</template>

<style>

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
    .onHover {
        color: #27A69A;
    }

</style>

<script>

import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()

    export default {
    
        data() {
            return {
                // menuItems: [
                //     {
                //         label: "My Account",
                //         to: "/profile",
                //         icon: "person"
                //     },
                //     {
                //         label: "My Tasks",
                //         to: "/profile",
                //         icon: "assignment"
                //     },
                //     {
                //         label: "Logout",
                //         to: "/",
                //         icon: "exit_to_app"
                //     }
                // ]
                
                profileColor: false,
                chatColor:false,
                logColor: false,
                }
        },

        methods: {
            // handleClick () {
            //     this.$router.push('/profile')
            // },
            // gotoSaved() {
            //     this.$router.push('/home/angel/saved')
            //     // need to include a way to select the saved tasks filter
            // },
            // gotoChat(){
            //     this.$router.push('/chat')
            // },
            exit(){
                storeName.username = ''
                storeName.email = ''
                this.$router.push({name:'Landing'})
            }
        }
    }

</script>