import Project from "./project";
import Task from "./task";

export default class Todo{
  constructor(){
    this.projects = []
    this.projects.push(new Project('1'));
    this.projects.push(new Project('2'));
    this.projects.push(new Project('3'));
    this.projects.push(new Project('4'));
  }


  setProjects(projects){
    this.projects = projects;
  }

  getProjects(){
    return this.projects;
  }

  getProject(projectTitle) {
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