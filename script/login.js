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

      // Show the header btn
      document.querySelector(".app__headerBtns").style.display = "inline-block";

      // Login for the first time
      //    ? go to settings page and update the term and the session
      //    : show the transaction form...
      const term = localStorage.getItem("term");

      if (term) {
         // Show the transaction form
         document.querySelector(".app__transForm").style.display = "block";
      } else {
         // Show the settings form
         document.querySelector(".app__settingsForm").style.display = "block";

         // Show success msg on settings form
         document.querySelector(".app__settingsForm .success").innerHTML =
            "Logged in successfully, please update the term, the semester and the session!";

         // Show error msg on settings form
         document.querySelector(".app__settingsForm .error").innerHTML =
            "NOTE: This should be updated at the beginning of every term/semester.";

         // TODO: Seperate settings box for madrasah and school
      }
   }

   //   Delete success msg if there is any
   document.querySelector(".app__loginForm .success").innerHTML = "";
});

function showLoginError(error) {
   const errorField = document.querySelector(".app__loginForm .error");

   errorField.innerHTML = error;
}
