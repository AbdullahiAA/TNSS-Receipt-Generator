const registerForm = document.querySelector(".app__signupForm");

registerForm.addEventListener("submit", (e) => {
   e.preventDefault();

   //    Get the data from the form...
   const name = e.target.u_name.value;
   const type = e.target.type.value;
   const psw = e.target.psw.value;
   const c_psw = e.target.c_psw.value;

   if (psw !== c_psw) {
      showRegisterError("Your password does not match!");

      //   Reset the password fields
      e.target.psw.value = "";
      e.target.c_psw.value = "";
   } else {
      //   Save the details
      localStorage.setItem("name", name);
      localStorage.setItem("userType", type);
      localStorage.setItem("password", psw);

      //   Reset the form
      e.target.u_name.value = "";
      e.target.type.value = "";
      e.target.psw.value = "";
      e.target.c_psw.value = "";

      //   Hide Registration Form
      document.querySelector(".app__signupForm").style.display = "none";

      // Show the LogIn Form
      document.querySelector(".app__loginForm").style.display = "block";

      //   Show success msg on Login Form
      document.querySelector(".app__loginForm .success").innerHTML =
         "Your account has been registered, please login!";
   }
});

function showRegisterError(error) {
   const errorField = document.querySelector(".app__signupForm .error");

   errorField.innerHTML = error;
}
