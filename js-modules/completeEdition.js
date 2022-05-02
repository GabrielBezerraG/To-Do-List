export default function completeEdition(oldText, newText, item) {
   // HTML Elements
   const insertItem = document.querySelector(".insert-item");
      const addItemButton = document.querySelector(".add-item");
   const editInputsDiv = document.querySelector(".task-editor");

   oldText.innerText = newText.value;

   // Exit edition mode
   editInputsDiv.remove();
   insertItem.classList.remove("invisible");
   addItemButton.classList.remove("invisible");

   // Restore trash
   const trashIcon = item.querySelector("[data-trash]");
   const inactiveTrash = item.querySelector("[data-inactive-trash]");
   trashIcon.classList.remove("invisible");
   inactiveTrash.remove();
}