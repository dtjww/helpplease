<!-- Renee -->
<template>
    <div class="q-pa-none">
        <q-toolbar class="text-black q-my-none bg-transparent" style="padding-left:50px;padding-top:10px;padding-bottom:10px">

            <router-link to="/" style="width:170px;padding:0%">
                <img src="@/assets/MainLogoWhite.png" style="width:170px;"/>
            </router-link>

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

            <router-link to="/login" style="color: white; text-decoration: none">
                <q-btn stretch flat label="Log In" style="color: white;font-size: large" />
            </router-link>

            <q-separator dark vertical />

            <router-link to="/signup" style="color: white; text-decoration: none">
                <q-btn stretch flat label="Sign Up" style="color: white;font-size: large;" />
            </router-link>

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


