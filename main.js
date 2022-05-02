import addTask from "./js-modules/addTask.js";
import formattedDate from "./js-modules/formatDate.js";
import verifyKey from "./js-modules/verifyKey.js";

// HTML Elements
const insertItem = document.querySelector(".insert-item");
const addItemButton = document.querySelector(".add-item");
const dayAndMonth = document.querySelector(".day-month");

// Displaying date dynamically
dayAndMonth.innerText = formattedDate();

// Add task event listeners
addItemButton.addEventListener("click", () => {
   const newTask = insertItem.value;
   addTask(newTask);
   insertItem.value = "";
})
insertItem.addEventListener("keydown", (event)=> {
   const keyWasPressed = verifyKey(event);
   if (keyWasPressed) {
      const newTask = insertItem.value;
      addTask(newTask);
      insertItem.value = "";
   }
})

