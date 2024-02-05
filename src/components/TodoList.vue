<template>
  <v-text-field
      label="Add task"
      v-model="task.title"
      @keyup.enter="addTask"
    ></v-text-field>

    <ListTasks :tasks="tasks"/>
</template>

<script setup>
  import ListTasks from './ListTasks.vue';

  import { ref } from "vue";
const tasks = ref([
  {
    title: "Estudar Vue",
    description: "Estudar Vue com Vuetify",
  },
  {
    title: "Ler a Documentacao",
    description: "ler",
  },
]);
const task = ref({
  title: "",
  description: "",
});

const addTask = () => {
  tasks.value.push({
    title: task.value.title,
    description: task.value.description,
  });
  task.value = {
    title: "",
    description: "",
  };
};

</script>
