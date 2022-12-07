import { endOfToday } from "date-fns";
import *  as Project from './project.js';
import * as Index from './index.js';

export default function Task(title, description, dueDate, priority, completed) {
    return { title, description, dueDate, priority, completed }
}

export const checkTask = (task) => {
    return task.completed = true;
}

export const uncheckTask = (task) => {
    return task.completed = false;
}

export function createNewTask(){
    const newTask = Task("","",endOfToday,"",false);
    const currentProjectIndex = Index.currentIndex;
    Project.projectArray[currentProjectIndex].taskArray.push(newTask);
    return newTask;
}
