var btn = document.querySelector('#clickBtn')
var h1 = document.querySelector('h1')

document.body.style.textAlign = 'center'


btn.addEventListener('click', function () {
    let rand1 = generateRandomColor()
    let rand2 = generateRandomColor()
    let rand3 =  generateRandomColor()
    document.body.style.backgroundColor = `rgb(${rand1} , ${rand2} ,${rand3})`
    h1.innerText = `rgb(${rand1} , ${rand2} ,${rand3})`
})


function generateRandomColor(){
    return Math.floor((Math.random() * 255))
}