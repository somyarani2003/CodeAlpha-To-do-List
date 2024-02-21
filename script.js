let inputs = document.getElementById("inp");
let taskList = document.getElementById("taskList");

function addTask() {
    if (inputs.value == "") {
        alert("Please Enter Task")
    } else {
        let newTask = document.createElement("ul");
        newTask.innerHTML = `${inputs.value} <i class="fa-sharp fa-solid fa-trash"></i>`;
        taskList.appendChild(newTask);
        inputs.value = "";
        newTask.querySelector("i").addEventListener("click", remove);

        function remove() {
            newTask.remove()
        }
    }
}