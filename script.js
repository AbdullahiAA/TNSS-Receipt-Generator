const form = document.querySelector("form");

const receipt = document.querySelector(".app__receipt");
const receiptBody = document.querySelector(".app__receipt--body");

const receiptIDField = document.querySelector(".receiptID");
const transDateField = document.querySelector(".transDate");
const stdNameField = document.querySelector(".stdName");
const classField = document.querySelector(".class");
const amountField = document.querySelector(".amount");
const paymentForField = document.querySelector(".paymentFor");
const PayedByFields = document.querySelectorAll(".PayedBy");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const day = getTime().dayName;
   const date = getTime().date;
   const time = getTime().time;

   const transDate = `${day}, ${date} ${time}`;

   const stdName = e.target.name.value;
   const stdClass = e.target.class.value;
   const amount = e.target.amount.value;
   const purpose = e.target.purpose.value;
   const depositor = e.target.depositor.value;

   //    Hide the form...
   form.style.display = "none";

   //    Fill the receipt with the data
   receiptIDField.innerHTML = generateID();
   transDateField.innerHTML = transDate;
   stdNameField.innerHTML = stdName;
   classField.innerHTML = stdClass;
   amountField.innerHTML = amount;
   paymentForField.innerHTML = purpose;
   PayedByFields[0].innerHTML = depositor;
   PayedByFields[1].innerHTML = depositor;

   //   Show the receipt...
   receipt.style.display = "block";

   //    Reset the form fields...
   e.target.name.value = "";
   e.target.class.value = "";
   e.target.amount.value = "";
   e.target.purpose.value = "School Fee";
   e.target.depositor.value = "";
});

function refreshPage() {
   //    Show the form
   form.style.display = "block";

   //    Hide the Receipt
   receipt.style.display = "none";
}

function getTime() {
   let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

   let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
   ];

   let date = new Date();

   let dayName = days[date.getDay()];

   let day = date.getDate();
   let month = months[date.getMonth()];
   let year = date.getFullYear();

   let hour = date.getHours();
   let __hour = hour;
   if (hour > 12) __hour = hour - 12;

   let minute = date.getMinutes();
   if (minute < 10) minute = "0" + minute;

   let meridian = "am";
   if (hour >= 12) meridian = "pm";

   return {
      dayName: dayName,
      date: `${day} ${month} ${year}`,
      time: `${__hour}:${minute}${meridian}`,
   };
}

function generateID() {
   const date = new Date();

   const day = date.getDate();
   const month = date.getMonth();

   const transCount = getTransCount();

   const ID = "SR" + day + `${month + 1}` + transCount;

   return ID;
}

function getTransCount() {
   let transCount = localStorage.getItem("transCount") || 0;

   transCount++;

   localStorage.setItem("transCount", transCount);

   if (transCount < 10) {
      transCount = "00" + transCount;
   } else if (transCount < 100) {
      transCount = "0" + transCount;
   }

   return transCount;
}
