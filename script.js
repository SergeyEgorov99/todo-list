document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete-btn">Удалить</button>`;
        taskList.appendChild(li);

        taskInput.value = "";

        li.querySelector(".delete-btn").addEventListener("click", function () {
            li.remove();
        });
    });
});
