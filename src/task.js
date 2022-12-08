import { endOfToday, format } from "date-fns";
import *  as Project from './project.js';
import * as Index from './index.js';

export default function Task(name, description, dueDate, priority, completed) {
    return { name, description, dueDate, priority, completed }
}

export const checkTask = (task) => {
    return task.completed = true;
}

export const uncheckTask = (task) => {
    return task.completed = false;
}

export function createNewTask(){
    const newTask = Task("","",format(endOfToday(),"dd-MM-yyyy"),"",false);
    return newTask;
}
