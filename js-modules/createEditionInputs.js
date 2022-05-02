export default function createEditionInputs(toDoListWindow) {   
   const editionInputsDiv = document.createElement("div");

   editionInputsDiv.classList.add("task-editor");
   editionInputsDiv.innerHTML = `<input type="text" class="task-editor__text">
   <input type="button" value="Edit task" class="task-editor__button button">`

   toDoListWindow.appendChild(editionInputsDiv); 
}