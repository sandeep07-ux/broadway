// const foo = (a, b=0) => {
//   // console.log(a + b)

//   // clouser function ?? It is used to maintain the dependencies

//   const doubleValue = (x) => {
//     return x * 2;
//   }
//   return doubleValue(a + b)
// }

// // const bar = (data) => {
// //   console.log("From argu: ", data)
// //   return "I am from bar"
// // }

// // NaN (Not a Number)

// // const result = foo()

// const result = foo(10)
// console.log(result)

// // const result1 = bar(foo())
// // console.log(result1)

// // sync one after another
// // async delay of result

// Call back function 


// // calback
// const foo = (cb) => {
//   // console.log("I am foo");
//   cb() // bar
// }
// const bar = () => {
//   // console.log("I am bar");
// }
// // foo (() => {
// //   console.log("I am foo");
// // })

// foo(bar)

// const users = [
//   {
//     name: "User One", 
//     email: "one@user.com",
//     address: "Kathmandu"
//   },
//   {
//     name: "User Two", 
//     email: "two@user.com",
//     address: "Kathmandu"
//   },
//   {
//     name: "User Three", 
//     email: "three@user.com",
//     address: "Kathmandu"
//   },
// ]

// users.map((user, index) => {
//   console.log("Name: ", user.name),
//   console.log("Email: ", user.email),
//   console.log("Address: ", user.address)
// })


const numb = [1,2,3,4,5,6,7,8,9,10]

// get only even nubers from numb to evenNumb variable and print the value

// const evenNumb = []

// // numb.forEach(na => {
// //   if (na % 2 == 0) {
// //       evenNumb.push(na)
// //     }
// // })

// // console.log(evenNumb)

// let numeven = numb.filter((x) => x % 2 === 0)

// console.log(numeven)

// let total = 0

// let sum1 = numb.reduce((sum1,curr) => {
//   // console.log(sum1, curr);
//   sum1 += curr;
//   return sum1;
// }
// )

// console.log(sum1)

