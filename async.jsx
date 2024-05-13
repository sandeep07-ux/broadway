

// Learn thread in detail.

// const { reject } = require("async");

// setTimeout(() => {
//   console.log("I am first line")
// }, 3000);
// setTimeout(() => {
//   console.log("I am second line")
// }, 2000);
// setTimeout(() => {
//   console.log("I am third line")
// }, 1000);

// console.log("I am last line")


// a. function retyrn type is promise is async
// b. function async keyword is declard is promice

// password
// encryption
// bcrypt sign
// .hash()

// data receive
// validate
// admin123 => encrypt => .has("admin123") // asycn
// db store query
// encrypt template

// Why promise (primse is object data)

const myPromise = new Promise((resolve, reject) => {
  // code block time consume
  const success = false; // false

  if(success) {
    resolve("I am resolve")
    // code doesn't execute
  } else {
    reject("I am reject")
    // same here
  }
})

myPromise
  .then((success) => {
    console.log(success)
  })
  .catch((exception) => {
    console.log(exception)
  })
console.log("I am first line")