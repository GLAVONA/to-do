export let projectArray = [];

export default function Project(name){
    const taskArray = [];
    const note = "";
    return {name, taskArray, note};
}

export const updateLocalStorage = () =>{
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
}

export const updateProjectArray = () =>{
    projectArray = JSON.parse(localStorage.getItem("projectArray") || "[]");
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
    const reg = /[Pp]roject (\d*)/;
    if(projectArray.length>0 && reg.test(projectArray[projectArray.length-1].name)){
        lastProjectNameNumber = projectArray[projectArray.length-1].name.match(/[Pp]roject (\d*)/)[1];
    }
    if(projectArray.length<1){
        lastProjectNameNumber=1;
    }
    if(projectArray.length>1 && !reg.test(projectArray[projectArray.length-1].name)){
        let highestNum = 0;
        for (let i = 0; i < projectArray.length; i++) {
            if(reg.test(projectArray[i].name)){
                if(projectArray[i].name.match(/[Pp]roject (\d*)/)[1] > highestNum){
                    highestNum = projectArray[i].name.match(/[Pp]roject (\d*)/)[1];
                }
            }
        }
        lastProjectNameNumber = parseInt(highestNum)+1;
    }

    const newProject = Project(`Project ${lastProjectNameNumber}`);

    if(projectArray.length>0){
    if(newProject.name === projectArray[projectArray.length-1].name){
        newProject.name = `Project ${parseInt(lastProjectNameNumber)+1}`;
    }}
    projectArray.push(newProject);
    return newProject;
}
