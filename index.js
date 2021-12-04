const timeline = document.getElementById('timeline')

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        timeline.className += "slide-top"
        timeline.style.cssText = "display:block"
    }, 2000)

    setTimeout(() => {
        circle.style.cssText = "display:block"
        circle.className += "pulsate-fwd"
    }, 3000)

})
