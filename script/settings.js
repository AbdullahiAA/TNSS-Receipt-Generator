const settingsBtn = document.querySelector(".settingsBtn");

settingsBtn.addEventListener("click", () => {
   const term = localStorage.getItem("term");

   // Hide the transaction form
   document.querySelector(".app__transForm").style.display = "none";

   // Hide the receipt
   document.querySelector(".app__receipt").style.display = "none";

   // Show the Settings form
   document.querySelector(".app__settingsForm").style.display = "block";
});

const transBtn = document.querySelector(".transBtn");

transBtn.addEventListener("click", () => {
   // Show the transaction form
   document.querySelector(".app__transForm").style.display = "block";

   // Hide the receipt
   document.querySelector(".app__receipt").style.display = "none";

   // Hide the Settings form
   document.querySelector(".app__settingsForm").style.display = "none";
});
