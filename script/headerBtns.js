// First Button --> Add Transaction Button

const transBtn = document.querySelector(".transBtn");

transBtn.addEventListener("click", () => {
   const term = localStorage.getItem("term");

   //    Only show the transaction form if the term has been updated

   if (term) {
      // Show the transaction form
      document.querySelector(".app__transForm").style.display = "block";

      // Hide the receipt
      document.querySelector(".app__receipt").style.display = "none";

      // Hide the Settings form
      document.querySelector(".app__settingsForm").style.display = "none";

      // Delete success msg on settings form
      document.querySelector(".app__settingsForm .success").innerHTML = "";
   } else {
      alert("Please update the settings first");
   }
});

// Second Button --> Settings Button

const settingsBtn = document.querySelector(".settingsBtn");

settingsBtn.addEventListener("click", () => {
   // Hide the transaction form
   document.querySelector(".app__transForm").style.display = "none";

   // Hide the receipt
   document.querySelector(".app__receipt").style.display = "none";

   // Show the Settings form
   document.querySelector(".app__settingsForm").style.display = "block";
});

// Third Button --> Logout Button

const logoutBtn = document.querySelector(".logoutBtn");

logoutBtn.addEventListener("click", () => {
   // Log the user out
   localStorage.setItem("isLoggedIn", false);

   // Hide the header btn
   document.querySelector(".app__headerBtns").style.display = "none";

   // Hide the transaction form
   document.querySelector(".app__transForm").style.display = "none";

   // Hide the receipt
   document.querySelector(".app__receipt").style.display = "none";

   // Hide the Settings form
   document.querySelector(".app__settingsForm").style.display = "none";

   // Show the Login form
   document.querySelector(".app__loginForm").style.display = "block";

   //   Delete success msg on loginForm if there is any
   document.querySelector(".app__loginForm .error").innerHTML = "";

   //   Delete error msg on settingsForm if there is any
   document.querySelector(".app__settingsForm .error").innerHTML = "";

   //   Delete success msg on settingsForm if there is any
   document.querySelector(".app__settingsForm .success").innerHTML = "";
});
