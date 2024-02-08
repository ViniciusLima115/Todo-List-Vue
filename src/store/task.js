import { defineStore } from "pinia";

export const useTaskStore = defineStore('task',{
  state:() => ({
    tasks:[
      {
        title: "Estudar Vue",
        description: "Estudar Vue com Vuetify",
      },
      {
        title: "Ler a Documentacao",
        description: "ler",
      },
    ],
    titleTaskCreating: "",
    showDialogDelete: false,
    indexTaskSelected: 0,
    showDialogTaskFields: false

  }),
  actions:{
    addTask(){
      this.tasks.push({
        title: this.titleTaskCreating
      })
      this.titleTaskCreating = ""
    },
    deleteTask(){
     this.tasks.splice(this.indexTaskSelected,1)
     this.toggleDelete();
   },
    toggleDelete(index){
      this.showDialogDelete = !this.showDialogDelete
      if(index != null)
        this.indexTaskSelected = index
    },
    toggleEdit(index){
      this.showDialogTaskFields = !this.showDialogTaskFields
      if(index != null)
        this.indexTaskSelected = index
     },
  }
})
