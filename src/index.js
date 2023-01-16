import datefns, {
  endOfMonth,
  endOfToday,
  endOfTomorrow,
  endOfWeek,
  format,
  parse,
  parseISO,
  startOfDay,
  startOfWeek,
  toDate,
} from "date-fns";
import "./style.css";
import Project, {
  addTaskToProject,
  createNewProject,
  projectArray,
  removeTaskFromProject,
  updateLocalStorage,
  updateProjectArray,
} from "./project.js";
import Task, {
  checkTask,
  createNewTask,
  deleteTask,
  markTaskComplete,
  unmarkTaskComplete,
} from "./task.js";
import editIcon from "./edit.png";
import { isTomorrow } from "date-fns/esm";
import { deAT } from "date-fns/locale";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Declare the Projectlist Div and "Add Project" button.
const projectList = document.querySelector(".projects-list");
const addProjectButton = document.querySelector(".add-project");

// Declare the collapsible "Projects" div and add a listener that toggles the projects underneath the Projects collapsible.
const projectCollapsible = document.querySelector(".projects-collapse");
projectCollapsible.addEventListener("click", toggleProjects);

const todayDiv = document.querySelector(".task-list-content");
const completedDiv = document.querySelector(".completed-wrapper > .completed");

const todayHeader = document.querySelector(".today-header");

// Current active project
export let currentIndex = 0;
export let currentProject = projectArray[currentIndex];

const todayPeriodDiv = document.querySelector(".time-period>.today");
todayPeriodDiv.addEventListener("click", (e) => {
  changeCurrentPeriod(e);
});
const thisWeekPeriodDiv = document.querySelector(".time-period>.this-week");
thisWeekPeriodDiv.addEventListener("click", (e) => {
  changeCurrentPeriod(e);
});
const thisMonthPeriodDiv = document.querySelector(".time-period>.this-month");
thisMonthPeriodDiv.addEventListener("click", (e) => {
  changeCurrentPeriod(e);
});
const allTasks = document.querySelector(".time-period>.all");
allTasks.addEventListener("click", (e) => {
  changeCurrentPeriod(e);
});

let currentPeriod = "all";

const changeCurrentPeriod = (e) => {
  currentPeriod = e.target.firstChild.textContent;
  switch (currentPeriod.toLowerCase()) {
    case "all":
      todayHeader.textContent = "All Tasks:";
      break;
    case "today":
      todayHeader.textContent = "Today's Tasks:";
      break;
    case "this week":
      todayHeader.textContent = "This Week's Tasks:";
      break;
    case "this month":
      todayHeader.textContent = "This Month's Tasks:";
      break;
  }
  clearTasks();
  renderTasks();
};
// Sets the Currentproject's note variable to the input of the user in the notes textarea.
const notesAreaDiv = document.getElementById("notes-textarea");
notesAreaDiv.addEventListener("input", () => {
  currentProject.note = notesAreaDiv.value;
  projectArray[currentIndex].note = currentProject.note;
  updateLocalStorage();
});

let projectDivs = document.querySelectorAll(".project");

// Renders the projects list for the first time.

// Toggles projects underneath the Projects collapsible.
function toggleProjects() {
  projectList.style.display =
    projectList.style.display == "flex" ? "none" : "flex";
  projectList.style.display == "flex"
    ? (projectCollapsible.innerHTML = "Projects<br>⌄")
    : (projectCollapsible.innerHTML = "Projects<br>-");
  addProjectButton.style.display =
    addProjectButton.style.display == "flex" ? "none" : "flex";
}

// Renders the projects list for the first time.
updateProjectArray();
renderProjectsList();

