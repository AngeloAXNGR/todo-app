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

    // Associate each project item with Project Class in order to have access to Project instance methods 
    // without doing this, each project item are object literal inside the todoList array which does not have access to Project class methods
    todo.setProjects(
      todo
      .getProjects()
      .map((project) => Object.assign(new Project(), project))
    );

    //Associate each task item with Task Class in order to have access to Task instance methods 
    // without doing this, each project item are object literal inside the project array which does not have access to Task methods
    todo
      .getProjects()
      .forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new Task(), task))));

    // console.log(todo);
    // return list of projects
    return todo;
  }


  static loadProjects(){
    let projects = UI.getTodo();
    projects
      .getProjects()
      .forEach((project) => {
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

  static refreshProjectList(){
    let projectList = document.querySelector('.project-list');
    projectList.innerHTML = '';
  }

  static createProjectItem(project){
    const projectList = document.querySelector('.project-list');
    const element = document.createElement('div');
    element.classList.add('project-btn');
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('left-btn-section');
    projectTitle.textContent = project.projectTitle;
    projectTitle.addEventListener('click', (e)=>{
      UI.refreshTaskList();
      UI.loadTasks(e.target.textContent);
    });

    element.appendChild(projectTitle);

    let deleteBtn = document.createElement('div')
    deleteBtn.classList.add('right-btn-section');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', (e) =>{
      let todo =  UI.getTodo();
      UI.refreshProjectList();
      todo.deleteProject(e.target.parentNode.firstChild.textContent);
      UI.saveTodo(todo);
      UI.loadProjects();
    })
    element.appendChild(deleteBtn);
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
      UI.refreshProjectList();
      todo.addProject(testProj);
      UI.saveTodo(todo);
      UI.loadProjects();
    });
    document.body.appendChild(element)
  }
}

