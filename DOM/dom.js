// console.dir(document)

// const title = document.all[13]
// // setTimeout(() => {
// //     title.textContent = 'Add New Items'
// // }, 2000)
// // title.textContent = 'Add New Items'

// title.innerHTML = '<h5>Add New Items</h5>'

// // IDENTIFIER METHODS
// const headerTitle = document.getElementById('header-title')
// console.log(headerTitle)

// const listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems)

// // How to change CSS properties using JS
// setTimeout(() => {
//     for(let i=0; i < listItems.length; i++) {
//         console.log(i)
//         if(i%2 === 0) {
//             // Set the background
//             listItems[i].style.backgroundColor = 'grey'
//         }
//     }
// }, 3000)

// const list = document.querySelector('#items')
// console.log(list)

// const listItems = document.querySelector('.list-group-item')
// console.log(listItems)

// const headingTwo = document.querySelector('h2')
// console.log(headingTwo)

// const list = document.querySelectorAll('#items')
// console.log(list)

// const listItems = document.querySelectorAll('.list-group-item')
// console.log(listItems)

// const headingTwo = document.querySelectorAll('h2')
// console.log(headingTwo)


// EVENTS
// identifier.addEventListner('eventName', () => {...})

// const submitBtn = document.querySelector('#submit-btn')
// submitBtn.addEventListener('click', () => {
//     console.log("Button was clicked")
// })

// const submitBtn = document.querySelector('#submit-btn')
// // submitBtn.addEventListener('click', (event) => {
// //     event.preventDefault()
// //     console.log('Saved data to DB')
// //     console.log(event)
// // })

// const textInput = document.querySelector('#text-input')
// // textInput.addEventListener('keyup', (event) => {
// //     // console.log(event)
// //     console.log(event.target.value)
// // })
// document.querySelector('#submit-btn').addEventListener('click', (e) => {
//     e.preventDefault()

//     console.log( document.querySelector('#text-input').value )
// })

// document.querySelector('#my-container').addEventListener('mouseenter', (e) => {
//     let r = e.offsetX
//     let g = e.offsetY
//     document.querySelector('#my-container').style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`
// })

// document.querySelector('#my-container').addEventListener('mouseleave', (e) => {
//     let r = e.offsetX
//     let g = e.offsetY
//     document.querySelector('#my-container').style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`
// })


// const print = (name, age) => {
//     // return 'My name is ' + name + ' and I am ' + age + ' years old'
//     return `My name is ${name} and I am ${age} years old`
// }

// const res1 = print('John', 20)
// console.log(res1)

// IENTIFY ELTS BASED ON RELATIONSHIP

// // 1. Parent
// console.log( document.querySelector('#heading-two').parentElement.parentElement )

// // 2. Children
// console.log( document.querySelector('#items').children )

// // 3. Siblings
// console.log( document.querySelector('#my-form').previousSibling )   // #text
// console.log( document.querySelector('#my-form').previousElementSibling )

// console.log( document.querySelector('#my-form').nextSibling )   // #text
// console.log( document.querySelector('#my-form').nextElementSibling )

// // create HTML
// const myImg = document.createElement('img')
// myImg.setAttribute('src', 'https://someimage.com')
// console.log(myImg)

// const myDiv = document.createElement('div')
// myDiv.setAttribute('id', 'my-div-id')
// myDiv.setAttribute('class', 'my-div-class')
// myDiv.textContent = 'This is my DIV'

// // Append this div to the UI (HTML)
// document.querySelector('#some-div').appendChild(myDiv)

// console.log(myDiv)


// NOTE TAKING APPLICATION

// Access the text value of the input when the button is clicked
document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const textValue = document.getElementById('text-input').value
    
    // create a li and add the textValue as textContent
    const li = document.createElement('li')
    li.textContent = textValue
    li.setAttribute('class', 'list-group-item')

    // Add the li to the ul
    document.getElementById('items').appendChild(li)
})