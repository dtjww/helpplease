<!-- Mel -->

<template>

    <div>
        <q-card class="card">
            <h6>Category of Task</h6>
            <q-select outlined v-model="model" :options="task" label="Choose a Task" class="inputboxes" />
            <h6>Name of Task</h6>
            <input v-model="title" placeholder="Name of Tasks" maxlength="30" class="inputboxes">
            <h6>Price</h6>
            <input v-model="title" placeholder="Name of Tasks" maxlength="30    " class="inputboxes">

        </q-card>


    </div>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(null),
      task: [
        'Shopping', 'Physical', 'Assignment/Project', 'Hardware/Software'
      ]
    }
  }
}
</script>

<style>

.card{
    width:700px;
    margin-left:auto;
    margin-right:auto;
    padding:10px;

}
h6{
    margin:auto;
    text-align:left;
}

.inputboxes{
    width:300px;
    margin-top:10px;
    margin-bottom: 10px;
    
}

br{
    display: block;
    margin: 5px 0;
}
</style>