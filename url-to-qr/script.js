var qrCodeInstance;

document.getElementById("urlForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var url = document.getElementById("urlInput").value;
  
  if (url.trim() === "") {
    alert("Please enter a valid URL.");
    return;
  }
  
  if (qrCodeInstance) {
    qrCodeInstance.clear();
    qrCodeInstance.makeCode(url);
  } else {
    
    qrCodeInstance = new QRCode(document.getElementById("qrplace"), {
        text: url,
        width: 256,
        height: 256,
        correctLevel: QRCode.CorrectLevel.H,
      });
      
      var qrCodeContainer = document.getElementById("qrplace");
      qrCodeContainer.style.display = "flex";
      qrCodeContainer.style.justifyContent = "center";
      qrCodeContainer.style.alignItems = "center";
      
      

  }
});
