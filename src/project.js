import Note from './notes.js';

export const projectArray = [{name: "Project 1", taskArray: [], note: Note("")}];

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
    const lastProjectNameNumber = projectArray[projectArray.length-1].name.match(/[Pp]roject (\d*)/)[1];
    const newProject = Project(`Project ${lastProjectNameNumber}`);
    console.log(lastProjectNameNumber)

    if(newProject.name === projectArray[projectArray.length-1].name){
        console.log("triggered!");
        newProject.name = `Project ${parseInt(lastProjectNameNumber)+1}`;
    }
    projectArray.push(newProject);
    return newProject;
}
    //<div class="project" onclick="this.contentEditable='true';" onblur="this.contentEditable='false';">Project 1</div>
