let imgbox = document.getElementById("imgbox");
let qrImg  = document.getElementById("qrImg");
let qrText = document.getElementById("QRtext");

function QRgenerator(){
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgbox.classList.add("showimg");
};