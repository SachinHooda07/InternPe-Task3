let inputs = document.getElementById("inputTask");
let text = document.querySelector(".text");

function Add() {
  if (inputs.value === "") {
    alert("Please Enter Task");
  } else {
    const newTask = document.createElement("ul");
    text.appendChild(newTask);
    newTask.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    inputs.value = " ";
    newTask.querySelector("i").addEventListener("click", remove);
    function remove() {
      newTask.remove();
    }
  }
}
