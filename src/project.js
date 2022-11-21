import Task from "./task";
export default class Project{
  constructor(title){
    this.title = title;
    this.tasks = [];
    this.tasks.push(new Task('Wash the Dishes', '11-20-2022', 'Low'));
    this.tasks.push(new Task('Wash the Dishes', '11-20-2022', 'Low'));
    this.tasks.push(new Task('Wash the Dishes', '11-20-2022', 'Low'));
    this.tasks.push(new Task('Wash the Dishes', '11-20-2022', 'Low'));
  }

  getTitle(){
    return this.title;
  }

  getTasks(){
    return this.tasks;
  }

  setTitle(title){
    this.title = title;
  }

  addTask(task){
    this.tasks.push(task);
  }

}