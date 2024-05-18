// do while



// for (let i = 2; i <= 20; i++) {
//   if(i % 2 === 0) {
//     console.log(i)
//   }  
// }

// for (let i = 1; i <= 5; i++) {
//   let toPrint = ""
//   for (let j = 1; j <= i; j++) {
//     toPrint += i+'    ';    
//   }  
//   console.log(toPrint)
// }

// for (let i = 5; i >= 1; i--) {
//   let toPrint = ""
//   for (let j = 1; j <= i; j++) {
//     toPrint += j+'    ';    
//   }  
//   console.log(toPrint)
// }


// const pro = ['p','R','O','G','R','A','M','M','I','N','G']
// for (let i = 0; i < pro.length; i++) {
//   let toPrint = ''
  
//   for(let j = 0; j <= i; j++) {
//     toPrint += pro[j] + '   '
//   }
//   console.log(toPrint)
// }

const allUsersObje = [
  {
    name: "user One",
    email: "one@email.com",
    address: "kathmandu", 
    phone: "+977 9826681522"
  },
  {
    name: "user Two",
    email: "two@email.com",
    address: "kathmandu", 
    phone: "+977 9826681522"
  },
  {
    name: "user Three",
    email: "three@email.com",
    address: "kathmandu", 
    phone: "+977 9826681522"
  },
  {
    name: "user Four",
    email: "four@email.com",
    address: "kathmandu", 
    phone: "+977 9826681522",
  }
]

for (const elem of allUsersObje) {
  
  if (elem && elem.hasOwnProperty('name') && elem.hasOwnProperty('email') && elem.hasOwnProperty('address') && elem.hasOwnProperty('phone')) {
    
  }
  console.log(`---------${elem.name}-----------`)
  console.log("Name: ", elem.name)
  console.log("Email: ", elem.email)
  console.log("Address: ", elem.address)
  console.log("Phone: ", elem.phone)
}

