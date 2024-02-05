function addTask() {
    let taskInput = document.getElementById("newTask").value;
    let deadlineInput = document.getElementById("deadline").value;

    if (taskInput !== "") {
        if (deadlineInput === "") {
            alert("Please enter the deadline!");
            return;
        }

        let taskList = document.getElementById("taskList");

        let currentDate = new Date();
        let formattedDate = currentDate.toISOString().split('T')[0];

        let li = document.createElement("li");
        li.innerHTML = `
            <span>Task: ${taskInput}</span>
            <span>Assigned Date: ${formattedDate}</span>
            <span>Deadline: ${deadlineInput}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        taskList.appendChild(li);
        document.getElementById("newTask").value = "";
        document.getElementById("deadline").value = "";
    } else {
        alert("Please enter the task!");
    }
}

function removeTask(element) {
    element.parentNode.remove();
}