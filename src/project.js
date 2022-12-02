export const projectArray = [{name: "Project 1", taskArray: [], note: ""}];

export default function Project(name){
    const taskArray = [];
    const note = "";
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
    let lastProjectNameNumber = 1;
    if(projectArray.length>0){
    lastProjectNameNumber = projectArray[projectArray.length-1].name.match(/[Pp]roject (\d*)/)[1];
    }
    const newProject = Project(`Project ${lastProjectNameNumber}`);

    if(projectArray.length>0){
    if(newProject.name === projectArray[projectArray.length-1].name){
        newProject.name = `Project ${parseInt(lastProjectNameNumber)+1}`;
    }}
    projectArray.push(newProject);
    return newProject;
}
    //<div class="project" onclick="this.contentEditable='true';" onblur="this.contentEditable='false';">Project 1</div>
