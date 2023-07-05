window.addEventListener('DOMContentLoaded', function () {
    document.body.style.overflow = 'hidden';

    setTimeout(function () {
        document.body.style.overflow = 'auto';
    }, 7000);
});

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

const tlx = new gsap.timeline()

const tlx1 = TweenMax.to('.abiz-head', 0.5, {
    opacity: 0,
    transformOrigin: '-115%',
    scale: 2,
    yPercent: -5,
    ease: Power2.easeInOut,
    scrollTrigger: {
        trigger: '#contents',
        scrub: true
    }
})

const tlx2 = TweenMax.to('.abiz-r-arm,.abiz-l-arm', 0.5, {
    opacity: 0,
    transformOrigin: '-200%',
    scale: 2,
    yPercent: -5,
    ease: Power2.easeInOut,
    scrollTrigger: {
        trigger: '#contents',
        scrub: true
    }
})

const tlx3 = TweenMax.to('.smart-smart', 0.5, {
    autoAlpha: 0,
    rotationZ: -500,
    ease: Power1.easeOut,
    scrollTrigger: {
        trigger: '#contents',
        scrub: true
    }
})

const tlx4 = TweenMax.to('.open-open', 0.5, {
    autoAlpha: 0,
    rotationZ: 500,
    ease: Power1.easeOut,
    scrollTrigger: {
        trigger: '#contents',
        scrub: true
    }
})

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const tl0 = gsap.timeline({
    scrollTrigger: {
        trigger: '#c2_1 .img',
        scrub: true
    }
})
    .to('#c2_1 .img', {
        stagger: .2,
        y: -350,
        scrub: true
    })

tlx.add([tl0, tlx1, tlx2, tlx3, tlx4])

const controller = new ScrollMagic.Controller()

const scene1 = new ScrollMagic.Scene({
    triggerElement: ".header",
    duration: "50%",
    triggerHook: 0,
})

scene1.setTween(tlx)
controller.addScene(scene1)


var et = $("#et")
var astro = $('#astro')

// Animate our properties in.boxidually
tweenProperty([et, astro], "scale", 0.5, 0.8);
tweenProperty(et, "x", 0, 150);
tweenProperty(et, "y", 0, 150);
tweenProperty(et, "opacity", 0.1, 0.5);

tweenProperty(astro, "scale", 0.2, 0.8);
tweenProperty(astro, "x", 0, 50);
tweenProperty(astro, "y", 0, 80);
tweenProperty(astro, "opacity", 0.5, 1);

function tweenProperty(target, prop, min, max) {
    TweenLite.to(target, 3, {
        [prop]: random(min, max),
        ease: Sine.easeInOut,
        onComplete: tweenProperty,
        onCompleteParams: [target, prop, min, max],
    });
}

// ==================================================================
function random(min, max) {
    if (max == null) { max = min; min = 0; }
    return Math.random() * (max - min) + min;
}

const cards = gsap.utils.toArray(".item");
const spacer = 20;
const minScale = 0.8;

const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

cards.forEach((card, index) => {

    const scaleVal = distributor(index, cards[index], cards);

    const tween = gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: `top top`,
            scrub: true,
            // markers: true,
            invalidateOnRefresh: true
        },
        ease: "none",
        scale: scaleVal
    });

    ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top`,
        endTrigger: '#end',
        end: `bottom top+=${200 + (cards.length * spacer)}`,
        pin: true,
        pinSpacing: false,
        // markers: true,
        id: 'pin',
        invalidateOnRefresh: true,
    });
});
