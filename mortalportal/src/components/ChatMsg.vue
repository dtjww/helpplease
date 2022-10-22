<template>
    <div class="bg-bg-deep-purple-1 back">
        <q-chat-message
        label='Sunday, 19th'
        style="font-size: 60px; font-weight: bold;"
        />

        <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['eh bojio']"
        stamp="12:30"
        sent
        />

        <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        :text="['dont liddat ah', 'i sumpah not doing anything']"
        stamp="12:32"
        />
        <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['eh bojio agn fr']"
        stamp="12:34"
        sent
        />
      
        <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar2.jpg"
            >
            <q-spinner-dots size="2rem" />
        </q-chat-message>
        
    </div>
</template>

<!-- <style>
    .font{
        font-size: 60px;
        font-weight: bold;
    }
</style> -->