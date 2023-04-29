const droid = document.querySelector(".droid");
const body = document.body;
const droidBody = document.querySelector(".droid-body")

function moveDroid(event) {
  const mouseX = event.clientX;
  const distance = mouseX - droid.offsetLeft;

  if (distance > 0) {
    droid.style.left = droid.offsetLeft + 5 + "px";
    droid.style.transform = "scaleX(1)";
    droidBody.classList.add('rotate');
    
  } else if (distance < 0) {
    droid.style.left = droid.offsetLeft - 5 + "px";
    droid.style.transform = "scaleX(-1)";
  }
}

body.addEventListener("mousemove", moveDroid);
