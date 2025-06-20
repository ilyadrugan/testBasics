import { makeAutoObservable } from 'mobx';
import { createTaskApi, deleteTaskApi, getTasksApi, updateTasksApi } from './taskStore.api';
import { CreateTaskModel, TaskModel } from './models/models';

class TaskStore {
  errorMessage: string = '';
  isLoading = false;
  tasks: TaskModel[] = []
  filter: 'all' | 'important' = 'all';

  constructor() {
    makeAutoObservable(this);
  }
  
  setTasks(tasks: TaskModel[]) {
    this.tasks = tasks
  }
  get filteredTasks() {
    if (this.filter === 'important') {
      return this.tasks.filter((task) => task.isImportant);
    }
    return this.tasks;
  }
  setFilter(filter: 'all' | 'important') {
      this.filter = filter;
  }
  updateTask(updatedTask: TaskModel) {
    this.tasks = this.tasks.map((task)=>{
        if (task._id === updatedTask._id) {
          return {...updatedTask};
        }
        return task;
      });
  }
  async getTasks() {
    console.log('getTasks')
    this.isLoading = true;
    this.errorMessage = '';
    await getTasksApi()
      .then((result)=>{
       console.log('result.data',result.data)
       this.tasks = result.data
      })
      .catch((err)=>{
        console.log('err',err)
        this.errorMessage = 'Ошибка получения задач';
      })
      .finally(()=>{this.isLoading = false;});
  }
  async updateTaskApi(model: TaskModel) {
    console.log('updateTaskApi')
    this.isLoading = true;
    this.errorMessage = '';
    await updateTasksApi(model._id, model)
      .then((result)=>{
       console.log('result.data',result.data)
      //  this.tasks = result.data
      })
      .catch((err)=>{
        console.log('err',err)
        this.errorMessage = 'Ошибка обновления задачи';
      })
      .finally(()=>{this.isLoading = false;});
  }
  async createTask(model: CreateTaskModel) {
    console.log('createTask')
    this.isLoading = true;
    this.errorMessage = '';
    await createTaskApi(model)
      .then((result)=>{
       console.log('result.data',result.data)
      //  this.tasks = result.data
      })
      .catch((err)=>{
        console.log('err',err)
        this.errorMessage = 'Ошибка создания задачи';
      })
      .finally(()=>{this.isLoading = false;});
  }
  async deleteTask(id: string) {
    console.log('delete')
    this.isLoading = true;
    this.errorMessage = '';
    await deleteTaskApi(id)
      .then((result)=>{
       console.log('result.data',result.data)
      //  this.tasks = result.data
      })
      .catch((err)=>{
        console.log('err',err)
        this.errorMessage = 'Ошибка удаления задачи';
      })
      .finally(()=>{this.isLoading = false;});
  }

}

const taskStore = new TaskStore();
export default taskStore;
