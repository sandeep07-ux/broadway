const user1 = {
  name: "sandeep"
}

const user2 = {
  address: "pokhara"
}

// rest and spread operator 
// ternary or conditional operator


let user3 = {...user1, ...user2}
console.log(user3)