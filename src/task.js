import { endOfToday, format } from "date-fns";
import *  as Project from './project.js';
import * as Index from './index.js';

export default function Task(name, description, dueDate, priority, completed) {
    return { name, description, dueDate, priority, completed }
}

export function markTaskComplete(e){
    const index = Array.from(e.parentElement.parentElement.children).indexOf(e.parentElement);
    Index.currentProject.taskArray[index].completed = true;
    Project.updateLocalStorage();
}

export function unmarkTaskComplete(e){
    const index = Array.from(e.parentElement.parentElement.children).indexOf(e.parentElement);
    console.log(index);
    Index.currentProject.taskArray[index].completed = false;
    Project.updateLocalStorage();
}

export function createNewTask(){
    const newTask = Task("","",format(endOfToday(),"dd-MM-yyyy"),"",false);
    return newTask;
}
