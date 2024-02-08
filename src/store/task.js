import { defineStore } from "pinia";

export const useTaskStore = defineStore('task',{
  state:() => ({
    tasks:[

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
      this.saveLocalData();
    },
    deleteTask(){
     this.tasks.splice(this.indexTaskSelected,1)
     this.toggleDelete();
     this.saveLocalData();
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
        this.saveLocalData();
     },
     saveLocalData(){
      localStorage.setItem('tasks',
          JSON.stringify(this.tasks))
     },
     getTasks(){
      let itens = localStorage.getItem('tasks')

      if(itens)
        this.tasks = JSON.parse(itens)
     }
  }
})