// Renders the projects list and delete buttons, and handles logic.
function renderProjectsList() {
  function constructProjectDiv(project) {
    const projectWrapper = document.createElement("div");
    projectWrapper.classList.add("project-wrapper");

    const projectDiv = document.createElement("input");
    projectDiv.classList.add("project");
    projectDiv.readOnly = true;
    projectDiv.setAttribute("onblur", "this.contentEditable='false'");
    projectDiv.setAttribute("maxlength", 13);

    projectDiv.addEventListener("blur", () => {
      const index = Array.from(projectWrapper.parentElement.children).indexOf(
        projectWrapper
      );
      if (projectDiv.value != "") {
        projectArray[index].name = projectDiv.value;
      } else {
        projectDiv.value = projectArray[index].name;
      }
      projectDiv.readOnly = true;
      projectDiv.classList.remove("editable");
      updateLocalStorage();
      updateProjectArray();
    });
    projectDiv.setAttribute("onblur", "this.contentEditable='false'");
    projectDiv.value = project.name;

    const editButton = document.createElement("img");
    editButton.classList.add("edit-button");
    editButton.src = editIcon;
    editButton.addEventListener("click", () => {
      projectDiv.readOnly = false;
      projectDiv.classList.add("editable");
      projectDiv.focus();
      projectDiv.select();
    });

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.innerHTML = "&times;";
    deleteButton.addEventListener("click", () => {
      const index = Array.from(projectWrapper.parentElement.children).indexOf(
        projectWrapper
      );
      projectArray.splice(index, 1);
      deleteButton.parentElement.remove();
      if (projectArray.length < 1) {
        createNewProject();
        notesAreaDiv.value = "";
        renderProjectsList();
      }
      if (projectArray.length == 1) {
        switchCurrentProject(projectList.lastChild.firstChild);
      }
      updateLocalStorage();
    });
    updateLocalStorage();
    updateProjectArray();
    projectWrapper.appendChild(projectDiv);
    projectWrapper.appendChild(editButton);
    projectWrapper.appendChild(deleteButton);
    return projectWrapper;
  }
  if (projectArray.length < 1) {
    constructProjectDiv(createNewProject());
  }

  projectArray.forEach((proj) => {
    const newProj = constructProjectDiv(proj);
    projectList.appendChild(newProj);
  });

  projectDivs = document.querySelectorAll(".project");
  projectDivs.forEach((proj) =>
    proj.addEventListener("click", () => {
      switchCurrentProject(proj);
      clearTasks();
      renderTasks();
    })
  );
}
switchCurrentProject(projectList.lastChild.firstChild);

// Resets the Projects List html (clears it)
function clearProjectsList() {
  projectList.innerHTML = "";
}

updateProjectArray();

// Add new project eventlistener
addProjectButton.addEventListener("click", () => {
  clearProjectsList();
  currentProject = createNewProject();
  renderProjectsList();
  switchCurrentProject(projectList.lastChild.firstChild);
});

// Render notes and tasks of the selected project
function renderNotes() {
  notesAreaDiv.value = currentProject.note;
}

function switchCurrentProject(proj) {
  currentIndex = Array.from(proj.parentElement.parentElement.children).indexOf(
    proj.parentElement
  );
  currentProject = projectArray[currentIndex];

  projectDivs.forEach((proj) => proj.classList.remove("active"));
  proj.classList.add("active");
  renderNotes();
  clearTasks();
  renderTasks();
}

const newTaskButton = document.querySelector(".new-task-button");

newTaskButton.addEventListener("click", () => {
  updateProjectArray();
  const newTask = createNewTask();
  newTask.name = "New Task";
  currentProject.taskArray.push(newTask);
  projectArray[currentIndex] = currentProject;
  updateLocalStorage();
  clearTasks();
  renderTasks();
});

