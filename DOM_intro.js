/*
DOM enables us to interact with a webpage through JS.

HTML + CSS ---> JS objcts.

The elements form a tree of HTML elements with a special node called Document

What is a Document?

Document gives us the whole picture of the HTML structure. 
Document is the point of entry into the world of DOM.
*/

document
console.dir(document)

//Selecting a element
var element1 = document.getElementById("some_id") // returns an object

//selecting multiple elements
//returns a list of objects
var element2 = document.getElementsByClassName('some_class')
var element3 = document.getElementsByTagName('img')

//better way of selecting elements
//use css styled selector

//querySelector -- returns only the first match
document.querySelector('#id')
document.querySelector('.class')
document.querySelector('img')
document.querySelector('img:nth-of-type(2)')
document.querySelector('p a') // a nested in p
var checkbox = document.querySelector("input[type='checkbox']") // type = checkbox in a input tag

//querySelectorAll -- returns all the match in a collection
document.querySelectorAll('#id')
document.querySelectorAll('.class')

//innerText content inside a tag
document.querySelector('p').innerText // content inside p tag

document.querySelector('p').innerText = 'lolol' //set text

document.querySelector('p').textContent // all text as it is 
//inner text is sensitive in displaying text unlike textContent

//innerHTML
document.querySelector('p').innerHTML // shows the HTML markup
document.querySelector('p').innerHTML = '<i> Hello</i> <em> There </em>'

document.querySelector('p').innerHTML += 'New HTML code'

//attributes
document.querySelector('a').id
document.querySelector('a').href
document.querySelector('a').title
document.querySelector('a').getAttribute('title')

document.querySelector('a').setAttribute('href','https://www.google.com')

//manipulating styles
document.querySelector('h1').style //css properties
document.querySelector('h1').style.color = "green"
document.querySelector('h1').style.border = '2px solid blue'
document.querySelector('img').style.borderRadius = '50%'


//getting the actual properties
window.getComputedStyle('h1').fontSize
window.getComputedStyle('h1').color
window.getComputedStyle('h1').margin

//manipulating css classes
var h2 = document.querySelector('h2')
h2.class = 'purple' 
h2.class = 'border'

h2.class = 'purple border'

//adding class
h2.classList.add('purple')
h2.classList.add('border')

//remove class
h2.classList.remove('purple')

//check if its present
h2.classList.contains('border')

//toggle between 2 styles
h2.classList.toggle('purple')

//parent of the bold element
document.querySelector('b').parentElement

//children of the bold element
document.querySelector('b').children // returns collection

//sibling of the bold element
document.querySelector('b').nextSibling 
document.querySelector('b').previousSibling

document.querySelector('b').nextElementSibling
document.querySelector('b').previousElementSibling

//create new Element -image
var img = document.createElement('img')
img.src ='give src'

document.body.appendChild(img)

//add text at the end of paragraph
document.querySelector('p').append('new text goes here')

//add text at the begining of paragraph
document.querySelector('p').prepend('new text goes here')

//removeChild
//first get the parent and then call remove child on it with the element to be removed
var removed = document.querySelector('li')
var parent = document.querySelector('li').parentElement
parent.removeChild(removed)

//better way
removed.remove()







