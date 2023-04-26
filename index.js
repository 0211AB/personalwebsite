const navspan = document.querySelectorAll('.nav-link span')
const navlink = document.querySelectorAll('.nav-link')

const svg1 = document.getElementById('svg1')
const svg2 = document.getElementById('svg2')

const navlogo = document.getElementById('nav-logo')

navlogo.addEventListener('mouseover', () => {

    Array.from(navlogo.children).forEach((span) => {
        span.style.color = "#808080"
    });
})

navlogo.addEventListener('mouseout', () => {
    Array.from(navlogo.children).forEach((span) => {
        span.style.color = "#dbdbdb"
    });
})


navlink.forEach((link) => {
    link.addEventListener('mouseover', () => {
        let spans = link.children

        Array.from(spans).forEach((span) => {
            span.style.display = "inline"
        });
    })
})

navlink.forEach((link) => {
    link.addEventListener('mouseout', () => {
        let spans = link.children

        Array.from(spans).forEach((span) => {
            span.style.display = "none"
        });
    })
})

const circles = document.querySelectorAll('.circle')

setTimeout(() => {

    Array.from(circles).forEach((circle) => {
        circle.classList.add('pulsate-fwd')
        circle.style.display = "block";
    });
}, 3000);
//  SCROLLMAGIC ANIMATONS

const tlx = new TimelineLite()

const tlx1 = TweenMax.to('.abiz-head', 1, {
    opacity: 0,
    transformOrigin: '-115%',
    scale: 2,
    yPercent: -5,
    ease: Power2.easeInOut,
})

const tlx2 = TweenMax.to('.abiz-r-arm,.abiz-l-arm', 1, {
    opacity: 0,
    transformOrigin: '-200%',
    scale: 2,
    yPercent: -5,
    ease: Power2.easeInOut,
})

const tlx3 = TweenMax.to('.smart-smart', 1, {
    autoAlpha: 0,
    rotationZ: -500,
    ease: Power1.easeOut,
})

const tlx4 = TweenMax.to('.open-open', 1, {
    autoAlpha: 0,
    rotationZ: 500,
    ease: Power1.easeOut,
})

tlx.add([tlx1, tlx2, tlx3, tlx4])

const controller = new ScrollMagic.Controller()

const scene1 = new ScrollMagic.Scene({
    triggerElement: ".header",
    duration: "50%",
    triggerHook: 0,
})

scene1.setTween(tlx)
controller.addScene(scene1)


