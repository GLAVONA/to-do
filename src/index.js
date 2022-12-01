import datefns, { endOfMonth, endOfToday } from 'date-fns';
import './style.css';
import Project, { addTaskToProject, removeTaskFromProject } from './project.js';
import Task, { checkTask } from './task.js';
import Note from './notes.js';

const myFirstProject = Project("My First Project");

const myFirstTask = Task("asd","whodis",endOfToday,"high",false);



console.log(myFirstTask.done);
checkTask(myFirstTask);
console.log(myFirstTask.done)
addTaskToProject(myFirstTask,myFirstProject);
console.log(myFirstProject.taskArray[0]);
removeTaskFromProject(myFirstTask,myFirstProject);
console.log(myFirstProject.taskArray);

const note = Note(myFirstProject,"asd");
console.log(note);