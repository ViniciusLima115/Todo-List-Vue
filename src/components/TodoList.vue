<template>
  <v-text-field
      label="Add task"
      v-model="taskStore.titleTaskCreating"
      @keyup.enter="taskStore.addTask"
    ></v-text-field>

    <ListTasks/>
</template>

<script setup>

  import ListTasks from './ListTasks.vue';
  import { useTaskStore } from '@/store/task';

  const taskStore = useTaskStore();

</script>
