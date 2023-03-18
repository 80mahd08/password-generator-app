function copyText() {
  let passDis = document.querySelector("#pass-dis").innerHTML
  let inputElement = document.createElement('input')
  inputElement.setAttribute('value' , passDis)
  document.body.appendChild(inputElement)
  inputElement.select()
  document.execCommand("copy")
  inputElement.parentNode.removeChild(inputElement)
}


let checkbox = document.querySelectorAll("input[type=checkbox]")
var count1 = 0
checkbox.forEach((e)=>{
  e.addEventListener("change" , ()=>{
    if (e.checked) {
      count1++
    }
    else{
      count1--
    }
    if (count1 !== 0) {
      for (let i = 1; i <= count1; i++){
        document.querySelector(`.span${i}`).style.backgroundColor = "#F8D067"
      }
    }
    for (let i = count1+1; i <= 4 ; i++) {
      document.querySelector(`.span${i}`).style.backgroundColor = "transparent"
    }
    document.getElementById('strength-lett-dis').innerHTML = message(count1)
  })
})


function message(count1) {
    switch(count1) {
      case 0 :
        return "Very weak"
      case 1 :
        return "weak"
      case 2 :
        return "medium"
      case 3 :
        return "strong"
      case 4 :
        return "Very strong"
    }
}

function gen() {
  let lengthOfPassword = len.value
  let check1 = document.getElementById('check1').checked
  let check2 = document.getElementById('check2').checked
  let check3 = document.getElementById('check3').checked
  let check4 = document.getElementById('check4').checked
  document.getElementById("pass-dis").innerHTML = passwordGen(lengthOfPassword , check1 , check2 , check3 , check4)
}

function passwordGen(a , b , c , d , e) {
  let lowerCase = "abcdefghigklmnopqrstuvwxyz"
  let upperCase = lowerCase.toUpperCase()
  let number = "123456789"
  let symbol = "/*-+.!:;,<>²&'(_)~#{[|`^@]}"
  let string = ""
  if(b){
    string = string + lowerCase
  }
  if (c) {
    string = string + upperCase
  }
  if (d) {
    string = string + number
  }
  if (e) {
    string = string + symbol
  }
  var password = ""
  for (let i = 0; i < a; i++) {
    let randomIndex = Math.floor(Math.random() * string.length)
    password += string[randomIndex]
  }
  return password
}