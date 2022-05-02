// Checks if enter key is pressed
export default function verifyKey(event) {
   if (event.code === "Enter" || event.code === "NumpadEnter") {
      return true;
   } else {
      return false;
   }
}