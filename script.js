let sketch_width = 500;
let sketch_height = 450;
let size = 16;
let elements;
const sketchbox = document.querySelector(".sketch-box")
function creatGrid(dimension) {
    let container;
    let square;
    for(let row = 0; row < dimension; row++ ){
        // console.log('Container!')
        container = document.createElement('div')
        container.classList.add('container')
        for(let column = 0; column < dimension; column++) {
            // console.log("div!")
            square = document.createElement('div')
            square.classList.add('square')
            let calcHeight = sketch_height/dimension
            let calcWidth = sketch_width/ dimension
            square.style.cssText = `outline: 1px    solid black;
                                    height:${calcHeight}px;
                                    width: ${calcWidth}px;`
            container.appendChild(square)
        }
        sketchbox.appendChild(container)
    }
}
function removeAllChildNodes() {
   while(sketchbox.firstChild) {
    sketchbox.removeChild(sketchbox.firstChild)
   }
}

function toggleSize() {
    const form = document.querySelector('form')
    form.addEventListener('submit', function (e) {
        removeAllChildNodes()
        e.preventDefault()
        size = form.elements['t'].value
        creatGrid(size)
        useEraser(size)
        sketch(size)
        hover(size)
    })
}
function hover(dimension) {
    const squares = document.querySelectorAll('.square')
    console.log(squares)
    let calcHeight = sketch_height/dimension
    let calcWidth = sketch_width/ dimension
    squares.forEach(square=> {
        square.addEventListener('mouseover', function(e) {

            e.target.style.cssText = `outline: 1px solid black;height:${calcHeight}px;
            width: ${calcWidth}px;background-color:orange;`


        })
    })
}

function eraser(dimension) {
    const squares = document.querySelectorAll('.square')
    let calcHeight = sketch_height/dimension
    let calcWidth = sketch_width/ dimension
    squares.forEach(square => {
        square.addEventListener('mouseover', function(e) {
            e.target.style.cssText = `outline: 1px solid black;height:${calcHeight}px;
            width: ${calcWidth}px;background-color:white;`
        })
    })
    console.log('eraser')
}

function useEraser(dimension) {
    let button = document.querySelector('.erase')
    button.addEventListener('click', function(e) {
        eraser(dimension)
    })
}

function sketch(dimension) {
    let button = document.querySelector('.draw')
    
    button.addEventListener('click', function(e) {
        hover(dimension)
    })
}
toggleSize()


