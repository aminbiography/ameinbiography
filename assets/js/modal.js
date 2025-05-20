/* 
//////////////////////////////////////////////////////
Final Author Start
//////////////////////////////////////////////////////
Final Author @ Mohammad Aminul Islam
//////////////////////////////////////////////////////
Final Author End
//////////////////////////////////////////////////////
*/

/* Modal For Book Appointment Start */
const section = document.querySelector("section"),
  overlay = document.querySelector(".overlay"),
  showBtn = document.querySelector("#show-modal"),
  closeBtn = document.querySelector("#close-btn");
showBtn.addEventListener("click", () => section.classList.add("active"));
overlay.addEventListener("click", () => section.classList.remove("active"));
closeBtn.addEventListener("click", () => section.classList.remove("active"));
/* Modal For Book Appointment End */

/* Modal For Coffee With Me Start */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/* Modal For Coffee With Me End */

/* Modal Functinality */
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "letterbox.amin@gmail.com",
    Password: "password",
    To: "mailing.amin@gmail.com",
    From: document.getElementById("email").value,
    Subject: "subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
