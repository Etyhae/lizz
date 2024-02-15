document.addEventListener("DOMContentLoaded", () => {
  const leftRise = document.querySelector(".leftRise");
  const bottomRise = document.querySelector(".bottomRise");

  setTimeout(() => {
    leftRise.classList.remove("leftRise");
    bottomRise.classList.remove("bottomRise");
  }, 300);
});
