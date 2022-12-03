var fileInput = document.getElementById('file-input');
var originalImage = document.getElementById('original-image');
var grayscaleImage = document.getElementById('grayscale-image');
var downloadButton = document.getElementById('download-button');

fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];

    if (!file.type.match('image.*')) {
        alert("Please select an image file to convert to grayscale.");
        return;
    }

    originalImage.src = URL.createObjectURL(file);

    var splitedName = file.name.split('.');
    var fileExtension = splitedName.pop();
    var fileName = splitedName.join('');

    downloadButton.download = `${fileName}_grayscale.${fileExtension}`;
});

originalImage.onload = function () {
    var grayscaleBase64 = grayscale(originalImage);
    grayscaleImage.src = grayscaleBase64;
    downloadButton.href = grayscaleBase64;
    downloadButton.style.display = 'block';
};

function grayscale(image) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    ctx.drawImage(image, 0, 0);

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < imageData.data.length; i += 4) {
        var avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
        imageData.data[i] = avg;
        imageData.data[i + 1] = avg;
        imageData.data[i + 2] = avg;
    }

    ctx.putImageData(imageData, 0, 0);

    return canvas.toDataURL();
}

