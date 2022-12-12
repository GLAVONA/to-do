import { endOfToday, format } from "date-fns";
import *  as Project from './project.js';
import * as Index from './index.js';

export default function Task(name, description, dueDate, priority, completed) {
    return { name, description, dueDate, priority, completed }
}

export function markTaskComplete(e) {
    const index = Array.from(e.parentElement.parentElement.parentElement.children).indexOf(e.parentElement.parentElement);
    Index.currentProject.taskArray[index].completed = true;
    Index.currentProject.completedArray.push(Index.currentProject.taskArray[index]);
    Index.currentProject.taskArray.splice(index, 1);
    Project.projectArray[Index.currentIndex] = Index.currentProject;
    Project.updateLocalStorage();
}

export function unmarkTaskComplete(e) {
    const index = Array.from(e.parentElement.parentElement.children).indexOf(e.parentElement);
    Index.currentProject.completedArray[index].completed = false;
    Index.currentProject.taskArray.push(Index.currentProject.completedArray[index]);
    Index.currentProject.completedArray.splice(index, 1);
    Project.projectArray[Index.currentIndex] = Index.currentProject;
    Project.updateLocalStorage();
}

export function createNewTask() {
    const newTask = Task("", "", format(endOfToday(), "dd-MM-yyyy"), "", false);
    return newTask;
}

export function deleteTask(e) {
    if(e.parentElement.parentElement.parentElement.className == "task-list-content"){
    const index = Array.from(e.parentElement.parentElement.parentElement.children).indexOf(e.parentElement.parentElement);
        Index.currentProject.taskArray.splice(index, 1);
        console.log(Index.currentProject.taskArray);
        Project.projectArray[Index.currentIndex] = Index.currentProject;
        Project.updateLocalStorage();
    }
    else{
    const index = Array.from(e.parentElement.parentElement.children).indexOf(e.parentElement);
        Index.currentProject.completedArray.splice(index, 1);
        console.log(Index.currentProject.completedArray);
        Project.projectArray[Index.currentIndex] = Index.currentProject;
        Project.updateLocalStorage();
    }
}
