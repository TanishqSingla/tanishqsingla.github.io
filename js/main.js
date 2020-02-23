window.addEventListener("load", function() {
  let intro = document.getElementById("intro");
  intro.style.opacity = "1";
  intro.style.transform = "translate(0)";

  this.setTimeout(() => {
    let figure = document.querySelector("figure");
    figure.style.opacity = "1";
    figure.style.translate = "translate(0)";
  }, 1000);
});
