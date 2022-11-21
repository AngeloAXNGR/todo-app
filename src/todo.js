import Project from "./project";
import Task from "./task";

export default class Todo{
  constructor(){
    this.projects = []
    this.projects.push(new Project('Test Project'));
  }

  getProjects(){
    return this.projects;
  }
}