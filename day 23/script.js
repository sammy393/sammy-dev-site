function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();
    if (taskValue === "") {
        alert("please enter a task!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = taskValue;
    //Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.textContent = function () {
        li.remove();
    };
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}