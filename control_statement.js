const emp = {
  name: "Sandeep",
  salary: 5000000
}

let yearlyTax = 0;

// if (emp.salary <= 500000) {
//   yearlyTax = 0.01 * emp.salary
// } else {
//   if (emp.salary <= 1000000) {
//     yearlyTax = 5000 + (emp.salary - 500000) * 0.15 
//   } else {
//     if (emp.salary <= 1700000) {
//       yearlyTax = 5000 + 75000 + (emp.salary - 1000000) * 0.25
//     } else {
//       if (emp.salary <= 2700000) {
//         yearlyTax = 5000 + 75000 + 175000 + (emp.salary - 1700000) * 0.30
//       } else {
//         yearlyTax = 5000 + 75000 + 175000 + 300000 + (emp.salary - 2700000) * 0.36
//       }      
//     }
//   }
// }

switch (true) {
  case emp.salary <= 500000:
    yearlyTax = 0.01 * emp.salary
    break;
  case emp.salary <= 1000000:
    yearlyTax = 5000 + (emp.salary - 500000) * 0.15
    break; 
  case emp.salary <= 1700000:
    yearlyTax = 5000 + 75000 + (emp.salary - 500000) * 0.25 
    break;
  case emp.salary <= 2700000:
    yearlyTax = 5000 + 75000 + 175000 + (emp.salary - 500000) * 0.30
    break;
  default:
    yearlyTax = 5000 + 75000 + 175000 + 300000 + (emp.salary - 2700000) * 0.36
    break;
}

console.log("Yearly Tax", yearlyTax)
console.log("Monthly Tax", yearlyTax/12)

const netSalary = emp.salary - yearlyTax
console.log("Yearly Salary", netSalary)
console.log("Monthly Salary", netSalary/12)

