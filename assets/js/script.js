// OOP Implementation
class ToDoApp {
  constructor(props) {
    // Abstraction
    if (this.constructor === ToDoApp) {
      throw new Error("Cannot instantiate from Abstract Class");
    }
    let list = document.getElementById("to-do-list");
    this.list = list;
  }
  validation = (x) => {
    const minValue = 3;
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
}
class AddToDo extends ToDoApp {
  constructor() {
    super();
  }
  // Inheritance
  addToDo() {
    let idList = Date.now();
    let input = document.getElementById("inputText");
    let inputToDo = this.validation(input.value);
    if (inputToDo) {
      this.list.innerHTML += ` <li class=" my-3 py-3 shadow list-group-item " id="to-do-list-${idList}">
            <div class="row">
            <div class="col-1">
            <input class="" type="checkbox" id="check${idList}" onclick="done(${idList})">
            </div>
            <div class="col-5">
                <span class=" h4" id="text${idList}"> ${inputToDo} </span>
            </div>
            <div class="col-md-6">
                  <button class="btn btn-dark" onclick="deleteList(${idList})"><i class="bi bi-file-earmark-x-fill"></i> Delete</button>
                  <button class="btn btn-dark" onclick="editList(${idList})"><i class="bi bi-pencil-square"></i> Edit</button>
            </div>
            </div>
            </li> `;
      input.value = "";
    }
  }
}
class DoneToDo extends ToDoApp {
  constructor() {
    super();
  }
  // Inheritance
  done(listId) {
    let current = document.getElementById(`text${listId}`);
    let classExit = current.classList.contains("text-decoration-line-through");
    if (classExit) {
      current.classList.remove("text-decoration-line-through");
    } else {
      current.classList.add("text-decoration-line-through");
    }
  }
}
class EditListToDo extends ToDoApp {
  constructor() {
    super();
  }
  // Encapsulation
  #editList = (listId) => {
    let currentText = document.getElementById(`text${listId}`);
    let newText = prompt("Wanna Change list?", currentText.innerHTML);
    if (this.validation(newText)) {
      currentText.innerHTML = newText;
    }
  };
  edit(listId) {
    this.#editList(listId);
  }
}
class DeleteListToDo extends ToDoApp {
  constructor() {
    super();
  }
  // Inheritance
  delete = (listId) => {
    let current = document.getElementById(`text${listId}`).innerHTML;
    let deleteConfirm = confirm(`Are you sure to delete ${current}`);
    if (deleteConfirm) {
      this.list.removeChild(document.getElementById(`to-do-list-${listId}`));
    }
  };
}
// Create & Read
const toDo = document.getElementById("add-list");
toDo.onclick = () => {
  let newList = new AddToDo();
  newList.addToDo();
};
// Update
done = (listId) => {
  let newDone = new DoneToDo();
  newDone.done(listId);
};
editList = (listId) => {
  let newEditList = new EditListToDo();
  newEditList.edit(listId);
};
// Delete
deleteList = (listId) => {
  let newDeleteList = new DeleteListToDo();
  newDeleteList.delete(listId);
};
