import './style.css';


const contentArea = document.getElementById('content');

let taskList = [];
let count = 0;

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

let sampleInProgressTask = new Task("Sample Task", "This is a sample.", "Only Me", "12/12/3000", "High");
let sampleCompletedTask = new Task('Sample complete task', '"This is a completed task', 'Me again', '11/11/2000', "High", "completed");
console.log(taskList);

function submitNewTask() {
    let newName = document.querySelector('#nameInput').value;
    let newSummary = document.querySelector('#summaryInput').value;
    let newParticipants = document.querySelector('#participantsInput').value;
    let newDueDate = document.querySelector('#dueDateInput').value;
    let newPriority = document.querySelector('input[name="priority"]:checked').value;
    let newStatus;
        if(document.querySelector('#statusInput').checked == true) newStatus = 'completed';
        else newStatus = 'in progress';

    new Task(newName, newSummary, newParticipants, newDueDate, newPriority, newStatus);
}

function createNewTaskWindow() {
    let newTaskWindowDiv = document.createElement('div');
    newTaskWindowDiv.classList.add('new-task-window');

    let newTaskNameDiv = document.createElement('div');
    newTaskNameDiv.classList.add('new-task-window-input-div');
    let newTaskNameTitle = document.createElement('label');
    newTaskNameTitle.textContent = 'Task name:';
    let newTaskNameInput = document.createElement('input');
    newTaskNameInput.id = 'nameInput';
    newTaskNameTitle.htmlFor = 'nameInput';

    let newTaskSummaryDiv = document.createElement('div');
    newTaskSummaryDiv.classList.add('new-task-window-input-div');
    let newTaskSummaryTitle = document.createElement('label');
    newTaskSummaryTitle.textContent = 'Summary:';
    let newTaskSummaryInput = document.createElement('TEXTAREA');
    newTaskSummaryInput.id = 'summaryInput';
    newTaskSummaryTitle.htmlFor = 'summaryInput';

    let newTaskParticipantsDiv = document.createElement('div');
    newTaskParticipantsDiv.classList.add('new-task-window-input-div');
    let newTaskParticipantsTitle = document.createElement('label');
    newTaskParticipantsTitle.textContent = 'Participants:'
    let newTaskParticipantsInput = document.createElement('input');
    newTaskParticipantsInput.id = 'participantsInput';
    newTaskParticipantsTitle.htmlFor = 'participantsInput';

    let newTaskDueDateDiv = document.createElement('div');
    newTaskDueDateDiv.classList.add('new-task-window-input-div');
    let newTaskDueDateTitle = document.createElement('label');
    newTaskDueDateTitle.textContent = 'Due date:'
    let newTaskDueDateInput = document.createElement('input');
    newTaskDueDateInput.setAttribute('type', 'date');
    newTaskDueDateInput.id = 'dueDateInput';
    newTaskDueDateTitle.htmlFor = 'dueDateInput';

    let newTaskPriorityDiv = document.createElement('div');
    newTaskPriorityDiv.classList.add('new-task-window-input-div');
    let newTaskPriorityTitle = document.createElement('label');
    newTaskPriorityTitle.textContent = 'Priority: ';

    let newTaskLowPriorityInput = document.createElement('input');
    newTaskLowPriorityInput.setAttribute('type', 'radio');
    newTaskLowPriorityInput.setAttribute('value', 'Low');
    newTaskLowPriorityInput.id = 'priorityLowInput';
    newTaskLowPriorityInput.setAttribute('name', 'priority');
    let lowPriority = document.createElement('label');
    lowPriority.setAttribute('for', 'priorityLowInput');
    lowPriority.textContent = 'Low';

    let newTaskNormalPriorityInput = document.createElement('input');
    newTaskNormalPriorityInput.setAttribute('type', 'radio');
    newTaskNormalPriorityInput.setAttribute('value', 'Normal');
    newTaskNormalPriorityInput.id = 'priorityNormalInput';
    newTaskNormalPriorityInput.setAttribute('name', 'priority');
    let normalPriority = document.createElement('label');
    normalPriority.setAttribute('for', 'priorityNormalInput');
    normalPriority.textContent = 'Normal';

    let newTaskHighPriorityInput = document.createElement('input');
    newTaskHighPriorityInput.setAttribute('type', 'radio');
    newTaskHighPriorityInput.setAttribute('value', 'High');
    newTaskHighPriorityInput.id = 'priorityHighInput';
    newTaskHighPriorityInput.setAttribute('name', 'priority');
    let highPriority = document.createElement('label');
    highPriority.setAttribute('for', 'priorityHighInput');
    highPriority.textContent = 'High';

    let newTaskStatusDiv = document.createElement('div');
    newTaskStatusDiv.classList.add('new-task-window-input-div');
    let newTaskStatusTitle = document.createElement('label');
    newTaskStatusTitle.textContent = 'Complete'
    let newTaskStatusInput = document.createElement('input');
    newTaskStatusInput.setAttribute('type', 'checkbox');
    newTaskStatusInput.id = 'statusInput';
    newTaskStatusTitle.htmlFor = 'statusInput';

    let tasksDiv = document.querySelector('.tasks-div');
    contentArea.appendChild(newTaskWindowDiv);
    newTaskWindowDiv.appendChild(newTaskNameDiv);
    newTaskNameDiv.appendChild(newTaskNameTitle);
    newTaskNameDiv.appendChild(newTaskNameInput);
    newTaskWindowDiv.appendChild(newTaskSummaryDiv);
    newTaskSummaryDiv.appendChild(newTaskSummaryTitle);
    newTaskSummaryDiv.appendChild(newTaskSummaryInput);
    newTaskWindowDiv.appendChild(newTaskParticipantsDiv);
    newTaskParticipantsDiv.appendChild(newTaskParticipantsTitle);
    newTaskParticipantsDiv.appendChild(newTaskParticipantsInput);
    newTaskWindowDiv.appendChild(newTaskDueDateDiv);
    newTaskDueDateDiv.appendChild(newTaskDueDateTitle);
    newTaskDueDateDiv.appendChild(newTaskDueDateInput);
    newTaskWindowDiv.appendChild(newTaskPriorityDiv);
    newTaskPriorityDiv.appendChild(newTaskPriorityTitle);
    newTaskPriorityDiv.appendChild(newTaskLowPriorityInput);
    newTaskPriorityDiv.appendChild(lowPriority);
    newTaskPriorityDiv.appendChild(newTaskNormalPriorityInput);
    newTaskPriorityDiv.appendChild(normalPriority);
    newTaskPriorityDiv.appendChild(newTaskHighPriorityInput);
    newTaskPriorityDiv.appendChild(highPriority);
    newTaskWindowDiv.appendChild(newTaskStatusDiv);
    newTaskStatusDiv.appendChild(newTaskStatusTitle);
    newTaskStatusDiv.appendChild(newTaskStatusInput);

    let cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.id = 'cancel-task-button';

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.id = 'submit-task-button';

    let buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons-div';
    buttonsDiv.appendChild(cancelButton);
    buttonsDiv.appendChild(submitButton);

    newTaskWindowDiv.appendChild(buttonsDiv);

    document.querySelector('#cancel-task-button').addEventListener('click', () => {
        document.querySelector('#content').removeChild(newTaskWindowDiv);
        tasksDiv.style.display = 'block';
    });

    document.querySelector('#submit-task-button').addEventListener('click', () => {
        submitNewTask();
        document.querySelector('#content').removeChild(newTaskWindowDiv);
        contentArea.removeChild(document.querySelector('.tasks-div'));
        tasksDiv.style.display = 'block';
        createTaskList();
    })
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

    let addNewTaskButton = document.querySelector('.new-task-button');
addNewTaskButton.addEventListener('click', () => {
    document.querySelector('.tasks-div').style.display = 'none';
    createNewTaskWindow();
});

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

    let inProgressHeader = document.createElement('div');
    inProgressHeader.classList.add('in-progress-header');
    inProgressHeader.textContent = "In progress";

    let inProgressTasks = document.createElement('div');
    inProgressTasks.classList.add('in-progress-tasks');

    let completedHeader = document.createElement('div');
    completedHeader.classList.add('completed-header');
    completedHeader.textContent = 'Completed';

    let completesTasks = document.createElement('div');
    completesTasks.classList.add('completed-tasks');

    contentArea.appendChild(tasksDiv);
    tasksDiv.appendChild(inProgressHeader);
    tasksDiv.appendChild(inProgressTasks);
    tasksDiv.appendChild(completedHeader);
    tasksDiv.appendChild(completesTasks);

    populateTasks();
    createNewTaskButton();
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
        if(task.status == 'in progress') {
            let taskStatusButton = document.createElement('button');
            taskStatusButton.classList.add('task-status-button');
            taskStatusButton.setAttribute('data-num', count);
            taskStatusButton.textContent = 'Completed';
            taskStatusDiv.appendChild(taskStatusButton);
        }

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('data-num', count);
        deleteButton.textContent = 'X';
        
        taskDiv.appendChild(taskNameDiv);
        taskDiv.appendChild(taskSummaryDiv);
        taskDiv.appendChild(taskParticipantsDiv);
        taskDiv.appendChild(taskDueDateDiv);
        taskDiv.appendChild(taskPriorityDiv);
        taskDiv.appendChild(taskStatusDiv);
        taskDiv.appendChild(deleteButton);

        if(task.status == 'in progress') {
        document.querySelector('.in-progress-tasks').appendChild(taskDiv);
        }
        else if(task.status == 'completed') {
        document.querySelector('.completed-tasks').appendChild(taskDiv);
        }
        else alert(`${task.name} has an error and cannot be placed.`);

        count++;
    })
    let deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => button.addEventListener('click', deleteTask));
    let completeButtons = document.querySelectorAll('.task-status-button');
    completeButtons.forEach((button) => button.addEventListener('click', completeTask));
    count = 0;
}

function completeTask(e) {
    let toBeCompleted = e.target.getAttribute('data-num');
    taskList[toBeCompleted].status = 'completed';
    contentArea.removeChild(document.querySelector('.tasks-div'));
    createTaskList();
}

function deleteTask(e) {
    let toBeDeleted = e.target.getAttribute('data-num');
    taskList.splice(toBeDeleted, 1); 
    contentArea.removeChild(document.querySelector('.tasks-div'));
    createTaskList();
}

function generateHome() {
    createHeading();
    createTaskList();
}

window.addEventListener('load', generateHome());
