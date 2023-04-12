const qrCodeDiv = document.getElementById("qrcode");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const link = document.getElementById("link").value;
  qrCodeDiv.innerHTML = "";
  const qrCode = new QRCode(qrCodeDiv, {
    text: link,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
  let downloadButton = document.getElementById("download");
  if (downloadButton) {
    downloadButton.remove();
  }
  downloadButton = document.createElement("button");
  downloadButton.setAttribute("id", "download");
  downloadButton.innerText = "Download";
  downloadButton.addEventListener("click", function () {
    const links = document.createElement("a");
    links.href = qrCodeDiv.querySelector("img").src;
    links.download = `qr-code.png`;
    links.click();
  });
  document.body.appendChild(downloadButton);
});
