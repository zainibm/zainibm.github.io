var canvas = document.getElementById("bottom");
var ctx = canvas.getContext("2d");
canvas.width = 800, canvas.height = 400;
const cartoon = new Image();
cartoon.src = "data:image/png;base64,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";
ctx.drawImage(cartoon, 0, 0);
cartoon.addEventListener("load", function() {
    ctx.drawImage(cartoon, 0, 0);
    const scannedCartoon = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(scannedCartoon);
    const scannedData = scannedCartoon.data;
    for (let i = 0; i < scannedData.length; i += 4) {
        const total = scannedData[i] + scannedData[i + 1] + scannedData[i + 2];
        const avg = total/3;
        scannedData[i] = avg + 20;
        scannedData[i + 1] = avg + 20;
        scannedData[i + 2] = avg + 100;
    }
    scannedCartoon.data = scannedData;
    ctx.putImageData(scannedCartoon, 0, 0);
})