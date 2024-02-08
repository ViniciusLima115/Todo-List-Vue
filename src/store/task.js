import { defineStore } from "pinia";
import { useAlertStore } from "@/store/alert";

const alertStore = useAlertStore();

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [],
    titleTaskCreating: "",
    showDialogDelete: false,
    indexTaskSelected: 0,
    showDialogTaskFields: false,
  }),
  actions: {
    addTask() {
      if (this.titleTaskCreating.length < 3) return;
      this.tasks.push({
        title: this.titleTaskCreating,
        done: false,
      });
      this.titleTaskCreating = "";
      this.saveLocalData();
      alertStore.notifyAlertCreated();
    },
    deleteTask() {
      this.tasks.splice(this.indexTaskSelected, 1);
      this.toggleDelete();
      this.saveLocalData();
      alertStore.notifyAlertDeleted();
    },
    toggleDelete(index) {
      this.showDialogDelete = !this.showDialogDelete;
      if (index != null) this.indexTaskSelected = index;
    },
    updateTask() {
      this.saveLocalData();
      this.toggleEdit();
      alertStore.notifyAlertUpdated();
    },
    toggleEdit(index) {
      this.showDialogTaskFields = !this.showDialogTaskFields;
      if (index != null) this.indexTaskSelected = index;
    },
    saveLocalData() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    getTasks() {
      let itens = localStorage.getItem("tasks");

      if (itens) this.tasks = JSON.parse(itens);
    },
    toggleDoneTask(index) {
      this.tasks[index].done = !this.tasks[index].done;
      this.saveLocalData();
    },
  },
});
