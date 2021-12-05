const circle = document.getElementById('circle')

setTimeout(() => {
    circle.classList.add('pulsate-fwd')
    circle.style.display = "block";
}, 3000);


Object.defineProperty(Element.prototype, 'outerHeight', {
    'get': function () {
        var height = this.clientHeight;
        var computedStyle = window.getComputedStyle(this);
        height += parseInt(computedStyle.marginTop, 10);
        height += parseInt(computedStyle.marginBottom, 10);
        height += parseInt(computedStyle.borderTopWidth, 10);
        height += parseInt(computedStyle.borderBottomWidth, 10);
        return height;
    }
});

let navbar = document.querySelector('.header')
let container = document.querySelector('.container')

const totalheight = document.body.clientHeight
const topremoved = navbar.clientHeight + (container.outerHeight - container.clientHeight)

let y = totalheight - topremoved
let y1 = y / 3;
let y2 = 2 * y / 3;

console.log(totalheight)
console.log(topremoved)
console.log(y, y1, y2)

window.addEventListener('scroll', () => {

    console.log(scrollY)
    if (scrollY <= y1)
        console.log("Less than y1")
    else if (scrollY > y1 && scrollY <= y2)
        console.log("Middle")
    else
        console.log("End")
})
