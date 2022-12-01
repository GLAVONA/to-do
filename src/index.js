import datefns, { endOfMonth, endOfToday } from 'date-fns';
import './style.css';
import Project, { addTaskToProject, removeTaskFromProject } from './project.js';
import Task, { checkTask } from './task.js';

const projectCollapsible = document.querySelector(".collapse");
projectCollapsible.addEventListener("click",()=>{
    const projectList = document.querySelector(".projects-list");
    projectList.style.display = projectList.style.display == "flex"? "none" : "flex";
    projectList.style.display == "flex"? projectCollapsible.innerHTML = "Projects<br>⌄" : projectCollapsible.innerHTML = "Projects<br>-"
})

//<div class="project" onclick="this.contentEditable='true';" onblur="this.contentEditable='false';">Project 1</div>