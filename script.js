const btn = document.querySelector("button");
var color = ["#1189AB", "#0CC4F7", "#F72568", "#F7E93E", "#880931"];
let i = 0;
btn.addEventListener("click", () => {
  i = i < color.length ? ++i : 0;
  document.querySelector("body").style.background = color[i];
});