function createTaskDiv(name, description, dueDate) {
  const taskWrapperDiv = document.createElement("div");
  taskWrapperDiv.classList.add("task-wrapper");
  const taskNameDiv = document.createElement("div");
  taskNameDiv.classList.add("task-name");
  taskNameDiv.textContent = name;
  const taskDescDiv = document.createElement("div");
  taskDescDiv.classList.add("task-desc");
  taskDescDiv.textContent = description;
  const taskDueDateDiv = document.createElement("div");
  taskDueDateDiv.classList.add("task-duedate");
  taskDueDateDiv.textContent = format(new Date(dueDate), "dd-MM-yyyy");
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons-div");
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", () => {
    markTaskComplete(completeButton);
    clearTasks();
    renderTasks();
  });
  const taskDeleteButton = document.createElement("button");
  taskDeleteButton.classList.add("delete-task-button");
  taskDeleteButton.textContent = "Delete";
  taskDeleteButton.addEventListener("click", () => {
    deleteTask(taskDeleteButton);
    clearTasks();
    renderTasks();
  });

  buttonsDiv.appendChild(completeButton);
  buttonsDiv.appendChild(taskDeleteButton);

  taskWrapperDiv.appendChild(taskNameDiv);
  taskWrapperDiv.appendChild(taskDescDiv);
  taskWrapperDiv.appendChild(taskDueDateDiv);
  taskWrapperDiv.appendChild(buttonsDiv);

  taskWrapperDiv.addEventListener("click", (e) => {
    if (e.target === completeButton || e.target === taskDeleteButton) {
      return;
    }
    let index = Array.from(e.target.parentElement.children).indexOf(e.target);
    if (e.target === taskDueDateDiv || e.target === taskDescDiv) {
      index = Array.from(e.target.parentElement.parentElement.children).indexOf(
        e.target.parentElement
      );
    }
    renderDialog(index);
  });

  return taskWrapperDiv;
}

function renderDialog(index) {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  const modalDiv = document.createElement("modal");
  modalDiv.classList.add("modal-div");

  const body = document.querySelector("body");

  const taskNameLabel = document.createElement("label");
  taskNameLabel.htmlFor = "name";
  taskNameLabel.innerHTML = "Task name:";
  const taskNameDiv = document.createElement("input");
  taskNameDiv.classList.add("modal-task-name");
  taskNameDiv.name = "name";
  taskNameDiv.value = currentProject.taskArray[index].name;
  const taskDescLabel = document.createElement("label");
  taskDescLabel.htmlFor = "desc";
  taskDescLabel.innerHTML = "Description:";
  const taskDescDiv = document.createElement("input");
  taskDescDiv.classList.add("modal-task-desc");
  taskDescDiv.name = "desc";
  taskDescDiv.value = currentProject.taskArray[index].description;
  const taskDueDateLabel = document.createElement("label");
  taskDueDateLabel.htmlFor = "date";
  taskDueDateLabel.innerHTML = "Due date:";
  const taskDueDateDiv = document.createElement("input");
  taskDueDateDiv.type = "date";
  taskDueDateDiv.name = "date";
  taskDueDateDiv.classList.add("modal-task-duedate");
  taskDueDateDiv.value = currentProject.taskArray[index].dueDate;

  const helpText = document.createElement("div");
  helpText.classList.add("help-text");

  modalDiv.appendChild(taskNameLabel);
  modalDiv.appendChild(taskNameDiv);
  modalDiv.appendChild(taskDescLabel);
  modalDiv.appendChild(taskDescDiv);
  modalDiv.appendChild(taskDueDateLabel);
  modalDiv.appendChild(taskDueDateDiv);

  modalContainer.appendChild(modalDiv);
  body.appendChild(modalContainer);
  modalContainer.style.display = "flex";

  const saveDialogInfo = () => {
    modalContainer.style.display = "none";
    currentProject.taskArray[index].name = taskNameDiv.value;
    currentProject.taskArray[index].description = taskDescDiv.value;
    if (taskDueDateDiv.value !== "") {
      currentProject.taskArray[index].dueDate = new Date(taskDueDateDiv.value);
    }
    projectArray[currentIndex] = currentProject;
    updateLocalStorage();
    clearTasks();
    renderTasks();
  };

  window.addEventListener("mousedown", (e) => {
    if (e.target == modalContainer) {
      saveDialogInfo();
    }
  });

  window.addEventListener("keypress", (e) => {
    if (e.shiftKey) {
      if (e.key === "Enter" && modalContainer.style.display !== "none") {
        saveDialogInfo();
      }
    }
  });
}

