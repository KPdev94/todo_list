alert("RUNNING WEBPACK");

const contentArea = document.getElementById('content');
let taskList = [];
class Task{
    constructor(name, summary, participants, dueDate, priority, status = 'in progress'){
        this.name = name;
        this.summary = summary;
        this.participants = participants;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;

        taskList.push(this);
    }
}

let sampleTask = new Task("Sample Task", "This is a sample.", "Only Me", "12/12/3000", "Urgent");
console.log(taskList);


function createNewTaskButton() {
    let newTaskButtonDiv = document.createElement('div');
    newTaskButtonDiv.classList.add('new-task-div');

    let newTaskButton = document.createElement('button');
    newTaskButton.classList.add('new-task-button');
    newTaskButton.textContent = "+";

    let newTaskText = document.createElement('p');
    newTaskText.classList.add('new-task-text');
    newTaskText.textContent = 'New Task';

    contentArea.appendChild(newTaskButtonDiv);
    newTaskButtonDiv.appendChild(newTaskButton);
    newTaskButtonDiv.appendChild(newTaskText);

    return newTaskButtonDiv;
}

function createHeading() {
    let headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');

    let title = document.createElement('h1');
    title.textContent = "Let's Do This!";

    let subtitle = document.createElement('h2');
    subtitle.textContent = "A planner for your tasks, you got this!";

    contentArea.appendChild(headingDiv);
    headingDiv.appendChild(title);
    headingDiv.appendChild(subtitle);

    return headingDiv;
}

function createTaskList() {
    let tasksDiv = document.createElement('div');
    tasksDiv.classList.add('tasks-div');

    contentArea.appendChild(tasksDiv);

    populateTasks();
}

function populateTasks() {
    taskList.forEach((task) => {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div');

        let taskNameDiv = document.createElement('div');
        let taskNameHeading = document.createElement('p');
        taskNameHeading.textContent = 'Name: ';
        let taskNameInfo = document.createElement('p');
        taskNameInfo.textContent = task.name;
        taskNameDiv.appendChild(taskNameHeading);
        taskNameDiv.appendChild(taskNameInfo);

        let taskSummaryDiv = document.createElement('div');
        let taskSummaryHeading = document.createElement('p');
        taskSummaryHeading.textContent = 'Summary: ';
        let taskSummaryInfo = document.createElement('p');
        taskSummaryInfo.textContent = task.summary;
        taskSummaryDiv.appendChild(taskSummaryHeading);
        taskSummaryDiv.appendChild(taskSummaryInfo);

        let taskParticipantsDiv = document.createElement('div');
        let taskParticipantsHeading = document.createElement('p');
        taskParticipantsHeading.textContent = 'Participants: ';
        let taskParticipantsInfo = document.createElement('p');
        taskParticipantsInfo.textContent = task.participants;
        taskParticipantsDiv.appendChild(taskParticipantsHeading);
        taskParticipantsDiv.appendChild(taskParticipantsInfo);

        let taskDueDateDiv = document.createElement('div');
        let taskDueDateHeading = document.createElement('p');
        taskDueDateHeading.textContent = 'Due date: ';
        let taskDueDateInfo = document.createElement('p');
        taskDueDateInfo.textContent = task.dueDate;
        taskDueDateDiv.appendChild(taskDueDateHeading);
        taskDueDateDiv.appendChild(taskDueDateInfo);

        let taskPriorityDiv = document.createElement('div');
        let taskPriorityHeading = document.createElement('p');
        taskPriorityHeading.textContent = 'Priority: ';
        let taskPriorityInfo = document.createElement('p');
        taskPriorityInfo.textContent = task.priority;
        taskPriorityDiv.appendChild(taskPriorityHeading);
        taskPriorityDiv.appendChild(taskPriorityInfo);

        let taskStatusDiv = document.createElement('div');
        let taskStatusHeading = document.createElement('p');
        taskStatusHeading.textContent = 'Status: ';
        let taskStatusInfo = document.createElement('p');
        taskStatusInfo.textContent = task.status;
        taskStatusDiv.appendChild(taskStatusHeading);
        taskStatusDiv.appendChild(taskStatusInfo);

        taskDiv.appendChild(taskNameDiv);
        taskDiv.appendChild(taskSummaryDiv);
        taskDiv.appendChild(taskParticipantsDiv);
        taskDiv.appendChild(taskDueDateDiv);
        taskDiv.appendChild(taskPriorityDiv);
        taskDiv.appendChild(taskStatusDiv);

        document.querySelector('.tasks-div').appendChild(taskDiv);
    })
}

function generateHome() {
    createHeading();
    createTaskList();
    createNewTaskButton();
}

window.addEventListener('load', generateHome());