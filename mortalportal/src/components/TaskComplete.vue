<!-- Renee -->

<template>
    <div class="q-pa-md q-gutter-sm">
        <q-btn label="Launch Mission!" style="background: #e56a6e; color: white" @click="alert = true" />

        <q-dialog v-model="alert">
        <q-card>
            <q-card-section>
                <div class="text-h6">Mission Launched Successfully!</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
            Your mission has been launched successfully for our Angels to pick up. You will receive a notification when your mission has been accepted.
            </q-card-section>

            <q-card-section class="q-pt-none">
                <a href="">Click here</a> to view Mission Status
            </q-card-section>

            <q-card-actions align="right">
            <q-btn flat label="Close" color="primary" v-close-popup />
            </q-card-actions>
        </q-card>
        </q-dialog>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup () {
        return {
        alert: ref(false),

        address: ref('')
        }
    }
}
</script>
