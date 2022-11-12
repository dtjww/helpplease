<!-- Renee -->
<template>
    <div class="q-pa-none">
        <q-toolbar class="text-black q-my-none bg-white" style="padding-left:50px;padding-top:10px;padding-bottom:10px">

            <router-link to="/" style="width:170px;padding:0%">
                <img src="@/assets/MainLogo2.png" style="width:170px;"/>
            </router-link>

            <q-space />

            <router-link to="/login" style="color: black; text-decoration: none">
                <q-btn stretch flat label="Log In" style="color: black;font-size: large" />
            </router-link>

            <q-separator dark vertical />

            <router-link to="/signup" style="color: black; text-decoration: none">
                <q-btn stretch flat label="Sign Up" style="color: black;font-size: large;" />
            </router-link>

        </q-toolbar>
    </div>
</template>



