export default function Task(title, description, dueDate, priority, done) {
    return { title, description, dueDate, priority, done }
}

export const checkTask = (task) => {
    return task.done = true;
}

export const uncheckTask = (task) => {
    return task.done = false;
}

