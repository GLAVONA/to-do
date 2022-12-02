import datefns, { endOfMonth, endOfToday } from 'date-fns';
import './style.css';
import Project, { addTaskToProject, createNewProject, projectArray, removeTaskFromProject, updateLocalStorage, updateProjectArray } from './project.js';
import Task, { checkTask } from './task.js';
import editIcon from './edit.png';

// Declare the Projectlist Div and "Add Project" button.
const projectList = document.querySelector(".projects-list");
const addProjectButton = document.querySelector(".add-project");

// Declare the collapsible "Projects" div and add a listener that toggles the projects underneath the Projects collapsible.
const projectCollapsible = document.querySelector(".projects-collapse");
projectCollapsible.addEventListener("click",toggleProjects);

updateProjectArray();

// Current active project
let currentIndex = 0;
let currentProject = projectArray[currentIndex];

// Sets the Currentproject's note variable to the input of the user in the notes textarea.
const notesAreaDiv = document.getElementById("notes-textarea");
notesAreaDiv.addEventListener("input",()=>{
    currentProject.note = notesAreaDiv.value;
    projectArray[currentIndex].note = currentProject.note;
    updateLocalStorage();
})


// Renders the projects list for the first time.
updateProjectArray();
renderProject();

// Toggles projects underneath the Projects collapsible.
function toggleProjects(){
    projectList.style.display = projectList.style.display == "flex"? "none" : "flex";
    projectList.style.display == "flex"? projectCollapsible.innerHTML = "Projects<br>⌄" : projectCollapsible.innerHTML = "Projects<br>-";
    addProjectButton.style.display = addProjectButton.style.display == "flex"? "none" : "flex";
}

// Renders the projects list for the first time.
updateProjectArray();
renderProjectsList();
renderProject();


// Renders the projects list and delete buttons, and handles logic.
function renderProjectsList(){

    function constructProjectDiv(project){
        const projectWrapper = document.createElement("div");
        projectWrapper.classList.add("project-wrapper");


        const projectDiv = document.createElement("input");
        projectDiv.classList.add("project");
        projectDiv.readOnly = true;
        projectDiv.setAttribute("onblur", "this.contentEditable='false'");
        projectDiv.setAttribute("maxlength",15);

        projectDiv.addEventListener("blur",()=>{
            if(projectDiv.value!=""){
            projectArray[event.target.parentElement.id].name = projectDiv.value;
            }
            else{
                projectDiv.value = projectArray[event.target.parentElement.id].name;
            }
            projectDiv.readOnly=true;
            projectDiv.classList.remove("editable");
            updateLocalStorage();
            updateProjectArray();
        })
        projectDiv.setAttribute("onblur", "this.contentEditable='false'");
        projectDiv.value = project.name;

        const editButton = document.createElement("img");
        editButton.classList.add("edit-button");
        editButton.src = editIcon;
        editButton.addEventListener("click",()=>{
            projectDiv.readOnly = false;
            projectDiv.classList.add("editable");
            projectDiv.focus();
            projectDiv.select();  
        })


        
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
            updateLocalStorage();
        })
        
        projectWrapper.appendChild(projectDiv);
        projectWrapper.appendChild(editButton);
        projectWrapper.appendChild(deleteButton);
        return projectWrapper;
    }
    projectArray.forEach((proj)=>{
        const newProj = constructProjectDiv(proj);
        newProj.id=projectArray.indexOf(proj);
        projectList.appendChild(newProj);
    })
}

// Resets the Projects List html (clears it)
function clearProjectsList(){
    projectList.innerHTML="";
}


updateProjectArray();


// Add new project eventlistener
addProjectButton.addEventListener("click",()=>{
    clearProjectsList();
    createNewProject();
    renderProjectsList()
    updateLocalStorage();
})


const projectDivs = document.querySelectorAll(".project");

projectDivs.forEach(proj=>proj.addEventListener("click",(e)=>{
    currentIndex = parseInt(e.target.parentElement.id);
    currentProject = projectArray[currentIndex];
    projectDivs.forEach(proj=>proj.classList.remove("active"));
    proj.classList.add("active");
    renderProject();
}))

// Render notes and tasks of the selected project
function renderProject (){
    notesAreaDiv.value = currentProject.note;
}

function selectProject(){

}