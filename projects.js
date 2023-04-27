// const sable = document.querySelector('.sable');
// const body = document.body;

// function movesable(event) {
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;
//   const distanceX = mouseX - sable.offsetLeft;
//   const distanceY = mouseY - sable.offsetTop;

//   if (distanceX > 0) {
//     sable.style.left = sable.offsetLeft + 20 + 'px';
//     sable.style.transform = 'scaleX(1)';
//   }
//   else if (distanceX < 0) {
//     sable.style.left = sable.offsetLeft - 20 + 'px';
//     sable.style.transform = 'scaleX(1)';
//   }

//   if (distanceY > 0) {
//     sable.style.top = sable.offsetTop + 20 + 'px';
//   }
//   else if (distanceY < 0) {
//     sable.style.top = sable.offsetTop - 20 + 'px';
//   }
// }

// body.addEventListener('mousemove', movesable);