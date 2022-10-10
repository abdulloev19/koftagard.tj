let i = 0;
let content = document.querySelector(".content");

window.addEventListener("scroll", scrolling);
function scrolling() {
  if (window.pageYOffset + window.innerHeight > document.body.clientHeight) {
    i = i + 1;
    content.innerHTML += `<div class="container"><img class="keyframe" src='${i}.jpg' alt='${i}'></div>`;

    let image = document.querySelector(".keyframe");
    setTimeout(function () {
      image.classList = "net";
    }, 100);
  }
  if (i == 14) removeEventListener("scroll", scrolling);
}
