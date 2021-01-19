
let username = ''
// Route Protection
if(!localStorage.getItem('email') || !localStorage.getItem('password')){
  routeProtector()
}else{
 usernameExtraction()
}


function usernameExtraction(){
  var email = localStorage.getItem('email')
  var username = ''
  for(let i = 0 ; i<email.length ; i++){
    if(email[i] === '@'){
      username = email.substring(0,i)
    }
  }
  document.querySelector('.username').innerText = username
  return username
}
function routeProtector(){
  let items = window.location.pathname
  let indexOfLastSlash = 0
  for(let i = 0 ; i<items.length ; i++){
    if(items[i] === '/')
    indexOfLastSlash =  i
  }
  let url = window.location.pathname.slice(0,indexOfLastSlash+1)
  window.location.replace(url + 'login.html')
}

// Table Data

var arr, tab, tr, td, tn, row, col;

tab = document.querySelector('.tb')

arr = [{
  id:1,
 name:'Ahmed Khalid',
 phone:'098765456789',
 email:'ahmed@domain.com',
 actions:''
}
]

// CRUD operations

// Get
function getData(data){
  tab.innerHTML = ''
  for(i = 0 ; i<data.length ; i++){
    tr = document.createElement('tr');
    td1 = document.createElement('td');
    td2 = document.createElement('td');
    td3 = document.createElement('td');
    td4 = document.createElement('td');
    td5 = document.createElement('td');
    td1.innerText = data[i].id
    let id = arr[i].id
    td2.innerText = data[i].name
    td3.innerText = data[i].phone
    td4.innerText = data[i].email
    td5.innerHTML = `<button onclick="modalEdit(${id})" data-toggle="modal" data-target="#exampleModal" style="margin-right:2px;" class="btn btn-sm btn-primary"><i class="far fa-edit"></i></button><button onclick="deleteData(${id})" class="btn btn-danger btn-delete btn-sm"><i class="far fa-trash-alt"></i></button>`
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tab.appendChild(tr)
  }

}
// ADD  & Edit
function save(payload){
 let id  = 0;
 let contactName = document.querySelector('#cN').value
 let phoneNum = document.querySelector('#pN').value
 let email = document.querySelector('#eM').value
 if(payload === 'add'){
 id  = arr[arr.length - 1].id+1
 let newContact = {
   id: id,
   name: contactName,
   phone : phoneNum,
   email: email,
   actions: ''
 }
 arr.push(newContact)
}else{
  for(let  i = 0 ; i<arr.length ; i++){
    if(arr[i].id === payload){
      arr[i].name = contactName
      arr[i].phone = phoneNum
      arr[i].email = email
    }
  }
}
getData(arr)
}


// DELETE
 function deleteData(id){
   let check = confirm('Are you sure?')
   if(check){
    for(let  i = 0 ; i<arr.length ; i++){
      if(arr[i].id === id){
        arr.splice(i,1)
      }
    }
   getData(arr)
 }
 }

 // MODAL
 function modalEdit(id){
  document.querySelector('.modal-title').innerText = 'Edit Contact'
  for(let  i = 0 ; i<arr.length ; i++){
   if(arr[i].id === id){
     document.querySelector('#cN').value = arr[i].name
     document.querySelector('#pN').value = arr[i].phone
     document.querySelector('#eM').value = arr[i].email
   }
 }

  document.querySelector('.save').setAttribute('onclick',`save(${id})`)
}
arr.push({
  id : arr[arr.length-1].id+1,
  name: usernameExtraction(),
  phone: '0965457890',
  email:localStorage.getItem('email'),
  actions: ''
})
getData(arr)


function logOut(){
  localStorage.removeItem('email')
  localStorage.removeItem('password')
  location.reload()
}
