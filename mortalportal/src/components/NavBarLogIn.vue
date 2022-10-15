<!-- Renee -->
<template>
    <div class="q-pa-md">
        <q-toolbar class="navbar-bg text-black q-my-md shadow-2">
            <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
            <!-- <q-avatar>
                <img src="../assets/MainLogo.png">
            </q-avatar> -->
            
            <q-item clickable v-ripple>
            <q-item-section side>
                <q-avatar rounded size="48px">
                    <img src="../assets/MainLogo.png" />
                <!-- <q-badge floating color="teal">new</q-badge> -->
                </q-avatar>
            </q-item-section>
            </q-item>

            <q-separator dark vertical inset />
            <q-btn stretch flat label="Home" />
    
            <q-space />
    
            <q-btn stretch flat label="Saved" />
            <q-separator dark vertical />

            <q-btn stretch flat label="Notifications" />
            <q-separator dark vertical />
            
            <q-btn stretch flat label="Top Angels" />
            <q-separator dark vertical />

            <q-btn stretch flat label="Log In" />
            <q-separator dark vertical />
            
            <q-btn stretch flat label="Sign Up" />

        </q-toolbar>
    </div>
</template>

<style>
    .navbar-bg {
        background-color: #eaac8b;
    }
</style>


