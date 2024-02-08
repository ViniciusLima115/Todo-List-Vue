<template>
  <v-text-field clearable label="Add task" :rules="rules" v-model="taskStore.titleTaskCreating"
    @keyup.enter="taskStore.addTask"></v-text-field>

  <ListTasks />
</template>

<script setup>
import { onMounted } from 'vue'; //Toda vez q a tela e montada ele e executado
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/store/task';

const taskStore = useTaskStore();

const rules = [
  value => {
    if (!value || value.length >= 3) return true;
    return 'You must enter a task with mor than 3 characters.'
  },
]


onMounted(() => {
  taskStore.getTasks()
})

</script>
