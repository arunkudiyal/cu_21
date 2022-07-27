// Step 1 - Create an object of XHR
const xhr = new XMLHttpRequest()
console.log(`Ready State Log 1 - ${xhr.readyState}`)

const source = 'https://api.github.com/users'

// Step 2 - Open the portal of communication b/w client and the server
xhr.open('GET', source, false)
console.log(`Ready State Log 2 - ${xhr.readyState}`)

// Step 3 - Perform a function when your readyState is in transition
xhr.onreadystatechange = () => {
    console.log(`Ready State Log 3 - ${xhr.readyState}`)
    if(xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)
        
        let output = ''

        for(let i=0; i < response.length; i++) {
            output += `<img src="${response[i].avatar_url}" />`
        }
        document.querySelector('#container').innerHTML = output
    }
}

// Step 4 - Send the request
xhr.send()