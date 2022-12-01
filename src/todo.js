import Project from "./project";
import Task from "./task";

export default class Todo{
  constructor(){
    this.projects = []
    // this.projects.push(new Project('Web Development'));
    // this.projects.push(new Project('Game Development'));
    // this.projects.push(new Project('Database Management'));
    // this.projects.push(new Project('Coding Exercises'));
  }


  setProjects(projects){
    this.projects = projects;
  }

  getProjects(){
    return this.projects;
  }

  getProject(projectTitle) {
    console.log(this.projects.find((project) => project.getProjectTitle() === projectTitle));
    return this.projects.find((project) => project.getProjectTitle() === projectTitle);
  }

  addProject(project){
    this.projects.push(project);
  }

  deleteProject(projectTitle){
    const projectToDelete = this.projects.find(
      (project) => project.getProjectTitle() === projectTitle
    )
    this.projects.splice(this.projects.indexOf(projectToDelete), 1)
    
  }
}