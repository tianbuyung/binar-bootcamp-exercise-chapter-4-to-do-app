const toDo = document.getElementById("add-list");
toDo.onclick = () => {
  addToDo();
};

const minValue = 3;
let list = document.getElementById("to-do-list");
let idList = 0;

function addToDo() {
  let input = document.getElementById("inputText");
  let inputToDo = validation(input.value);
  if (inputToDo) {
    list.innerHTML += ` <li class=" my-3 py-3 shadow list-group-item " id="to-do-list-${idList}">
      <div class="row">
      <div class="col-1">
      <input class="" type="checkbox" id="check${idList}" onclick="done(${idList})">
      </div>
      <div class="col-6">
          <span class=" h4" id="text${idList}"> ${inputToDo} </span>
      </div>
      <div class="col-4">
            <button class=" btn btn-dark" onclick="deleteList(${idList})">Delete</button>
            <button class=" btn btn-dark" onclick="editList(${idList})">Edit</button>
      </div>                  
      </div>    
      </li> `;
    input.value = "";
    idList++;
  }
}

validation = (x) => {
  if (x) {
    if (x.length >= minValue) {
      return x;
    } else {
      alert("Please enter more than 3 words");
    }
  } else {
    return false;
  }
};

done = (listId) => {
  let current = document.getElementById(`text${listId}`);
  let classExit = current.classList.contains("text-decoration-line-through");
  if (classExit == true) {
    current.classList.remove("text-decoration-line-through");
  } else {
    current.classList.add("text-decoration-line-through");
  }
};

editList = (listId) => {
  let currentText = document.getElementById(`text${listId}`);
  let newText = prompt("Wanna Change list?", currentText.innerHTML);
  if (validation(newText)) {
    currentText.innerHTML = newText;
  }
};

deleteList = (listId) => {
  let current = document.getElementById(`text${listId}`).innerHTML;
  let deleteConfirm = confirm(`Are you sure to delete ${current}`);
  if (deleteConfirm) {
    list.removeChild(document.getElementById(`to-do-list-${listId}`));
  }
};
