<!-- Renee -->
<!-- <template>
    <div class="nav-bar">
        <div class="nav-bar__logo">
            <img src="../assets/MainLogo.png" alt="logo" />
        </div>
        <div class="nav-bar__links">
            <a href="#">Saved</a>
            <a href="#">Notifications</a>
            <a href="#">Top Angels</a>
            <a href="#">Log In</a>
            <p>/</p>
            <a href="#">Sign Up</a>
        </div>
    </div>
</template>

<style>
    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5%;
        height: 10vh;
        background-color: #f5f5f5;
        border-bottom: 1px solid #e0e0e0;
    }
</style> -->

<template>
    <div class="q-pa-md">
        <q-toolbar class="navbar-bg text-black q-my-md shadow-2">
            <q-btn flat round dense icon="menu" class="q-mr-sm" />
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
            <q-separator dark vertical />

            <q-btn-dropdown stretch flat label="Profile">
                <q-list>
                    <q-item-label header>Profile</q-item-label>
                    <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0">
                    <q-item-section avatar>
                        <q-avatar icon="folder" color="secondary" text-color="white" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>My Account</q-item-label>
                        <q-item-label caption>Account Settings</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="info" />
                    </q-item-section>
                    </q-item>

                    <q-separator inset spaced />
                    
                    <!-- <q-item-label header>Files</q-item-label>
                    <q-item v-for="n in 3" :key="`y.${n}`" clickable v-close-popup tabindex="0">
                    <q-item-section avatar>
                        <q-avatar icon="assignment" color="primary" text-color="white" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Vacation</q-item-label>
                        <q-item-label caption>February 22, 2016</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-icon name="info" />
                    </q-item-section>
                    </q-item> -->
                </q-list>
            </q-btn-dropdown>

        </q-toolbar>
    </div>
</template>

<style>
    .navbar-bg {
        background-color: #eaac8b;
    }
</style>