<!-- Renee -->
<template>
    <div class="q-pa-none">
        <q-toolbar class="text-white q-my-none shadow-2 bg-dark" >

            <q-toolbar-title shrink>
                <router-link to="/home/angel" style="color: white; text-decoration: none">
                    <q-img src="../assets/MainLogoWhite.png" style="width:170px"></q-img>
                </router-link>
            </q-toolbar-title>
            
        
    
            <q-space />
            
            <div class="lt-xs">
            <q-btn stretch flat label="Saved" @click="gotoSaved()"/>


            <!-- <q-btn stretch flat label="Notifications" /> -->
            <q-btn-dropdown stretch flat label="Notifications"> 
                <q-list>
                    <q-item-label header>Recently Received Notifications</q-item-label>
                        <!-- <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0"> -->
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
            </q-btn-dropdown>
            
            <q-btn stretch flat label="Top Angels" />

            <q-btn-dropdown flat icon ="person_outline" split @click="handleClick" auto-close>
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
            </q-btn-dropdown>

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
                        <q-item-section>Saved</q-item-section>
                    </q-item>
                    
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="emoji_events" />
                        </q-item-section>
                        <q-item-section>Top Angels</q-item-section>
                        <!-- <q-item-section side>
                            <q-badge floating color="teal">new</q-badge>
                        </q-item-section> -->
                    </q-item>
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="person" />
                        </q-item-section>
                        <q-item-section>Profile</q-item-section>
                    </q-item>
                </q-list>
                <q-btn-dropdown stretch flat label="Notifications" clickable v-ripple >
                        
                <!-- <q-btn-dropdown stretch flat label="Notifications">  -->
                        <q-list>
                            <q-item-label header>Recently Received Notifications</q-item-label>
                                <!-- <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0"> -->
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
                </q-btn-dropdown>
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
                this.$router.push('/home/angel')
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