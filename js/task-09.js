const changingColor = document.querySelector('.change-color'); 
let valueOfColor = document.querySelector('.color');

changingColor.addEventListener("click", function(event) {
  const colorChange = getRandomHexColor();
  document.body.style.backgroundColor = colorChange;
  valueOfColor.textContent = colorChange;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
