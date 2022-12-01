import Note from './notes.js';

export default function Project(name){
    const taskArray = [];
    const note = Note("");
    return {name, taskArray, note};
}

export const addTaskToProject = (task, project)=>{
    return project.taskArray.push(task);
}

export const removeTaskFromProject = (task, project)=>{
    delete project.taskArray[project.taskArray.indexOf(task)];
}

export const moveTaskToAnotherProject = (task, oldProject, newProject)=>{
    addTaskToProject(task,newProject);
    removeTaskFromProject(task,oldProject);
}