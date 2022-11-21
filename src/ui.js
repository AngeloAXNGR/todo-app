import Project from './project';
import Task from './task';
import Todo from './todo';

export default class UI{
  static loadHomePage(){
    UI.addProjectButton();
    UI.createHeaderDiv();
    UI.createMainContentDiv(UI.createProjectListDiv(), UI.createTaskListDiv());
    UI.loadProjects();
  }

  static saveTodo(data){
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  static getTodo(){
    let todo = Object.assign(new Todo(), JSON.parse(localStorage.getItem('todoList')));

    // Turn projects into Project objects instead of generic objects
    todo.setProjects(
      todo
      .getProjects()
      .map((project) => Object.assign(new Project(), project))
    );

    console.log(todo);
    // return list of projects
    return todo;
  }


  static loadProjects(){
    let projects = UI.getTodo();
    projects
      .getProjects()
      .forEach((project) => {
        // console.log(project);
        UI.createProjectItem(project);
      });

  }  

  static loadTasks(projectName){
    let project = UI.getTodo();
    project
      .getProject(projectName)
      .getTasks()
      .forEach((task) => {
        UI.createTaskItem(task);
      });

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
    element.classList.add('project-list');
    return element;
  }
// ***************************

  static refreshTaskList(){
    let taskList = document.querySelector('.task-list');
    taskList.innerHTML = '';
  }

  static createProjectItem(project){
    let projectList = document.querySelector('.project-list');
    let element = document.createElement('button');
    element.textContent = project.projectTitle;
    element.value = project.projectTitle;
    element.addEventListener('click', (e)=>{
      UI.refreshTaskList();
      UI.loadTasks(e.target.value);
      // console.log(e.target.value);
    });
    projectList.appendChild(element);
  }

  static createTaskItem(task){
    let taskList = document.querySelector('.task-list');
    let element = document.createElement('div');
    element.classList.add('task-item');
    element.innerHTML = `
      <h1>${task.title}</h1>
      <h1>${task.dueDate}</h1>
      <h1>${task.priority}</h1>
    `
    taskList.appendChild(element);
  }


  // Buttons
  static addProjectButton(){
    let element = document.createElement('button');
    element.classList.add('add-button');
    element.textContent = "Add Project";
    element.addEventListener('click', () =>{
      let testProj = new Project('Test');
      let todo =  UI.getTodo();
      todo.addProject(testProj);
      UI.saveTodo(todo);
      UI.loadProjects();
    });
    document.body.appendChild(element)
  }
}

