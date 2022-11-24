import Project from './project';
import Task from './task';
import Todo from './todo';
import TrashIcon from './assets/trash.png';
import ProjectIcon from './assets/project-list.png';
import AddIcon from './assets/add.png';
import EditIcon from './assets/edit.png';

export default class UI{
  static loadHomePage(){
    UI.createHeaderDiv();
    UI.createMainContentDiv(UI.createProjectListDiv(), UI.createTaskListDiv());
    UI.loadButtons();
    UI.loadProjects();
    UI.loadForms();

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

    console.log(todo);
    // return list of projects
    return todo;
  }


  // Project Data Manipulation Functions
  static loadProjects(){
    let projects = UI.getTodo();
    projects
      .getProjects()
      .forEach((project) => {
        UI.createProjectItem(project);
      });

  }  

  static addProject(project){
    // let testProj = new Project('Test');
    let todo =  UI.getTodo();
    UI.refreshProjectList();
    todo.addProject(project);
    UI.saveTodo(todo);
    UI.loadProjects();
  }

  static deleteProject(project){
    let todo = UI.getTodo();
    todo.deleteProject(project);
    UI.refreshProjectList();
    UI.saveTodo(todo);
    UI.loadProjects();
  }
   // ***************************

  // Task Data Manipulation Functions
  static loadTasks(projectName){
    let project = UI.getTodo();
    project
      .getProject(projectName)
      .getTasks()
      .forEach((task) => {
        UI.createTaskItem(task);
      });

  }
  // ***************************

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
    element.innerHTML = `
      <div class="task-header">
        <h1>Tasks</h1>
      </div>

      <div class="task-list-container">

      </div>
    `
    return element;
  }

  static createProjectListDiv(){
    let element = document.createElement('div');
    element.classList.add('project-list');
    element.innerHTML = `
      <div class="project-header">
        <h1>Projects</h1>
      </div>
    
      <div class="project-list-container">

      </div>
      `
    return element;
  }

  // ***************************

  // DOM Related Functions
  static refreshTaskList(){
    let taskList = document.querySelector('.task-list');
    taskList.innerHTML = `
      <div class="task-header">
        <h1>Tasks</h1>
      </div>

      <div class="task-list-container">

      </div>
    `
  }

  static refreshProjectList(){
    let projectList = document.querySelector('.project-list');
    projectList.innerHTML = `
      <div class="project-header">
        <h1>Projects</h1>
      </div>

      <div class="project-list-container">

      </div>
      `
    UI.addProjectButton();
  }

  static createProjectItem(project){
    const projectList = document.querySelector('.project-list-container');
    const element = document.createElement('div');
    element.classList.add('project-btn');
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('left-btn-section');
    projectTitle.innerHTML = `
      <img src="${ProjectIcon}">
      <p>${project.projectTitle}</p>
    `
    projectTitle.addEventListener('click', (e)=>{
      UI.refreshTaskList();
      UI.loadTasks(e.target.textContent);
    });

    element.appendChild(projectTitle);

    let projectBtnGroup = document.createElement('div')
    projectBtnGroup.classList.add('right-btn-section');

    let editBtn = document.createElement('img');
    editBtn.src = EditIcon;

    let deleteBtn = document.createElement('img');
    deleteBtn.src = TrashIcon;

    projectBtnGroup.append(editBtn, deleteBtn);
    
    deleteBtn.addEventListener('click', (e) =>{
      // UI.deleteProject(e.target.parentNode.firstChild.textContent);
      UI.deleteProject(e.target.parentNode.parentNode.firstChild.textContent);
      console.log(e.target.parentNode.parentNode.firstChild.textContent);
    })
    element.appendChild(projectBtnGroup);
    projectList.appendChild(element);
  }

  static createTaskItem(task){
    let taskList = document.querySelector('.task-list-container');
    let element = document.createElement('div');
    element.classList.add('task-item');
    let leftTaskSection = document.createElement('div');
    leftTaskSection.classList.add('left-task-item-section');
    leftTaskSection.innerHTML = `
      <input type="checkbox">
      <h1>${task.title}</h1>
    `
    let rightTaskSection = document.createElement('div');
    rightTaskSection.classList.add('right-task-item-section');
    rightTaskSection.innerHTML = `
      <h1>${task.dueDate}</h1>
      <h1>${task.priority}</h1>
    `
    element.append(leftTaskSection, rightTaskSection);
    taskList.appendChild(element);
  }
   // ***************************

  

  // Buttons
  static loadButtons(){
    console.log('loadButtons() is called');
    UI.addProjectButton();
  }

  static addProjectButton(){
    let projectHeader = document.querySelector('.project-header');
    let element = document.createElement('img');
    element.classList.add('add-button');
    element.src = AddIcon;
    element.addEventListener('click', () =>{

      let projectForm = document.querySelector('.project-form');
      projectForm.style.display = 'flex';
    });
    projectHeader.appendChild(element);
  }
 // ***************************


 // Forms
  static loadForms(){
    UI.createProjectForm();
  }

  static closeProjectForm(){
    let element = document.querySelector('.project-form');
    element.style.display = 'none';
  }

  static submitProjectFormInput(){
    let input = document.querySelector('#project-title');
    let project = new Project(input.value);
    UI.addProject(project);
    UI.closeProjectForm();
    input.value = '';
  }

  static createProjectForm(){
    let element = document.createElement('div');

    element.classList.add('project-form');
    element.innerHTML = `
      <div class="form-header">
        <div>
          <h1>Add Project</h1>
        </div>
      </div>
      <div class="form-inputs">
        <input type="text" placeholder="Title" id="project-title">
      </div>
    `
    let formBtns = document.createElement('div');
    formBtns.classList.add('form-buttons')
    let confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm-button');
    confirmBtn.textContent = 'Confirm';
    confirmBtn.addEventListener('click', UI.submitProjectFormInput )
    let cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel'
    cancelBtn.addEventListener('click', UI.closeProjectForm);
    formBtns.append(confirmBtn,cancelBtn);
    
    element.appendChild(formBtns);

    document.body.appendChild(element);
  }
}
 // ***************************