function createCompletedDiv(name) {
  const taskWrapperDiv = document.createElement("div");
  taskWrapperDiv.classList.add("completed-task-wrapper");
  const taskNameDiv = document.createElement("div");
  taskNameDiv.classList.add("completed-task-name");
  taskNameDiv.textContent = name;
  const uncompleteButton = document.createElement("button");
  uncompleteButton.classList.add("completed-complete-button");
  uncompleteButton.textContent = "Undo";
  uncompleteButton.addEventListener("click", () => {
    unmarkTaskComplete(uncompleteButton);
    clearTasks();
    renderTasks();
  });
  const taskDeleteButton = document.createElement("button");
  taskDeleteButton.classList.add("completed-delete-task-button");
  taskDeleteButton.textContent = "Delete";
  taskDeleteButton.addEventListener("click", () => {
    deleteTask(taskDeleteButton);
    clearTasks();
    renderTasks();
  });

  taskWrapperDiv.appendChild(taskNameDiv);
  taskWrapperDiv.appendChild(uncompleteButton);
  taskWrapperDiv.appendChild(taskDeleteButton);

  taskWrapperDiv.addEventListener("click", (e) => {
    if (e.target === uncompleteButton || e.target === taskDeleteButton) {
      return;
    }
    const index = Array.from(e.target.parentElement.children).indexOf(e.target);
    renderDialog(index);
  });

  return taskWrapperDiv;
}

function clearTasks() {
  todayDiv.innerHTML = "";
  completedDiv.innerHTML = "";
}

function renderTasks() {
  currentProject.taskArray.sort((t1, t2) =>
    t1.dueDate > t2.dueDate ? 1 : t1.dueDate < t2.dueDate ? -1 : 0
  );
  currentProject.taskArray.forEach((task) => {
    switch (currentPeriod.toLowerCase()) {
      case "all":
        const newTask = createTaskDiv(
          task.name,
          task.description,
          task.dueDate
        );
        todayDiv.appendChild(newTask);
        break;
      case "today":
        if (
          task.dueDate <= endOfToday(new Date()) &&
          task.dueDate >= startOfDay(new Date())
        ) {
          const newTask = createTaskDiv(
            task.name,
            task.description,
            task.dueDate
          );
          todayDiv.appendChild(newTask);
        }
        break;
      case "this week":
        if (
          task.dueDate <= endOfWeek(new Date()) &&
          task.dueDate >= startOfWeek(new Date())
        ) {
          const newTask = createTaskDiv(
            task.name,
            task.description,
            task.dueDate
          );
          todayDiv.appendChild(newTask);
        }
        break;
      case "this month":
        if (
          task.dueDate <= endOfMonth(new Date()) &&
          task.dueDate >= startOfWeek(new Date())
        ) {
          const newTask = createTaskDiv(
            task.name,
            task.description,
            task.dueDate
          );
          todayDiv.appendChild(newTask);
        }
        break;
    }
  });
  if (
    currentProject.completedArray !== undefined &&
    currentProject.completedArray.length > 0
  ) {
    currentProject.completedArray.forEach((task) => {
      const newTask = createCompletedDiv(task.name);
      completedDiv.appendChild(newTask);
    });
  }
}

const signInDiv = document.createElement("div");
signInDiv.classList.add("sign-in-div");
signInDiv.classList.add("register");

