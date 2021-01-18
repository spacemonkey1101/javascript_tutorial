// we can create a new element using tag
//var img = document.createElement('img')

//selecting an element using css selector
let btnStart = document.querySelector('#buttonStart')
let btnEnd = document.querySelector('#buttonEnd')
let imageFrame = document.querySelector('img')
//getting element by id
let container = document.querySelector('#container')

//styling the container
container.style.border=  '3px solid #73AD21'



//get the name of images
let imageList= ['image1.jpg','image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',  
                'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg' ]

btnStart.addEventListener('click' , startSlideShow)
btnEnd.addEventListener('click',endSlideShow)

var endSlideShowId = -1
var rand = 1

function startSlideShow(){
    console.log('clicked start')
    //genarates random numbers from 1 to 10
    rand = Math.floor(Math.random() * 10) + 1
    //calling setInterval(some_func, time) which returns an id
    //which would be used to stop the slide show
    endSlideShowId = setInterval(slideImage , 5000)
    
}

function endSlideShow(){
    if(endSlideShowId === -1) {
        alert("Please Start the show and then click End")
    } else {
        //ending the setInterval function
        //ending the slide show
        clearInterval(endSlideShowId)
        endSlideShowId = -1
    }

}

function slideImage(){
    //we can setting the src of the newly created image
    //img.src = `images/${imageList[rand]}`
    imageFrame.src = `images/${imageList[rand]}`
    
    //increasing the variable of image index
    rand = (rand + 1) % imageList.length 
    // we can adding the image element into the body
    //document.body.appendChild(img)
}