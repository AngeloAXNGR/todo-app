import Task from "./task";
export default class Project{
  constructor(projectTitle){
    this.projectTitle = projectTitle;
    this.tasks = [];
    this.tasks.push(new Task('Wash the Dishes', '11-20-2022', 'Low'));
    this.tasks.push(new Task('Wash the Dishes', '11-20-2022', 'Low'));
    this.tasks.push(new Task('Wash the Dishes', '11-20-2022', 'Low'));
    this.tasks.push(new Task('Wash the Dishes', '11-20-2022', 'Low'));
  }

  getProjectTitle(){
    return this.projectTitle;
  }

  getTasks(){
    return this.tasks;
  }

  setProjectTitle(projectTitle){
    this.projectTitle = projectTitle;
  }

  addTask(task){
    this.tasks.push(task);
  }

}