const registerForm = document.createElement("form");
registerForm.classList.add("register");
registerForm.id = "register-form";
const registerEmail = document.createElement("input");
registerEmail.setAttribute("placeholder", "Email");
registerEmail.className = "register";
registerEmail.id = "register-email";
registerEmail.setAttribute("type", "email");
registerEmail.required = true;
const registerPassword = document.createElement("input");
registerPassword.setAttribute("placeholder", "Password");
registerPassword.className = "register";
registerPassword.id = "register-password";
registerPassword.required = true;
registerPassword.setAttribute("type", "password");
const registerConfPassword = document.createElement("input");
registerConfPassword.setAttribute("placeholder", "Confirm Password");
registerConfPassword.className = "register";
registerConfPassword.id = "register-conf-password";
registerConfPassword.required = true;
registerConfPassword.setAttribute("type", "password");

const registerButton = document.createElement("button");
registerButton.id = "register-button";
registerButton.classList.add("register");
registerButton.textContent = "Register";
registerButton.type = "submit";

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  const registerUser = async () => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      registerEmail.value,
      registerPassword.value
    );
    console.log("registered");
  };
  if (!registerEmail.checkValidity()) {
    alert("Please enter a valid email!");
    return;
  } else if (registerPassword.value === "") {
    alert("Password cannot be empty!");
  } else if (registerPassword.value !== registerConfPassword.value) {
    alert("Your passwords don't match!");
    return;
  } else {
    try {
      registerUser();
    } catch (error) {
      alert(error.message);
    }
  }
});

registerForm.appendChild(registerEmail);
registerForm.appendChild(registerPassword);
registerForm.appendChild(registerConfPassword);
registerForm.appendChild(registerButton);

signInDiv.appendChild(registerForm);

const signInForm = document.createElement("form");
signInForm.classList.add("sign-in");
signInForm.id = "sign-in-form";
signInForm.classList.add("register");
const signInEmail = document.createElement("input");
signInEmail.setAttribute("placeholder", "Email");
signInEmail.className = "sign-in";
signInEmail.id = "sign-in-email";
signInEmail.classList.add("register");
const signInPassword = document.createElement("input");
signInPassword.setAttribute("placeholder", "Password");
signInPassword.className = "sign-in";
signInPassword.id = "sign-in-password";
signInPassword.classList.add("register");

const signButton = document.createElement("button");
signButton.id = "sign-in-button";
signButton.textContent = "Sign in";
signButton.classList.add("register");

signButton.addEventListener("click", (e) => {
  e.preventDefault();

  const signInUser = async () => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      signInEmail.value,
      signInPassword.value
      );
    };
    signInUser().catch((error)=>{alert(error.message)})
});

signInForm.appendChild(signInEmail);
signInForm.appendChild(signInPassword);
signInForm.appendChild(signButton);

signInDiv.appendChild(signInForm);

const signInContainer = document.createElement("div");
signInContainer.classList.add("sign-in-container");
signInContainer.appendChild(signInDiv);
signInContainer.style.display = "none";

const mainContainerDiv = document.querySelector(".main-container");
mainContainerDiv.appendChild(signInContainer);

const toggleSignInDiv = () => {
  if (signInContainer.style.display === "none") {
    signInContainer.style.display = "flex";
  } else {
    signInContainer.style.display = "none";
  }
};

signInContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("register")) {
    toggleSignInDiv();
  } else {
    return;
  }
});

const signInButton = document.getElementById("sign-in");
const signOutButton = document.getElementById("sign-out");

onAuthStateChanged(auth, (user) => {
  if (user) {
    signOutButton.style.display = "block";
    signInButton.style.display = "none";
    signInContainer.style.display = "none";

  } else {
    signOutButton.style.display = "none";
    signInButton.style.display = "block";
  }
});

signInButton.addEventListener("click", toggleSignInDiv);
signOutButton.addEventListener("click", async () => {
  await signOut(auth);
});

//REMOVE THIS WHEN DONE *** v
// const deleteLocalStorageButton = document.querySelector(".delete-local-storage")

// deleteLocalStorageButton.addEventListener("click", () => {
//     localStorage.clear();
// })
//*** ^
