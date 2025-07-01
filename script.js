
function showPayment(product, price) {
  document.getElementById("productTitle").innerText = product;
  document.getElementById("productPrice").innerText = "Harga: " + price;
  document.getElementById("paymentPopup").classList.remove("hidden");
}
function closePopup() {
  document.getElementById("paymentPopup").classList.add("hidden");
}
function copyText(el) {
  navigator.clipboard.writeText(el.innerText);
  alert("Disalin: " + el.innerText);
}
function kirim(metode) {
  const msg = encodeURIComponent("Halo admin, saya sudah transfer untuk " +
    document.getElementById("productTitle").innerText);
  if (metode === 'wa') {
    window.open(`https://wa.me/62895404625552?text=${msg}`, "_blank");
  } else {
    window.open(`https://t.me/DIGIEMART?start=${msg}`, "_blank");
  }
}
