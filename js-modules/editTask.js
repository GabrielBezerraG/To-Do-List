import completeEdition from "./completeEdition.js";
import createEditionInputs from "./createEditionInputs.js";
import deactivateTrash from "./deactivateTrash.js";
import verifyKey from "./verifyKey.js";

export default function editTask(item) {
   const text = item.querySelector("[data-text]");

   // HTML Elements
   const toDoListWindow = document.querySelector("[data-container]");
   const insertItem = document.querySelector(".insert-item");
   const addItemButton = document.querySelector(".add-item");

   // Checks if edition mode was started on another task
   const repeatedTaskEditor = document.querySelector(".task-editor");
   if (repeatedTaskEditor !== null) {
      item.classList.add("edition-not-allowed");
      setTimeout(()=> {
         item.classList.remove("edition-not-allowed")
      }, 250);
      return;
   }

   createEditionInputs(toDoListWindow);
   deactivateTrash(item);

   // Select editor inputs
   const taskEditorText = document.querySelector(".task-editor__text");
   const taskEditorButton = document.querySelector(".task-editor__button");

   taskEditorText.value = text.innerText;

   // Enter edition mode
   insertItem.classList.add("invisible");
   addItemButton.classList.add("invisible");
  
   // Completing edition event listeners
   taskEditorText.focus();
   taskEditorButton.addEventListener("click", ()=> {
      completeEdition(text, taskEditorText, item);
   })
   taskEditorText.addEventListener("keydown", (event)=> {
      const enterKeyWasPressed = verifyKey(event);
      if (enterKeyWasPressed) {completeEdition(text, taskEditorText, item);}
   })
}