import completeTask from "./completeTask.js";
import editTask from "./editTask.js";
import deleteTask from "./deleteTask.js";
import verifyKey from "./verifyKey.js";

const toDoList = document.querySelector(".items");

// Add new task on the list
export default function addTask(text) {
   const listItem = document.createElement("li");
   listItem.classList.add("item");
   listItem.innerHTML = `<span class="item__text" data-text>${text}</span>
   <div class="item__icons">
      <span data-check class="item__icon item__icon--check" tabindex="0" aria-label="Mark as completed"></span>
      <span data-pencil class="item__icon item__icon--pencil" tabindex="0" aria-label="Edit task"></span>
      <span data-trash class="item__icon item__icon--trash" tabindex="0" aria-label="Delete task"></span>
   </div>`;
   toDoList.appendChild(listItem);

   // Complete task event listeners
   const checkIcon = listItem.querySelector("[data-check");
   checkIcon.addEventListener("click", ()=> {
      completeTask(listItem);
   })
   checkIcon.addEventListener("keydown", (event)=> {
      const enterKeyWasPressed = verifyKey(event);
      if (enterKeyWasPressed) {completeTask(listItem);}
   })

   // Edit task event listeners
   const editIcon = listItem.querySelector("[data-pencil]");
   editIcon.addEventListener("click", ()=> {
      editTask(listItem)
   });
   editIcon.addEventListener("keydown", (event)=> {
      const enterKeyWasPressed = verifyKey(event);
      if (enterKeyWasPressed) {editTask(listItem);}
   });

   // Delete task event listeners
   const deleteIcon = listItem.querySelector("[data-trash]");
   deleteIcon.addEventListener("click", ()=> {
      deleteTask(listItem);
   })
   deleteIcon.addEventListener("keydown", (event)=> {
      const enterKeyWasPressed = verifyKey(event);
      if (enterKeyWasPressed) {deleteTask(listItem)};
   })
}