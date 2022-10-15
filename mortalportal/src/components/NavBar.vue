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

            <q-item clickable v-ripple>
            <q-item-section side>
                <q-avatar rounded size="48px">
                    <img src="../assets/Mortals.png" />
                <!-- <q-badge floating color="teal">new</q-badge> -->
                </q-avatar>
            </q-item-section>
            </q-item>

            <q-btn-dropdown flat round dense icon="img:/htdocs/Github/helpplease/mortalportal/src/assets/MainLogo.png"> 
                <q-list>
                    <q-item-label header>Profile</q-item-label>
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="account_circle" />
                        </q-item-section>
                        <q-item-section>My Account</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                        <q-item-section>My Tasks</q-item-section>
                        <q-item-section side>
                            <q-badge floating color="teal">new</q-badge>
                        </q-item-section>
                    </q-item>
                    <!-- <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0">
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
                    </q-item> -->

                    <q-separator inset spaced />
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


