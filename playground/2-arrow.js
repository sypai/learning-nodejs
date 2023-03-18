// Our JS function

// const square = function (num) {
//     return num * num
// }

// ES6 JS arrow function

// const square = (num) => {
//     return num * num
// }

// ES 6 arrow shorthand
// const square = (num) => num * num

const events = {
    name: 'Birthday Party',
    // Using function() which has a 'this' binding
    
    // printGuestList : function () {
    //     console.log('Guest List for ' + this.name)
    // }

    // Using Arrow function, it does not have 'this' binding
    // this prints 'Guest list for undefined'
    
    // printGuestList : () => {
    //     console.log('Guest list for ' + this.name)
    // }


    // guestList : ['Suyash', 'Shriya', 'Govind'],
    // printGuestList() {
    //     console.log('Guest list for ' + this.name)

    //     // Using our standard function here will print undefined, 
    //     // as they have their own this binding 
    //     this.guestList.forEach( function(guest) {
    //         console.log(guest + ' is attending ' + this.name)
    //     })
    // }

    guestList : ['Suyash', 'Shriya', 'Govind'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach( (guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

events.printGuestList()