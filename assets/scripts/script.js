function handMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handMouseEnter);
    card.addEventListener('mouseleave', handMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransforme = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  
  carousel.style.transform = newTransforme;
}