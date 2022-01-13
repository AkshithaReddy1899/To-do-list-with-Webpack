import defaultObject from "./default.js";

class Crud {
  constructor() {
    this.arr = [];
  }

  UpdateLocalStorage() {
    localStorage.setItem('TaskList', JSON.stringify(this.arr));
  };

  getBooks() {
    if(localStorage.getItem('TaskList') === null) {
      const defaultParent = document.getElementById('default-list');
      defaultParent.style.display = 'block';
      defaultParent.innerHTML = `<li><p class="task-description">${defaultObject.description}</p></li>`;
    }else {
      this.arr = JSON.parse(localStorage.getItem('TaskList'));
      return this.arr;
    }
  };

  deleteFunction() {
    console.log("HIaesrdtfyg")
  }

  removeBtn() {
    document.querySelector('.li-btn').addEventListener('click', () =>{
      alert("HI");
    })
  }

  displayList(item) {
    list.innerHTML += `<li>
    <div class="task-container">
    <input type="checkbox">&nbsp;
    <p class="task-description">${item.description}</p>
    </div>
    <i class="fa fas fa-trash"></i>
    </div>
    </li>`;

    list.querySelectorAll('i').forEach((item) =>{
      item.addEventListener('click', this.deleteFunction())
     })
  };
  
  addTask() {
    const taskDescription = document.getElementById('input-task').value;
    const error = document.getElementById('error');
    
    if(taskDescription === '') {
      error.textContent = 'Please Type in your task';
    }else {
      document.getElementById('default-list').style.display = 'none';
      error.textContent = '';
      const taskObject  = {
        index: this.arr.id,
        description: taskDescription,
        completed: true
      };

      this.arr.push(taskObject);
      this.UpdateLocalStorage();
      this.displayList(taskObject);
      
    }
    defaultObject.description = '';
  };
}


export default Crud;