// 002 flipping card
document.getElementById("flip-card").addEventListener("click", function () {
  const cardFront = document.querySelector('.front');
  const cardBack = document.querySelector('.back');
  
  if (cardFront.style.transform === 'rotateY(-180deg)') {
    cardFront.style.transform = 'rotateY(0)';
    cardBack.style.transform = 'rotateY(180deg)';
  } else {
    cardFront.style.transform = 'rotateY(-180deg)';
    cardBack.style.transform = 'rotateY(0)';
  }
});