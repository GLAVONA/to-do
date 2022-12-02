import datefns, { endOfMonth, endOfToday } from 'date-fns';
import './style.css';
import Project, { addTaskToProject, createNewProject, projectArray, removeTaskFromProject } from './project.js';
import Task, { checkTask } from './task.js';
import Note from './notes.js'

const projectCollapsible = document.querySelector(".projects-collapse");
projectCollapsible.addEventListener("click",toggleProjects);

const delButton = document.querySelector(".project-wrapper>button")



const projectList = document.querySelector(".projects-list");
const projectWrapper = document.querySelector(".project-wrapper");
const addProjectButton = document.querySelector(".add-project")

function toggleProjects(){
    projectList.style.display = projectList.style.display == "flex"? "none" : "flex";
    projectList.style.display == "flex"? projectCollapsible.innerHTML = "Projects<br>⌄" : projectCollapsible.innerHTML = "Projects<br>-";
    addProjectButton.style.display = addProjectButton.style.display == "flex"? "none" : "flex";
}

renderProjects();

function renderProjects(){

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
        })

        projectWrapper.appendChild(projectDiv);
        projectWrapper.appendChild(deleteButton);
        return projectWrapper;
    }
    let id = 0;
    projectArray.forEach((proj)=>{
        const newProj = constructProjectDiv(proj);
        projectList.appendChild(newProj);
        newProj.id=id;
        id++;
    })
}


function clearProjectList(){
    projectList.innerHTML="";
}


addProjectButton.addEventListener("click",()=>{
    clearProjectList();
    createNewProject();
    renderProjects()
})