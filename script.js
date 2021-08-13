const form = document.querySelector("form");
const receipt = document.querySelector(".app__receipt");
const refreshBtnn = document.querySelector(".refreshBtn");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   var s_name = e.target.name.value;
   const s_class = e.target.class.value;
   const amount = e.target.amount.value;

   console.log("Name", s_name);
   console.log("Class", s_class);
   console.log("Amount", amount);

   //    Hide the form
   form.style.display = "none";

   const printBtn =
      "<input type='button' value='Print' class='btn printBtn' onclick='window.print()' />";
   const refreshBtn =
      "<input type='button' value='Refresh' class='btn refreshBtn' onclick='refreshPage()' />";

   //    Show the Receipt
   receipt.innerHTML =
      "<h6>Name: " +
      s_name +
      "</h6><h6>Class: " +
      s_class +
      "</h6>" +
      "<h6>Amount Paid: " +
      amount +
      "</h6>" +
      printBtn +
      refreshBtn;

   receipt.style.display = "block";

   e.target.name.value = "";
   e.target.class.value = "";
   e.target.amount.value = "";
});

function refreshPage() {
   //    Show the form
   form.style.display = "block";

   //    Hide the Receipt
   receipt.style.display = "none";
}
