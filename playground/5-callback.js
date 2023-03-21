// Call back functions

// function passed into another function as an argument, which is then invoked
// inside the outer function to complete some kind of routine or action.

// They are not async functions, they are simple function

// However, callbacks are often used to continue code execution after an 
// async operation has completed - these are called asynchronous callbacks.

// -----------------------------------------------------------

// Synchronous call
const names = ['Suyash', 'Alex', 'Dan']
const shortNames = names.filter( (name) => name.length <= 4) 

// Writing our own Callback Function

// Let's say we want to get the current weather data for 4 different locations 
// in our app and we want to make a function for it

// const weatherNow = (callback, lat, long) => {

//     // If our function was just this, nothing async, we could simply return this
//     const currentData = {
//         temp: 30,
//         condition : 'Sunny'
//     }
//     return currentData
// }


// // This will peacefully log { temp: 30, condition: 'Sunny' }, we don't need the
// // callback function
// const data = weatherNow(13.0, 78.0)
// console.log(data)

// // BUT since we will be having an async function request(), let's use a async function
// const weatherNow = (callback, lat, long) => {
//     setTimeout(() => {
//         const currentData = {
//             temp: 30,
//             condition : 'Sunny'
//         }
//         return currentData
//     }, 2000)
// }

// // NOW this will print 'undefined'
// const data = weatherNow(13.0, 78.0)
// console.log(data)

// Explanation :
// Our weatherNow() function has no return statement of itself,
//     the return statement at line 45 is running inside setTimeout() which is async.
//        
// As we have seen, any code from CALLBACK QUEUE is run after the main function ends
// and at line 50 we are expecting weatherNow() to run inside the main function.

// Let's use callback function to make it work
const weatherNow = (callback, lat, long) => {
    setTimeout(() => {
        const currentData = {
            temp: 30,
            condition : 'Sunny'
        }
        console.log('2 seconds are up.')
        callback(currentData)
    }, 2000)
}

weatherNow((data) => {
    console.log(data)
}, 13.0, 78.0)