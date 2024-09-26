const mobile = document.getElementById("bar");
const nav = document.getElementById("nav");
const close = document.getElementById("close");

if (mobile) {
  mobile.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
