const droid = document.querySelector(".droid");
const body = document.body;
const droidBody = document.querySelector(".droid-body");
const droidEyes = document.querySelector(".eyes");

let timeoutId = null;
let currentRotation = '';

function moveDroid(event) {
  const mouseX = event.clientX;
  const distance = mouseX - droid.offsetLeft;

  if (distance > 0) {
    droid.style.left = droid.offsetLeft + 5 + "px";
    droidBody.style.transform = "scaleX(-1)";
    droidBody.classList.add('rotate-right');
    droidBody.classList.remove('rotate-left');
    droidEyes.style.transform = "scaleX(-1)"
    currentRotation = 'rotate-right';
    
  } else if (distance < 0) {
    droid.style.left = droid.offsetLeft - 5 + "px";
    droidBody.style.transform = "scaleX(1)";
    droidEyes.style.transform = "scaleX(1)";
    droidBody.classList.remove('rotate-right');
    droidBody.classList.add('rotate-left');
    currentRotation = 'rotate-left';
  }
  
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    droidBody.classList.remove('rotate-right');
    droidBody.classList.remove('rotate-left');
    droidBody.classList.add(currentRotation);
  }, 100);
}

body.addEventListener("mousemove", moveDroid);