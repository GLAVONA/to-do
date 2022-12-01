import Note from './notes.js';

export const projectArray = [];

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


export function createNewProject(){
    const nextProjectNumber = document.querySelector(".projects-list").childElementCount+1;
    const newProject = Project(`Project ${projectArray.length+1}`);
    projectArray.push(newProject);
    return newProject;
}
    //<div class="project" onclick="this.contentEditable='true';" onblur="this.contentEditable='false';">Project 1</div>
