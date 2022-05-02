export default function deactivateTrash(item) {
   // HTML elements
   const itemIcons = item.querySelector(".item__icons");
   const trashIcon = item.querySelector("[data-trash]");

   
   // Create inactive trash
   trashIcon.classList.add("invisible");
   const inactiveTrash = document.createElement("span");
   inactiveTrash.setAttribute("data-inactive-trash", "");
   inactiveTrash.classList.add("item__icon");
   inactiveTrash.classList.add("item__icon--inactive-trash");
   itemIcons.appendChild(inactiveTrash);
}
