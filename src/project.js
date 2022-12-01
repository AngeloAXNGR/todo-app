import Task from "./task";
export default class Project{
  constructor(projectTitle){
    this.projectTitle = projectTitle;
    this.tasks = [];
    this.tasks.push(new Task('Wash the Dishes', '2005-03-15', 'Low'));
    this.tasks.push(new Task('Program a Game', '2005-03-15', 'Low'));
    this.tasks.push(new Task('Water the Plants', '2005-03-15', 'Low'));
    this.tasks.push(new Task('Sweep the Floor', '2005-03-15', 'Low'));
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
    // console.log('getTask() is called');
    // console.log(this.tasks.find((task) => task.getTitle() === taskTitle))
    return this.tasks.find((task) => task.getTitle() === taskTitle);
  }

  deleteTask(taskTitle){
    const taskToDelete = this.tasks.find(
      (task) => task.getTitle() === taskTitle
    )
    this.tasks.splice(this.tasks.indexOf(taskToDelete), 1)
  }

  updateTask(taskTitle, newTitle, newDueDate, newPriority){
    const taskToUpdate =  this.tasks.find((task) => task.getTitle() === taskTitle);
    taskToUpdate.setTitle(newTitle)
    taskToUpdate.setDueDate(newDueDate);
    taskToUpdate.setPriority(newPriority);
  }
}