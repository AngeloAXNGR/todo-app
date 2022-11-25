import Task from "./task";
export default class Project{
  constructor(projectTitle){
    this.projectTitle = projectTitle;
    this.tasks = [];
    this.tasks.push(new Task('Wash the Dishes', '11-20-2022', 'Low'));
    this.tasks.push(new Task('Program a Game', '11-20-2022', 'Low'));
    this.tasks.push(new Task('Water the Plants', '11-20-2022', 'Low'));
    this.tasks.push(new Task('Sweep the Floor', '11-20-2022', 'Low'));
  }

  getProjectTitle(){
    return this.projectTitle;
  }

  setProjectTitle(projectTitle){
    this.projectTitle = projectTitle;
  }

  addTask(task){
    this.tasks.push(task);
  }


  setTasks(tasks){
    this.tasks = tasks;
  }

  getTasks(){
    return this.tasks;
  }

  getTask(taskTitle){
    console.log(this.tasks.find((task) => task.getTitle() === taskTitle))
    return this.tasks.find((task) => task.getTitle() === taskTitle);
  }

  // deleteTask(projectTitle, taskTitle){
  //   console.log(projectTitle);
  //   console.log(taskTitle);
  // }

  deleteTask(taskTitle){
    const taskToDelete = this.tasks.find(
      (task) => task.getTitle() === taskTitle
    )
    this.tasks.splice(this.tasks.indexOf(taskToDelete), 1)
  }

}