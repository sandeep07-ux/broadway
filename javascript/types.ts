type Usertype = "admin" | "seller"; 

interface UserObj {
  name: string,
  email: string,
  role: Usertype
}

let user: UserObj = {
  name: "Sandeep",
  email: "sandeepkayastha07@gmail.com",
  role: "admin"
}

console.log(user.name)


function addNumber(a:number, b:number): number  {
  return (a + b)
}

const add = addNumber(1,2)

console.log(add)