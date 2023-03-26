const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([7, 1, 3])
        // reject('Things went wrong')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('SUCCESS', results)
}).catch((error) => {
    console.log('ERROR', error)
})

//
//                            fulfilled
//                           /
// Promise   -- pending -->
//                           \
//                            rejected
//