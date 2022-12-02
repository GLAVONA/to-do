import datefns, { endOfMonth, endOfToday } from 'date-fns';
import './style.css';
import Project, { addTaskToProject, createNewProject, projectArray, removeTaskFromProject } from './project.js';
import Task, { checkTask } from './task.js';

const projectCollapsible = document.querySelector(".projects-collapse");
projectCollapsible.addEventListener("click",toggleProjects);

let currentProject = projectArray[0];

const notesAreaDiv = document.getElementById("notes-textarea");
notesAreaDiv.addEventListener("input",()=>{
    currentProject.note = notesAreaDiv.value;
})


const projectList = document.querySelector(".projects-list");
const addProjectButton = document.querySelector(".add-project");

function toggleProjects(){
    projectList.style.display = projectList.style.display == "flex"? "none" : "flex";
    projectList.style.display == "flex"? projectCollapsible.innerHTML = "Projects<br>⌄" : projectCollapsible.innerHTML = "Projects<br>-";
    addProjectButton.style.display = addProjectButton.style.display == "flex"? "none" : "flex";
}

renderProjectsList();

function renderProjectsList(){

    function constructProjectDiv(project){
        const projectWrapper = document.createElement("div");
        projectWrapper.classList.add("project-wrapper");


        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.setAttribute("onclick","this.contentEditable='true'");
        projectDiv.setAttribute("onblur", "this.contentEditable='false'");
        projectDiv.addEventListener("blur",()=>{
            projectArray[event.target.parentElement.id].name = projectDiv.textContent;
        })
        projectDiv.textContent = project.name;

        
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("type","button");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click",()=>{
            const index = Array.from(projectWrapper.parentElement.children).indexOf(projectWrapper);
            projectArray.splice(index,1);
            deleteButton.parentElement.remove();
            if(projectArray.length<1){
                createNewProject();
                renderProjectsList()
            }
            clearProjectsList();
            renderProjectsList();
        })
        
        projectWrapper.appendChild(projectDiv);
        projectWrapper.appendChild(deleteButton);
        return projectWrapper;
    }
    projectArray.forEach((proj)=>{
        const newProj = constructProjectDiv(proj);
        newProj.id=projectArray.indexOf(proj);
        projectList.appendChild(newProj);
    })
}


function clearProjectsList(){
    projectList.innerHTML="";
}


addProjectButton.addEventListener("click",()=>{
    clearProjectsList();
    createNewProject();
    renderProjectsList()
})