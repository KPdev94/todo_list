import './style.css';


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

let sampleInProgressTask = new Task("Sample Task", "This is a sample.", "Only Me", "12/12/3000", "Urgent");
let sampleCompletedTask = new Task('Sample complete task', '"This is a completed task', 'Me again', '11/11/2000', "Urgent", "completed");
console.log(taskList);

function createNewTaskWindow() {
    let newTaskWindowDiv = document.createElement('div');
    newTaskWindowDiv.classList.add('new-task-window');

    let newTaskNameDiv = document.createElement('div');
    

    let newTaskSummaryDiv = document.createElement('div');

    let newTaskParticipantsDiv = document.createElement('div');

    let newTaskDueDateDiv = document.createElement('div');

    let newTaskPriorityDiv = document.createElement('div');

    let newTaskStatusDiv = document.createElement('div');

}

function createNewTaskButton() {
    let newTaskButtonDiv = document.createElement('div');
    newTaskButtonDiv.classList.add('new-task-div');

    let newTaskButton = document.createElement('button');
    newTaskButton.classList.add('new-task-button');
    newTaskButton.innerHTML = `+<br>New Task`;

    let tasksDiv = document.querySelector('.in-progress-tasks');
    tasksDiv.appendChild(newTaskButtonDiv);
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

    let inProgressTasks = document.createElement('div');
    inProgressTasks.classList.add('in-progress-tasks');

    let completesTasks = document.createElement('div');
    completesTasks.classList.add('completed-tasks');

    contentArea.appendChild(tasksDiv);
    tasksDiv.appendChild(inProgressTasks);
    tasksDiv.appendChild(completesTasks);

    populateTasks();
}

function populateTasks() {
    taskList.forEach((task) => {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div');

        let taskNameDiv = document.createElement('div');
        taskNameDiv.classList.add('tasks-name');
        let taskNameHeading = document.createElement('p');
        taskNameHeading.classList.add('task-subheading');
        taskNameHeading.textContent = 'Name';
        let taskNameInfo = document.createElement('p');
        taskNameInfo.classList.add('task-info');
        taskNameInfo.textContent = task.name;
        taskNameDiv.appendChild(taskNameHeading);
        taskNameDiv.appendChild(taskNameInfo);

        let taskSummaryDiv = document.createElement('div');
        taskSummaryDiv.classList.add('tasks-summary');
        let taskSummaryHeading = document.createElement('p');
        taskSummaryHeading.classList.add('task-subheading');
        taskSummaryHeading.textContent = 'Summary';
        let taskSummaryInfo = document.createElement('p');
        taskSummaryInfo.classList.add('task-info');
        taskSummaryInfo.textContent = task.summary;
        taskSummaryDiv.appendChild(taskSummaryHeading);
        taskSummaryDiv.appendChild(taskSummaryInfo);

        let taskParticipantsDiv = document.createElement('div');
        taskParticipantsDiv.classList.add('tasks-participants');
        let taskParticipantsHeading = document.createElement('p');
        taskParticipantsHeading.classList.add('task-subheading');
        taskParticipantsHeading.textContent = 'Participants';
        let taskParticipantsInfo = document.createElement('p');
        taskParticipantsInfo.classList.add('task-info');
        taskParticipantsInfo.textContent = task.participants;
        taskParticipantsDiv.appendChild(taskParticipantsHeading);
        taskParticipantsDiv.appendChild(taskParticipantsInfo);

        let taskDueDateDiv = document.createElement('div');
        taskDueDateDiv.classList.add('tasks-due-date');
        let taskDueDateHeading = document.createElement('p');
        taskDueDateHeading.classList.add('task-subheading');
        taskDueDateHeading.textContent = 'Due date';
        let taskDueDateInfo = document.createElement('p');
        taskDueDateInfo.classList.add('task-info');
        taskDueDateInfo.textContent = task.dueDate;
        taskDueDateDiv.appendChild(taskDueDateHeading);
        taskDueDateDiv.appendChild(taskDueDateInfo);

        let taskPriorityDiv = document.createElement('div');
        taskPriorityDiv.classList.add('tasks-priority');
        let taskPriorityHeading = document.createElement('p');
        taskPriorityHeading.classList.add('task-subheading');
        taskPriorityHeading.textContent = 'Priority';
        let taskPriorityInfo = document.createElement('p');
        taskPriorityInfo.classList.add('task-info');
        taskPriorityInfo.textContent = task.priority;
        taskPriorityDiv.appendChild(taskPriorityHeading);
        taskPriorityDiv.appendChild(taskPriorityInfo);

        let taskStatusDiv = document.createElement('div');
        taskStatusDiv.classList.add('tasks-status');
        let taskStatusHeading = document.createElement('p');
        taskStatusHeading.classList.add('task-subheading');
        taskStatusHeading.textContent = 'Status';
        let taskStatusInfo = document.createElement('p');
        taskStatusInfo.classList.add('task-info');
        taskStatusInfo.textContent = task.status;
        taskStatusDiv.appendChild(taskStatusHeading);
        taskStatusDiv.appendChild(taskStatusInfo);
        
        taskDiv.appendChild(taskNameDiv);
        taskDiv.appendChild(taskSummaryDiv);
        taskDiv.appendChild(taskParticipantsDiv);
        taskDiv.appendChild(taskDueDateDiv);
        taskDiv.appendChild(taskPriorityDiv);
        taskDiv.appendChild(taskStatusDiv);

        if(task.status == 'in progress') {
        document.querySelector('.in-progress-tasks').appendChild(taskDiv);
        }
        else if(task.status == 'completed') {
        document.querySelector('.completed-tasks').appendChild(taskDiv);
        }
        else alert(`${task.name} has an error and cannot be placed.`);
    })
}



function generateHome() {
    createHeading();
    createTaskList();
    createNewTaskButton();
}

window.addEventListener('load', generateHome());