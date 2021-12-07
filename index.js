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

let webdev = document.getElementById('webdev')

window.addEventListener('resize', () => {
    if (window.innerWidth < 450) {
        webdev.innerHTML = `<span class="title">&dollar;{</span>WebDev<span class="title">}</span>'`
    }
})

let cols = document.querySelector('.cols')
var sum = 0



window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 400) {

        Array.from(cols.children).forEach((col) => {
            console.log(col.style)
        })
    }

    console.log(sum)
})





/*
const path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: -20 },
        { x: 300, y: 10 },
        { x: 320, y: 100 },
        { x: 250, y: -200 },
        { x: 100, y: 100 },
        { x: window.innerWidth, y: 100 }
    ]
}

const path2 = {
    curviness: 1.75,
    autoRotate: true,
    values: [
        { x: 200, y: -20 },
        { x: 300, y: 100 },
        { x: 120, y: 100 },
        { x: 150, y: -200 },
        { x: 300, y: 10 },
        { x: 600, y: 200 },
        { x: window.innerWidth, y: 100 }
    ]
}

const tween = new TimelineLite()

tween.add(
    TweenLite.to(".svg", 1, {
        bezier: path,
        ease: Power1.easeInOut
    }),
    TweenLite.to(".svg2", 1, {
        bezier: path2,
        ease: Power1.easeInOut
    })
)

const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
    triggerElement: '.header',
    duration: 500,
    triggerHook: 0
}).setTween(tween).addTo(controller) */
