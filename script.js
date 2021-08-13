const form = document.querySelector("form");
const receipt = document.querySelector(".app__receipt");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   const s_name = e.target.name.value;
   const s_class = e.target.class.value;

   console.log("Name", s_name);
   console.log("Class", s_class);

   //    Hide the form
   form.style.display = "none";

   const printBtn =
      "<input type='button' value='Print' class='btn printBtn' onclick='window.print()' />";

   //    Show the Receipt
   receipt.innerHTML =
      "<h3>" + s_name + "</h3><h3>" + s_class + "</h3>" + printBtn;
});
