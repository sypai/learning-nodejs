// ES6 Object Property Shorthand
const username = 'Suyash'
const age = 26
const city = 'Bangalore'

// // This is what we would normally do
// const user = {
//     username: username,
//     age: age,
//     location: city
// }

// Shorthand

// For the property user, it will create a key username and age from the variables
// with the same 'identifier' username and age
const user = {
    username,
    age,
    location: city
}

console.log(user)

// // OBJECT DESTRUCTURING
const product = {
    label: 'Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// The goal is to extract object properties and their values to individual variables

// // What we would normally do
// const label = product.label
// const price = product.price

// // DESTRUCTURING
// const {label, price} = product
// console.log(label)
// console.log(price)

// We can rename our variable as well
// const {label:productLabel, price} = product
// console.log(productLabel)
// console.log(price)

// We can set default value to variable if object does not have that property
// const {label:productLabel, price, rating=5} = product
// console.log(productLabel)
// console.log(price)
// console.log(rating)

// We can destructure argument if is an object in our call and only access 
// properties that we need in our function
const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)