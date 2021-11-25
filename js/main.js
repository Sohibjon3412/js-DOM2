let elAddForm = document.getElementById('todo__add');
let todoAddSec = document.getElementById('todoAddSec');
let elTextInp = document.getElementById('elTextInp');

// add evenet
elAddForm.addEventListener('submit', addItem);
todoAddSec.addEventListener('click', removeItem);

function addItem(e) {
  e.preventDefault();
  let newItem = elTextInp.value;
  
  let li = document.createElement('li');
  
  li.className="list-group-item";
  
  li.appendChild(document.createTextNode(newItem));
  
  let deleteBtn = document.createElement('button');

  deleteBtn.className = 'delete';

  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);
  
  todoAddSec.appendChild(li);

  elTextInp.value = '';
}

// remove item
function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    if(confirm("Rostdan ham o'chirasizmi")) {
      let li = e.target.parentElement;
      todoAddSec.removeChild(li); 
    }
  }
}