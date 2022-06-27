const cards = document.getElementById("cards")

gsap.to(cards, {y: 50, duration: 2, stagger: 0.5})
// gsap.from(cards, {opacity: 0, duration: 2, stagger: 2})

// window.addEventListener('load', initAnim)

// function initAnim(){
    
//     const TLFADE = gsap.timeline();

//     TLFADE
//     .to(cards, {autoAlpha: 1, delay: 0.2})
// }