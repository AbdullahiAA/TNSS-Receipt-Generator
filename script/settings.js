updateSessionField();

const settingsForm = document.querySelector(".app__settingsForm");

settingsForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const tnssTerm = e.target.tnssTerm.value;
   const tnssSession = e.target.tnssSession.value;
   const madrasahSemester = e.target.madrasahSemester.value;
   const madrasahSession = e.target.madrasahSession.value;

   const term = {
      tnssTerm: tnssTerm,
      madrasahSemester: madrasahSemester,
   };

   const session = {
      tnssSession: tnssSession,
      madrasahSession: madrasahSession,
   };

   // Saving the data to the localStorage
   localStorage.setItem("term", JSON.stringify(term));
   localStorage.setItem("session", JSON.stringify(session));

   // Show success msg on settings form
   document.querySelector(".app__settingsForm .success").innerHTML =
      'Settings updated successfully! Click on the "+" icon at the top to add a new transaction.';

   // Delete error msg on settings form
   document.querySelector(".app__settingsForm .error").innerHTML = "";

   // scroll To the Top
   window.scrollTo(0, 0);
});

function updateSessionField() {
   const sessionFields = document.querySelectorAll(".session");

   const date = new Date();
   const currentYear = date.getFullYear();

   const firstOption = currentYear - 1 + "/" + currentYear;
   const secondOption = currentYear + "/" + (currentYear + 1);
   const thirdOption = currentYear + 1 + "/" + (currentYear + 2);

   sessionFields.forEach((sessionField) => {
      //   Setting the first option to "Choose Session"
      sessionField.innerHTML =
         '<option value="" disabled hidden selected>Choose Session</option>';

      // Setting the second option on the list
      let newOption = document.createElement("OPTION");
      let textNode = document.createTextNode(firstOption);
      newOption.appendChild(textNode);

      sessionField.append(newOption);

      // Setting the third option on the list
      newOption = document.createElement("OPTION");
      textNode = document.createTextNode(secondOption);
      newOption.appendChild(textNode);

      sessionField.append(newOption);

      // Setting the fourth option on the list
      newOption = document.createElement("OPTION");
      textNode = document.createTextNode(thirdOption);
      newOption.appendChild(textNode);

      sessionField.append(newOption);
   });
}
