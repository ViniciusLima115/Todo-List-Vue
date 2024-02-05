<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-row justify="center">
    <v-dialog
      v-model="props.dialog"
      persistent
      min-width="400"
      max-width="600"
    >
      <v-card>
        <v-card-title class="text-h5">
          Edit Task
        </v-card-title>
        <v-card-text>
          <v-text-field
          v-model="props.task.title"
          label="Title"></v-text-field>
          <v-text-field
          v-model="props.task.description"
          label="Description"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="$emit('toggle')"
          >
            Ok
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup>
  import { defineProps} from 'vue'
  const props = defineProps({
    dialog: Boolean,
    task: Object
  })
</script>
