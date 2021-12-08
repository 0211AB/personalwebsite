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


//  SCROLLMAGIC ANIMATONS

const tlx = new TimelineLite()

const tlx1 = TweenMax.to('.abiz-head', 1, {
    opacity:0,
    transformOrigin: '-115%',
    scale: 2,
    yPercent: -5,
    ease: Power2.easeInOut,
}, 'startx+=1')

const tlx2 = TweenMax.to('.abiz-r-arm,.abiz-l-arm', 1, {
    opacity:0,
    transformOrigin: '-200%',
    scale: 2,
    yPercent: -5,
    ease: Power2.easeInOut,
}, 'startx+=1')

const tlx3 = TweenMax.to('.smart-smart', 2.5, {
    autoAlpha: 0,
    rotationZ: -500,
    ease: Power1.easeOut,
},)

const tlx4 = TweenMax.to('.open-open', 2, {
    autoAlpha: 0,
    rotationZ: 500,
    ease: Power1.easeOut,
},)




tlx.addLabel('startx')
tlx.add([tlx1,tlx2,tlx3,tlx4])


const Tweenintro1 = TweenMax.from('#heading', 2, {
    autoAlpha: 0,
    rotationZ: 50,
    transformOrigin: '50% 50% 10%',
    ease: Power1.easeOut,
}, 'enter')

const Tweenintro2 = TweenMax.from('#det-anim', 2, {
    autoAlpha: 0,
    x: -32,
    ease: Power1.easeOut,
}, 'enter+=2.5');

const tl = new TimelineLite()

tl.addLabel('enter', 1)
tl.add(Tweenintro1)
tl.add(Tweenintro2)


const tl2 = new TimelineLite()

const Tween2_1 = TweenMax.to('#heading', 2, {
    autoAlpha: 0,
    transformOrigin: '50% 50% 10%',
    ease: Power1.easeOut,
}, 'start+=1')

const Tween2_2 = TweenMax.to('#det-anim', 2, {
    autoAlpha: 0,
    x: -32,
    ease: Power1.easeOut,
}, 'start+=1.3');

tl2.addLabel('start')
tl2.add(Tween2_1)
tl2.add(Tween2_2)

const controller = new ScrollMagic.Controller()

const scene1 = new ScrollMagic.Scene({
    triggerElement: "#c1",
    duration: "70%",
    triggerHook: 0
}).addIndicators()


const scene2 = new ScrollMagic.Scene({
    triggerElement: "#c2",
    duration: "70%",
    triggerHook: 0
}).addIndicators()

scene1.setTween([tl2, tlx])

controller.addScene(scene1)
controller.addScene(scene2)



/*scene.setTween(tl3)*/
