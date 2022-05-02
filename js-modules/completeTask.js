export default function completeTask(item) {
   const text = item.querySelector(".item__text");
   text.classList.toggle("item__text--line-through");
}

