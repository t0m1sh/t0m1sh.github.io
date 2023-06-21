const newElem = document.getElementById('animation_children')

function value (x, y) {
        return (x + (Math.random() * (y-x)));
    }
let object = ' ';
for (let i = 0; i < 100; i++) {
    let a = value(2, 30);
    object = `<div class="object" style="height: ${a}px; width: ${a}px; background-color: rgba(${value(0,300)},${value(0,300)},${value(0,300)}); animation-duration:${value(10, 30)}s; top: ${value(0, 100)}%; left: ${value(0, 100)}%;"></div>`
    newElem.insertAdjacentHTML('beforeend', object)
}

