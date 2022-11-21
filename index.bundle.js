"use strict";
(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
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
//   return project
// }

// console.log(getProjectTask(project1));

// console.log(getProjectTask(project1).getTasks())

// // Access Element by index
// let changeTitle = getProjectTask(project1).getTasks()
// changeTitle[0].setTitle('kdlmfsldkfsdml')
// console.log(changeTitle[0]);




document.addEventListener('DOMContentLoaded', _ui__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage)

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");

class Project{
  constructor(title){
    this.title = title;
    this.tasks = [];
    this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"]('Wash the Dishes', '11-20-2022', 'Low'));
  }

  getTitle(){
    return this.title;
  }

  getTasks(){
    return this.tasks;
  }

  // get Task of project Name
  // getTasks(){
  //   let tasks = Object.assign(new Task())
  //   return tasks.title;
  // }

  setTitle(title){
    this.title = title;
  }

  addTask(task){
    this.tasks.push(task);
  }

}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task{
  constructor(title, dueDate, priority){
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getTitle(){
    return this.title
  }

  getDueDate(){
    return this.dueDate;
  }

  getPriority(){
    return this.priority;
  }

  setTitle(title){
    this.title = title
  }

  setDueDate(dueDate){
    this.dueDate = dueDate;
  }

  setPriority(priority){
    this.priority = priority;
  }
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
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




class UI{
  static loadHomePage(){
    UI.loadProjects();
  }

  static loadProjects(){
    let element = document.createElement('div')
    element.textContent = 'Test';
    document.body.appendChild(element);
    console.log('test');
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpQkFBaUI7QUFDMUMsNEJBQTRCLG1CQUFtQjtBQUMvQyw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0EseUJBQXlCLFlBQVk7QUFDckMsNEJBQTRCLGNBQWM7QUFDMUMsNEJBQTRCLGVBQWU7QUFDM0M7QUFDQTtBQUNBLHlCQUF5QixZQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGVBQWU7QUFDaEQsb0NBQW9DLG9CQUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7QUFDdEI7QUFDQSw4Q0FBOEMsd0RBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzVDbkM7QUFDWDtBQUNmO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2Q0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpQkFBaUI7QUFDMUMsNEJBQTRCLG1CQUFtQjtBQUMvQyw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0EseUJBQXlCLFlBQVk7QUFDckMsNEJBQTRCLGNBQWM7QUFDMUMsNEJBQTRCLGVBQWU7QUFDM0M7QUFDQTtBQUNBLHlCQUF5QixZQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGVBQWU7QUFDaEQsb0NBQW9DLG9CQUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQztBQUNOO0FBQzFCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcclxuLy8gaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcclxuLy8gaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuXHJcbi8vIGxldCB0YXNrMSA9IG5ldyBUYXNrKCdXYXNoIERpc2hlcycsICcxMS0yMC0yMDIyJywgJ0hpZ2gnKTtcclxuLy8gY29uc29sZS5sb2coYFRpdGxlOiAke3Rhc2sxLmdldFRpdGxlKCl9YCk7XHJcbi8vIGNvbnNvbGUubG9nKGBEdWUgRGF0ZTogJHt0YXNrMS5nZXREdWVEYXRlKCl9YCk7XHJcbi8vIGNvbnNvbGUubG9nKGBQcmlvcml0eTogJHt0YXNrMS5nZXRQcmlvcml0eSgpfWApO1xyXG5cclxuLy8gY29uc29sZS5sb2coYFRpdGxlOiAke3Rhc2sxLnRpdGxlfWApO1xyXG4vLyBjb25zb2xlLmxvZyhgRHVlIERhdGU6ICR7dGFzazEuZHVlRGF0ZX1gKTtcclxuLy8gY29uc29sZS5sb2coYFByaW9yaXR5OiAke3Rhc2sxLnByaW9yaXR5fWApO1xyXG5cclxuLy8gdGFzazEuc2V0VGl0bGUoJ1dhdGVyIHRoZSBQbGFudHMnKTtcclxuLy8gY29uc29sZS5sb2coYFRpdGxlOiAke3Rhc2sxLnRpdGxlfWApO1xyXG5cclxuXHJcbi8vIGxldCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdTb2Z0d2FyZSBEZXZlbG9wbWVudCcpO1xyXG4vLyBwcm9qZWN0MS5hZGRUYXNrKHRhc2sxKTtcclxuLy8gY29uc29sZS5sb2coYFByb2plY3QgVGl0bGU6ICR7cHJvamVjdDEudGl0bGV9YCk7XHJcbi8vIC8vIGNvbnNvbGUubG9nKGBQcm9qZWN0IFRhc2tzOiAke3Byb2plY3QxLmdldFRhc2tzKCl9YCk7XHJcbi8vIC8vIGNvbnNvbGUubG9nKHByb2plY3QxKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIC8vIFRlc3QgdG8gYWNjZXNzIHRhc2tzIGluc2lkZSBhIHByb2plY3QgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyBmdW5jdGlvbiBnZXRQcm9qZWN0VGFzayhwcm9qZWN0TmFtZSl7XHJcbi8vICAgbGV0IHByb2plY3QgPSBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3ROYW1lKVxyXG4vLyAgIHJldHVybiBwcm9qZWN0XHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKGdldFByb2plY3RUYXNrKHByb2plY3QxKSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhnZXRQcm9qZWN0VGFzayhwcm9qZWN0MSkuZ2V0VGFza3MoKSlcclxuXHJcbi8vIC8vIEFjY2VzcyBFbGVtZW50IGJ5IGluZGV4XHJcbi8vIGxldCBjaGFuZ2VUaXRsZSA9IGdldFByb2plY3RUYXNrKHByb2plY3QxKS5nZXRUYXNrcygpXHJcbi8vIGNoYW5nZVRpdGxlWzBdLnNldFRpdGxlKCdrZGxtZnNsZGtmc2RtbCcpXHJcbi8vIGNvbnNvbGUubG9nKGNoYW5nZVRpdGxlWzBdKTtcclxuXHJcblxyXG5pbXBvcnQgVUkgZnJvbSBcIi4vdWlcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5sb2FkSG9tZXBhZ2UpIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0e1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgIHRoaXMudGFza3MucHVzaChuZXcgVGFzaygnV2FzaCB0aGUgRGlzaGVzJywgJzExLTIwLTIwMjInLCAnTG93JykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKXtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFza3MoKXtcclxuICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IFRhc2sgb2YgcHJvamVjdCBOYW1lXHJcbiAgLy8gZ2V0VGFza3MoKXtcclxuICAvLyAgIGxldCB0YXNrcyA9IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSlcclxuICAvLyAgIHJldHVybiB0YXNrcy50aXRsZTtcclxuICAvLyB9XHJcblxyXG4gIHNldFRpdGxlKHRpdGxlKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFzayl7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGVcclxuICB9XHJcblxyXG4gIGdldER1ZURhdGUoKXtcclxuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRQcmlvcml0eSgpe1xyXG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZSh0aXRsZSl7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICB9XHJcblxyXG4gIHNldER1ZURhdGUoZHVlRGF0ZSl7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJpb3JpdHkocHJpb3JpdHkpe1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxufSIsIi8vIGltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcclxuLy8gaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcclxuLy8gaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuXHJcbi8vIGxldCB0YXNrMSA9IG5ldyBUYXNrKCdXYXNoIERpc2hlcycsICcxMS0yMC0yMDIyJywgJ0hpZ2gnKTtcclxuLy8gY29uc29sZS5sb2coYFRpdGxlOiAke3Rhc2sxLmdldFRpdGxlKCl9YCk7XHJcbi8vIGNvbnNvbGUubG9nKGBEdWUgRGF0ZTogJHt0YXNrMS5nZXREdWVEYXRlKCl9YCk7XHJcbi8vIGNvbnNvbGUubG9nKGBQcmlvcml0eTogJHt0YXNrMS5nZXRQcmlvcml0eSgpfWApO1xyXG5cclxuLy8gY29uc29sZS5sb2coYFRpdGxlOiAke3Rhc2sxLnRpdGxlfWApO1xyXG4vLyBjb25zb2xlLmxvZyhgRHVlIERhdGU6ICR7dGFzazEuZHVlRGF0ZX1gKTtcclxuLy8gY29uc29sZS5sb2coYFByaW9yaXR5OiAke3Rhc2sxLnByaW9yaXR5fWApO1xyXG5cclxuLy8gdGFzazEuc2V0VGl0bGUoJ1dhdGVyIHRoZSBQbGFudHMnKTtcclxuLy8gY29uc29sZS5sb2coYFRpdGxlOiAke3Rhc2sxLnRpdGxlfWApO1xyXG5cclxuXHJcbi8vIGxldCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdTb2Z0d2FyZSBEZXZlbG9wbWVudCcpO1xyXG4vLyBwcm9qZWN0MS5hZGRUYXNrKHRhc2sxKTtcclxuLy8gY29uc29sZS5sb2coYFByb2plY3QgVGl0bGU6ICR7cHJvamVjdDEudGl0bGV9YCk7XHJcbi8vIC8vIGNvbnNvbGUubG9nKGBQcm9qZWN0IFRhc2tzOiAke3Byb2plY3QxLmdldFRhc2tzKCl9YCk7XHJcbi8vIC8vIGNvbnNvbGUubG9nKHByb2plY3QxKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIC8vIFRlc3QgdG8gYWNjZXNzIHRhc2tzIGluc2lkZSBhIHByb2plY3QgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyBmdW5jdGlvbiBnZXRQcm9qZWN0VGFzayhwcm9qZWN0TmFtZSl7XHJcbi8vICAgbGV0IHByb2plY3QgPSBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3ROYW1lKVxyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpXHJcbi8vICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcclxuLy8gICAgIC8vIGxldCB0ZXN0ID0gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKTtcclxuLy8gICAgIHJldHVybiB0YXNrO1xyXG4vLyAgIH0pO1xyXG4vLyAgIHJldHVybiBwcm9qZWN0XHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKGdldFByb2plY3RUYXNrKHByb2plY3QxKSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhnZXRQcm9qZWN0VGFzayhwcm9qZWN0MSkuZ2V0VGFza3MoKSlcclxuXHJcbi8vIGxldCBjaGFuZ2VUaXRsZSA9IGdldFByb2plY3RUYXNrKHByb2plY3QxKS5nZXRUYXNrcygpXHJcbi8vIGNoYW5nZVRpdGxlWzBdLnNldFRpdGxlKCdrZGxtZnNsZGtmc2RtbCcpXHJcbi8vIGNvbnNvbGUubG9nKGNoYW5nZVRpdGxlWzBdKTtcclxuXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSXtcclxuICBzdGF0aWMgbG9hZEhvbWVQYWdlKCl7XHJcbiAgICBVSS5sb2FkUHJvamVjdHMoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBsb2FkUHJvamVjdHMoKXtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnVGVzdCc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=