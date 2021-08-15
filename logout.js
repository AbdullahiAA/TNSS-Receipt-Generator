const logoutBtn = document.querySelector(".logoutBtn");

logoutBtn.addEventListener("click", () => {
   localStorage.setItem("isLoggedIn", false);

   // Hide the logout btn
   document.querySelector(".logoutBtn").style.display = "none";

   // Hide the transaction form
   document.querySelector(".app__transForm").style.display = "none";

   // Hide the receipt
   document.querySelector(".app__receipt").style.display = "none";

   // Show the Login form
   document.querySelector(".app__loginForm").style.display = "block";
});
