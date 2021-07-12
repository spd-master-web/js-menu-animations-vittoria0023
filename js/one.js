document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const close = document.querySelector('.close');

  hamburger.addEventListener('click', (e) => {
  gsap.to('aside', {x:-50, ease: 'elastic' })
  })


  close.addEventListener('click', () => {
    // animate here when close the menu
  })
})