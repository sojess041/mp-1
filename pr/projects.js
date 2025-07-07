/*calculator must be in projects page */
let one=document.getElementById("first")
let two = document.getElementById("second")


let total=document.getElementById("output")


function addition() {
    console.log("Working");
    total.innerHTML = `${Number(one.value) + Number(two.value)}`;
  }
  
  function subtraction() {
    console.log("Working");
    total.innerHTML = `${Number(one.value) - Number(two.value)}`;
  }
  
  function multiply() {
    console.log("Working");
    total.innerHTML = `${Number(one.value) * Number(two.value)}`;
  }
  
  function divide() {
    console.log("Working");
    if (Number(two.value) === 0) {
      total.innerHTML = "Cannot divide by zero";
    } else {
      total.innerHTML = `${Number(one.value) / Number(two.value)}`;
    }
  }


  function exponent() {
    console.log("Working");
    total.innerHTML = `${Number(one.value) ** Number(two.value)}`;
  }


  function cleartotal() {
    console.log("Clearing");
    one.value = '';
    two.value = '';
    total.innerHTML = 'Result:';
  }
  