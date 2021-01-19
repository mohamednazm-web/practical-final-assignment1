
let loginButton  = document.querySelector(".loginbtn")
loginButton.addEventListener('click',logIn)


 function logIn(e,payload){
  console.log(payload)
  e.preventDefault()
  let email = document.querySelector('.email').value
  let password = document.querySelector('.password').value
  localStorage.setItem('email',email)
  localStorage.setItem('password',password)
  nextRoute('index.html')
 }

  function nextRoute(payload){
    let items = window.location.pathname
    let indexOfLastSlash = 0
    for(let i = 0 ; i<items.length ; i++){
      if(items[i] === '/')
      indexOfLastSlash =  i
    }
    let url = window.location.pathname.slice(0,indexOfLastSlash+1)
    window.location.replace(url + payload)
 }

 if(localStorage.getItem('email') && localStorage.getItem('password')){
  nextRoute('index.html')
 }
