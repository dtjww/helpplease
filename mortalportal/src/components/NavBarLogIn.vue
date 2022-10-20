<!-- Renee -->
<template>
    <div class="q-pa-md">
        <q-toolbar class="text-black q-my-md shadow-2" style="background: #eaac8b;">
            <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
            <!-- <q-avatar>
                <img src="../assets/MainLogo.png">
            </q-avatar> -->
            
            <q-item clickable v-ripple>
                <q-item-section side class="logo">
                    <q-avatar size="100px">
                        <img src="../assets/MainLogo.png" />
                    <!-- <q-badge floating color="teal">new</q-badge> -->
                    </q-avatar>
                </q-item-section>
            </q-item>

            <q-separator dark vertical inset />
            <q-btn stretch flat label="Home" />
    
            <q-space />
    
            <!-- <q-btn stretch flat label="Saved" />
            <q-separator dark vertical />

            <q-btn-dropdown stretch flat label="Notifications"> 
                <q-list>
                    <q-item-label header>Recently Received Notifications</q-item-label>
                    <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0">
                    <q-item-section avatar>
                            <q-icon name="notifications" color="secondary"/>
                        </q-item-section>
                    <q-item-section side>
                        <q-item-section>
                            <q-item-label>Notification</q-item-label>
                            <q-item-label caption>Message from User1231</q-item-label>
                        </q-item-section>
                    </q-item-section>
                    </q-item>

                    <q-separator inset spaced />
                </q-list>
            </q-btn-dropdown>
            <q-separator dark vertical />
            
            <q-btn stretch flat label="Top Angels" />
            <q-separator dark vertical /> -->

            <q-btn stretch flat label="Log In" />
            <q-separator dark vertical />
            
            <q-btn stretch flat label="Sign Up" />

        </q-toolbar>
    </div>
</template>

<style>
    /* .navbar-bg {
        background-color: #eaac8b;
    } */
    .logo {
        width: 120px;
        height: 60px;
    }
</style>


