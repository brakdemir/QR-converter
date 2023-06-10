function extractURL() {
  var fileInput = document.getElementById('qrCodeFileInput');
  var file = fileInput.files[0];

  var fileReader = new FileReader();
  fileReader.onload = function(event) {
    var image = new Image();
    image.src = event.target.result;

    image.onload = function() {
      var canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      var context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, image.width, image.height);

      var imageData = context.getImageData(0, 0, image.width, image.height);
      var code = jsQR(imageData.data, image.width, image.height);

      if (code && code.data) {
        var resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Extracted URL: ';
        
        var linkElement = document.createElement('a');
        linkElement.href = code.data;
        linkElement.textContent = code.data;
        linkElement.target = '_blank';
        
        resultElement.appendChild(linkElement);
      } else {
        document.getElementById('result').innerHTML = 'No QR code found in the image.';
      }
    };
  };

  fileReader.readAsDataURL(file);
}
