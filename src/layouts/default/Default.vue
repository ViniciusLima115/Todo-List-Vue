<template>
  <v-app>
    <AlertNotification v-if="alertStore.showAlert" />
    <default-view />
  </v-app>
</template>

<script setup>
import DefaultView from "../View.vue";
import AlertNotification from "@/components/shared/AlertNotification.vue";
import { useAlertStore } from "@/store/alert";

const alertStore = useAlertStore();
</script>
