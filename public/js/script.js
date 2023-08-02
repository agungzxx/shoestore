const navlist = document.querySelector("#navlist");
const hamburger = document.querySelector("#hamburger");
const closes = document.querySelector("#close");

hamburger.addEventListener("click", function () {
  navlist.classList.remove("hidden");
  hamburger.classList.add("hamburger_ilang");
  hamburger.classList.remove("hamburger_aktif");
  hamburger.classList.add("hidden");
  closes.classList.remove("close_ilang");
  closes.classList.remove("hidden");
  closes.classList.add("close_aktif");
});

closes.addEventListener("click", function () {
  navlist.classList.add("hidden");
  closes.classList.remove("close-aktif");
  closes.classList.add("close_ilang");
  closes.classList.add("hidden");
  hamburger.classList.remove("hamburger_ilang");
  hamburger.classList.remove("hidden");
  hamburger.classList.add("hamburger_aktif");
});
