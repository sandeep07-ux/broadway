
const func1 = () => {
  return new Promise((res, rej) => {
    const x = true;
    if (x) {
      res("I am resolve of func1");
    } else {
      rej("I am reject of func1")
    }
  })
}
const func2 = () => {
  return new Promise((res, rej) => {
    const x = false;
    if (x) {
      res("I am resolve of func2");
    } else {
      rej("I am reject of func2")
    }
  })
}
const func3 = () => {
  return new Promise((res, rej) => {
    const x = true;
    if (x) {
      res("I am resolve of func3");
    } else {
      rej("I am reject of func3")
    }
  })
}

const all = Promise.all([func1(), func2(), func3()])
all
  .then((res) => {
    console.log(res)
  })
  .catch((rej) => {
    console.log(rej)
  })
// const all = Promise.allSettled([func1(), func2(), func3()])
// all
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((rej) => {
//     console.log(rej)
//   })


// func1()
//   .then((success) => {
//     console.log(success)
//       func2()
//         .then((success) => {
//           console.log(success)
//             func3()
//               .then((success) => {
//                 console.log(success)
//               })
//               .catch((error) => {
//                 console.log(error)
//               })
//         })
//         .catch((error) => {
//           console.log(error)
//         })
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// chaining instead of nesting

// func1()
//   .then((res1) => {
//     console.log(res1)
//     return func2()
//   })
//   .then((res2) => {
//     console.log(res2)
//     return func3()
//   })
//   .then((res3) => {
//     console.log(res3)
//   })
//   .catch((rej) => {
//     console.log(rej)
//   })