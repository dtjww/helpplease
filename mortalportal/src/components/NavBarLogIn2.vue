<!-- Renee -->
<template>
    <div class="q-pa-none">
        <q-toolbar class="text-black q-my-none bg-transparent" style="padding-left:50px;padding-top:10px;padding-bottom:10px">

            <router-link to="/" style="width:170px;padding:0%">
                <img src="@/assets/MainLogoWhite.png" style="width:170px;"/>
            </router-link>

            <q-space />


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


