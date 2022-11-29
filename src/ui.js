import Project from './project';
import Task from './task';
import Todo from './todo';
import HeaderIcon from './assets/header-icon.png';
import TrashIcon from './assets/trash.png';
import ProjectIcon from './assets/project-list.png';
import AddIcon from './assets/add.png';
import EditIcon from './assets/edit.png';

export default class UI{
  static loadHomePage(){
    UI.createHeaderDiv();
    UI.createMainContentDiv(UI.createProjectListDiv(), UI.createTaskListDiv());
    UI.loadForms();
    UI.loadButtons();
    UI.loadProjects();

    UI.addTaskButton();
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
    UI.refreshTaskList('');
    UI.saveTodo(todo);
    UI.loadProjects();
  }
  // ***************************

  // Task Data Manipulation Functions
  static loadTasks(projectTitle){
    let project = UI.getTodo();
    project
      .getProject(projectTitle)
      .getTasks()
      .forEach((task) => {
        UI.createTaskItem(task);
      });
    
  }

  static addTask(projectTitle, task){

  }

  static deleteTask(projectTitle, taskTitle){
    let project = UI.getTodo();
    project
      .getProject(projectTitle)
      .deleteTask(taskTitle);
    UI.refreshTaskList(projectTitle);
    UI.saveTodo(project);
    UI.loadTasks(projectTitle);


  }
  // ***************************

  // General UI Layout
  static createHeaderDiv(){
    let element = document.createElement('header');
    element.innerHTML = `
      <img src="${HeaderIcon}">
      <h1>Todo Application</h1>
    `
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
        <h1 class="project-title"></h1>
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

  static refreshTaskList(projectTitle){
    let taskList = document.querySelector('.task-list');
    taskList.innerHTML = `
      <div class="task-header">
        <h1 class="project-title">${projectTitle}</h1>
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
      // UI.refreshTaskList();
      UI.refreshTaskList(e.target.textContent);
      UI.loadTasks(e.target.textContent);

      // Add active state on selected project
      const projectItems = document.querySelectorAll('.project-btn');
      projectItems.forEach((project) => project.classList.remove('active'));
      const projectItem = e.target.parentNode.parentNode;
      projectItem.classList.add('active');
      
    });

    element.appendChild(projectTitle);

    let projectBtnContainer = document.createElement('div')
    projectBtnContainer.classList.add('right-btn-section');

    let deleteBtn = document.createElement('img');
    deleteBtn.src = TrashIcon;

    projectBtnContainer.append(deleteBtn);
    
    deleteBtn.addEventListener('click', (e) =>{
      const projectTitle = e.target.parentNode.parentNode.firstChild.textContent.trim()
      UI.deleteProject(projectTitle);
    })
    element.appendChild(projectBtnContainer);
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
    let deleteBtn = document.createElement('img');
    deleteBtn.src = TrashIcon;
    deleteBtn.setAttribute('style', 'width: 24px; height: 24px;') //temporary
    deleteBtn.addEventListener('click', (e)=>{
      const projectTitle = document.querySelector('.active').firstChild.textContent.trim();
      const taskTitle = e.target.parentNode.parentNode.firstChild.textContent.trim();
      UI.deleteTask(projectTitle, taskTitle);
    })

    rightTaskSection.appendChild(deleteBtn);

    element.append(leftTaskSection, rightTaskSection);
    taskList.appendChild(element);
  }
   // ***************************

  

  // Buttons
  static loadButtons(){
    console.log('loadButtons() is called');
    UI.addProjectButton();
    UI.createProjectFormButtons();
    UI.createTaskFormButtons()
  }

  static addProjectButton(){
    let projectHeader = document.querySelector('.project-header');
    let element = document.createElement('img');
    element.classList.add('add-project-button');
    element.src = AddIcon;
    element.addEventListener('click', () =>{

      let projectForm = document.querySelector('.form-container');
      projectForm.style.display = 'flex';
    });
    projectHeader.appendChild(element);
  }


  static addTaskButton(){
    // Temporary placement for add task button is in the header
    let reference = document.querySelector('header');
    // console.log(reference);

    let element = document.createElement('button');
    element.addEventListener('click', (e)=>{
      
      // Algorithm:
      // [1] Get Specific Project
      const projectTitle = document.querySelector('.active').firstChild.textContent.trim();
      console.log(projectTitle);
      let todo = UI.getTodo();
      // [2] Add task tied to that specific project
      todo.getProject(projectTitle).addTask(new Task('Test Task', '11-28-2022', 'Low'));
      UI.saveTodo(todo);
      UI.refreshTaskList(projectTitle);
      UI.loadTasks(projectTitle);
   
    });

    
    element.classList.add('add-task');
    element.textContent = 'Add Task';
    reference.appendChild(element);
  }

  static createProjectFormButtons(){
    let buttonGroup = document.querySelector('.project-form-buttons')
    let confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm-button');
    confirmBtn.textContent = 'Confirm';
    confirmBtn.addEventListener('click', UI.submitProjectFormInput )
    let cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel'
    cancelBtn.addEventListener('click', UI.closeProjectForm);
    buttonGroup.append(confirmBtn, cancelBtn);
  }

  static createTaskFormButtons(){
    let buttonGroup = document.querySelector('.task-form-buttons')
    let confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm-button');
    confirmBtn.textContent = 'Confirm';
    confirmBtn.addEventListener('click', UI.submitProjectFormInput )
    let cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel'
    cancelBtn.addEventListener('click', UI.closeProjectForm);
    buttonGroup.append(confirmBtn, cancelBtn);
  }
 // ***************************

  // Forms
  static loadForms(){
    UI.createProjectForm();
    UI.createTaskForm();
  }

  static closeProjectForm(){
    let element = document.querySelector('.form-container');
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

    element.classList.add('form-container');
    element.innerHTML = `
      <div class="form-header">
          <h1>Add Project</h1>
      </div>
      <div class="form-inputs">
        <div class="form-row">
          <input type="text" placeholder="Title" id="project-title">
        </div>
      
        <div class="project-form-buttons">

        </div>
      </div>
    `
    document.body.appendChild(element);
  }



  static createTaskForm(){
    let element = document.createElement('div');
    element.classList.add('form-container')
    element.innerHTML = `
      <div class="form-header">
        <h1>Add Task</h1>
      </div>
      <div class="form-inputs">
        <div class="form-row">
          <input type="text" placeholder="Title" id="task-title">
        </div>
        <div class="form-row">
          <input type="date">
          <select name="priority" id="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div class="task-form-buttons">

        </div>
    `

    document.body.appendChild(element);
  }
}
 // ***************************

