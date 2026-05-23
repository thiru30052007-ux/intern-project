const bookingForm =
document.getElementById("bookingForm");

const message =
document.getElementById("message");


bookingForm.addEventListener("submit",
function(event){

    event.preventDefault();

    const userName =
    document.getElementById("name").value;

    const sport =
    document.getElementById("sport").value;


    message.innerHTML =
    userName +
    ", your " +
    sport +
    " slot has been booked successfully!";


    bookingForm.reset();

});