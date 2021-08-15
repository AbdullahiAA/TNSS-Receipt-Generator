const loginForm = document.querySelector(".app__loginForm");

loginForm.addEventListener("submit", (e) => {
   e.preventDefault();

   //    Get the data from the form...
   const type = e.target.type.value;
   const psw = e.target.psw.value;

   const expectedType = localStorage.getItem("userType");
   const expectedPsw = localStorage.getItem("password");

   if (type !== expectedType || psw !== expectedPsw) {
      showLoginError("Incorrect login details!");

      //   Reset the password fields
      e.target.psw.value = "";
   } else {
      //   Change login status
      localStorage.setItem("isLoggedIn", true);

      //   Reset the form
      e.target.type.value = "";
      e.target.psw.value = "";

      // Hide the LogIn Form
      document.querySelector(".app__loginForm").style.display = "none";

      // Show the transaction form
      document.querySelector(".app__transForm").style.display = "block";

      // Show the logout btn
      document.querySelector(".logoutBtn").style.display = "inline-block";
   }

   //   Delete success msg if there is any
   document.querySelector(".app__loginForm .success").innerHTML = "";
});

function showLoginError(error) {
   const errorField = document.querySelector(".app__loginForm .error");

   errorField.innerHTML = error;
}
