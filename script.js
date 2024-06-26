const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

const header = document.querySelector(".navigation");
header.addEventListener("click", function () {
  header.classList.toggle("open");
});
