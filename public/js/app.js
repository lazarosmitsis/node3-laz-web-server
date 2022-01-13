//console.log('Client side javascript file is loaded!')

// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//   //          console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=Athens,Greece').then((response)=>{
//     response.json().then((data)=>{
//             if (data.error) {
//                 console.log(data.error)
//             } else {
//                 console.log('location: '+data.location)
//                 console.log('forecast: '+data.forecast.weather_description)
//             }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'from javascript'

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const location = search.value;
    console.log(location)

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if (data.error) {
                console.log(data.error)
                messageOne.textContent = data.error
            } else {
                console.log('location: '+data.location)
                console.log('forecast: '+data.forecast.weather_description)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast.weather_description
            }
        })
    })

})