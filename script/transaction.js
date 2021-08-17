const transForm = document.querySelector(".app__transForm");

const receipt = document.querySelector(".app__receipt");

const transCategory = document.getElementsByName("category");
const classOptions = document.getElementById("class");

const schNameField = document.querySelector(".app__receipt--schName");
const receiptIDField = document.querySelector(".receiptID");
const transDateField = document.querySelector(".transDate");
const stdNameField = document.querySelector(".stdName");
const classField = document.querySelector(".class");
const amountField = document.querySelector(".amount");
const paymentForField = document.querySelector(".paymentFor");
const PayedByFields = document.querySelectorAll(".PayedBy");

const userNameField = document.querySelector(".userName");
const userTypeField = document.querySelector(".userType");

const madrasahClasses = [
   "Pre-Nur",
   "NUR 1",
   "NUR 2",
   "PRY 1",
   "PRY 2",
   "PRY 3",
   "PRY 4",
   "JSS 1",
   "JSS 2",
   "JSS 3",
   "SSS 1",
   "SSS 2",
   "SSS 3",
];

const tnssClasses = [
   "Creche",
   "K.G 1",
   "K.G 2",
   "NUR 1",
   "NUR 2",
   "PRY 1",
   "PRY 2",
   "PRY 3",
   "PRY 4",
   "PRY 5",
   "JSS 1",
   "JSS 2",
   "JSS 3",
   "SSS 1",
   "SSS 2",
   "SSS 3",
];

// Handle Transaction Category Change...
transCategory.forEach((category) => {
   category.addEventListener("change", () => {
      const value = category.value;

      handleCategoryChange(value);
   });
});

// Handle Form Submission...
transForm.addEventListener("submit", (e) => {
   e.preventDefault();

   //    Get the transaction date...
   const day = getTime().dayName;
   const date = getTime().date;
   const time = getTime().time;

   const transDate = `${day}, ${date} ${time}`;

   //    Get the data from the form...
   const stdName = e.target.name.value;
   const stdClass = e.target.class.value;
   const amount = e.target.amount.value;
   const purpose = e.target.purpose.value;
   const depositor = e.target.depositor.value;

   let term, session;

   //    Get the user data from localStorage
   const userName = localStorage.getItem("name");
   const userType = localStorage.getItem("userType");

   // Get the term and session from the localStorage based on the selected category...
   transCategory.forEach((category) => {
      if (category.checked) {
         // Get the valu of the selected category
         const value = category.value;

         // Get the term and the session object from the localStorage
         term = localStorage.getItem("term");
         session = localStorage.getItem("session");

         // Parse each of the object for easy accessibility
         term = JSON.parse(term);
         session = JSON.parse(session);

         // Update the term based on the category
         if (value === "The Noble") {
            term = term.tnssTerm;
            session = session.tnssSession;
         } else if (value === "Nujabai") {
            term = term.madrasahSemester;
            session = session.madrasahSession;
         }
      }
   });

   //    Format the amount into Naira...
   const formattedAmount = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
   }).format(amount);

   //    Hide the form...
   transForm.style.display = "none";

   //    Fill the receipt with the data...
   receiptIDField.innerHTML = generateID();
   transDateField.innerHTML = transDate + " (" + term + " - " + session + ")";
   stdNameField.innerHTML = stdName;
   classField.innerHTML = stdClass;
   amountField.innerHTML = formattedAmount;
   paymentForField.innerHTML = purpose;
   PayedByFields[0].innerHTML = depositor;
   PayedByFields[1].innerHTML = depositor;
   userNameField.innerHTML = userName;
   userTypeField.innerHTML = "(" + userType + ")";

   //   Show the receipt...
   receipt.style.display = "block";

   //    Reset the form fields...
   e.target.name.value = "";
   e.target.class.value = "";
   e.target.amount.value = "";
   e.target.purpose.value = "School Fee";
   e.target.depositor.value = "";
   transCategory[0].checked = true;
});

function refreshPage() {
   //    Show the form
   transForm.style.display = "block";

   //    Hide the Receipt
   receipt.style.display = "none";

   handleCategoryChange("The Noble");
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
   if (hour == 0) __hour = 12;

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

function handleCategoryChange(value) {
   let classes = madrasahClasses;

   if (value === "Nujabai") {
      schNameField.innerHTML =
         "معهد النجباء لتعليم اللغة العربية والعلوم الشرعية";
   } else {
      schNameField.innerHTML = "THE NOBLE STANDARD SCHOOLS";
      classes = tnssClasses;
   }

   //   Setting the first option to "Choose Class"
   classOptions.innerHTML =
      '<option value="" disabled hidden selected>Choose Class</option>';

   // Showing the Classes options
   classes.forEach((classItem) => {
      const newOption = document.createElement("OPTION");
      const textNode = document.createTextNode(classItem);
      newOption.appendChild(textNode);

      classOptions.append(newOption);
   });
}
