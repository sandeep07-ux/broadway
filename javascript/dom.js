console.log("I am here")
document.write("<h1>Hello world</h1>")

//window



document.getElementById('first').innerHTML = "Update the value"
document.querySelector('#first').innerHTML = "I am from query selelctor"

// TIme event (miliseond)

        // if any code block has to execute after sometime
// setInterval(() => {
//   const today = new Date();
//   const Hour = today.getHours();
//   const minutes = today.getMinutes();
//   const seconds = today.getSeconds();
//   document.getElementById('clock').innerHTML = Hour + ":" + minutes + ":" + seconds 
// }, 1000);        // i

let counter = 0;


const increaseCounter = () => {
  counter++;
  document.querySelector('#counter').innerHTML = counter;
}


window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('#firstbtn');
  console.log(btn)
  btn.addEventListener("click", (e) => {
    console.log('e',e)
    counter++;
    document.querySelector('#counter').innerHTML = counter;
  })
})
