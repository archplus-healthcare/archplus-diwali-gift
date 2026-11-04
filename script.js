
const whatsappNumber = "919723891128";

const message =
  "I received my Diwali Gift from ArchPlus Healthcare. Thank you!";

document.getElementById("whatsappBtn").addEventListener("click", function () {

  const whatsappURL =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");

});
