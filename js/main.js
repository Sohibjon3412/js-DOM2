let input = document.querySelector(".form-control")
let form = document.querySelector("#todo__add")
let ul = document.querySelector("#todoAddSec")
form.onsubmit = (event)=>{
  if(input.value=="") return 
  event.preventDefault()
  let li = document.createElement("li")
  let x = document.createElement("button")
  x.className = "delete"
  
  li.className="list-group-item"
  
  x.textContent = "X"
  li.textContent = input.value
  li.append(x)
  ul.append(li)
  
  li.onclick = (event)=>{
  
    event.target.style.backgroundColor ="#6ccba08e"
  }
  x.onclick = ()=>{
    ul.removeChild(li)
  }
  
  input.value = null
}