document.addEventListener("DOMContentLoaded", () => {
  const leftRise = document.querySelectorAll(".leftRise");
  const bottomRise = document.querySelectorAll(".bottomRise");

  setTimeout(() => {
    leftRise.forEach(element => {
      element.classList.remove("leftRise")
    });
    bottomRise.forEach(element => {
      element.classList.remove("bottomRise")
    });
  }, 300);
});
