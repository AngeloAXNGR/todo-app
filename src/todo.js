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

  getProject(projectName) {
    return this.projects.find((project) => project.getProjectTitle() === projectName);
    // console.log(projectName);
  }

  addProject(project){
    this.projects.push(project);
  }
}