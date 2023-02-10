

window.addEventListener('DOMContentLoaded', () => {
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    quantity: 3.00,
    backgroundAlpha: 0
  })

  setTimeout(()=> {
    const main = document.querySelector('#main');
    main.style.opacity = 1
    main.style.filter = "blur(0px)"
  }, 2000)
})