document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Загружаем сохранённые задачи
    loadTasks();

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = createTaskElement(taskText);
        taskList.appendChild(li);
        saveTasks();

        taskInput.value = "";
    });

    function createTaskElement(text) {
        const li = document.createElement("li");
        li.innerHTML = `${text} <button class="delete-btn">Удалить</button>`;
        
        li.querySelector(".delete-btn").addEventListener("click", function () {
            li.remove();
            saveTasks();
        });

        return li;
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#taskList li").forEach(li => {
            tasks.push(li.innerText.replace(" Удалить", ""));
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => {
            const li = createTaskElement(task);
            taskList.appendChild(li);
        });
    }
});
