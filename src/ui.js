// import './styles/style.css';
// import Task from './task';
// import Project from './project';

// let task1 = new Task('Wash Dishes', '11-20-2022', 'High');
// console.log(`Title: ${task1.getTitle()}`);
// console.log(`Due Date: ${task1.getDueDate()}`);
// console.log(`Priority: ${task1.getPriority()}`);

// console.log(`Title: ${task1.title}`);
// console.log(`Due Date: ${task1.dueDate}`);
// console.log(`Priority: ${task1.priority}`);

// task1.setTitle('Water the Plants');
// console.log(`Title: ${task1.title}`);


// let project1 = new Project('Software Development');
// project1.addTask(task1);
// console.log(`Project Title: ${project1.title}`);
// // console.log(`Project Tasks: ${project1.getTasks()}`);
// // console.log(project1);




// // Test to access tasks inside a project *************************************************
// function getProjectTask(projectName){
//   let project = Object.assign(new Project(), projectName)
//   // console.log(project)
//   project.getTasks().forEach((task) => {
//     // let test = Object.assign(new Task(), task);
//     return task;
//   });
//   return project
// }

// console.log(getProjectTask(project1));

// console.log(getProjectTask(project1).getTasks())

// let changeTitle = getProjectTask(project1).getTasks()
// changeTitle[0].setTitle('kdlmfsldkfsdml')
// console.log(changeTitle[0]);


import Project from './project';
import Task from './task';
import Todo from './todo';

export default class UI{
  static loadHomePage(){
    UI.createHeaderDiv();
    UI.createMainContentDiv(UI.createProjectListDiv(), UI.createTaskListDiv());
    UI.loadProjects();
  }

  // static loadProjects(){
  //   let project = Object.assign(new Project());
  //   project.setTitle('Household Chores');
  //   console.log(project);
  //   UI.getTasks(project);
  // }

  // static getTasks(projectName){
  //   let taskList = document.querySelector('.task-list');
  //   console.log(taskList);
  //   projectName.getTasks().forEach((task) => taskList.appendChild(UI.createTaskDiv(task)));
  // }

  static loadProjects(){
    let todo = Object.assign(new Todo());
    todo.getProjects().forEach((project) => console.log(project.title));
  }

  // General UI Layout
  static createHeaderDiv(){
    let element = document.createElement('header');
    let title = document.createElement('h1')
    title.textContent = 'Todo Application';
    element.appendChild(title);
    document.body.appendChild(element);
  }

  static createMainContentDiv(projectList, taskList){
    let element = document.createElement('div');
    element.classList.add('main-content');
    element.append(projectList, taskList);
    document.body.appendChild(element);
  }


  static createTaskListDiv(){
    let element = document.createElement('div');
    element.classList.add('task-list');    
    return element;
  }

  static createProjectListDiv(){
    let element = document.createElement('div');
    element.textContent = 'test';
    element.classList.add('project-list');
    return element;
  }
// ***************************



  static createTaskDiv(task){
    let element = document.createElement('div');
    element.classList.add('task-item');
    element.innerHTML = `
      <h1>${task.title}</h1>
      <h1>${task.dueDate}</h1>
      <h1>${task.priority}</h1>
    `
    return element;
  }
}

