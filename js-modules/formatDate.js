// Format the current date with day and month
export default function formatDate() {
   const today = new Date();
   let day = today.getUTCDate();
   let month = today.getUTCMonth() + 1;
   
   if (month < 10) {
      month = "0" + month;
   }

   if (day < 10) {
      day = "0" + day;
   }

   const formattedDate = `${day}/${month}`;
   return formattedDate;
}