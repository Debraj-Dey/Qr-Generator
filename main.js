let imageContainer = document.getElementById('imgContainer');
let imgSrc = document.getElementById('imgSrc');
let myinput = document.getElementById('myinput');
let messageElement = document.getElementById('message');

function generateQr() {
    let inputValue = myinput.value.trim();

    //If input is not empty
    if (inputValue !== "") {
        imgSrc.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputValue;

        imageContainer.classList.add("max-h-96", "border", "border-solid");//Adding the styling

        // Display the message
        messageElement.classList.remove("hidden");
    } else {
        alert("You need to write something first !!!");

        // Hide the message if no QR code is generated
        messageElement.classList.add("hidden");
    }
}
