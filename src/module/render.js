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

  displayList(item) {
    list.innerHTML += `<li id="${item.index}">
    <div class="task-container">
    <input type="checkbox">&nbsp;
    <input type="text" class="task-description" value="${item.description}" readOnly>
    </div>
    <i class="fa fas fa-ellipsis-v"></i>
    </div>
    </li>`;/*
    document.querySelector('.task-description').setAttribute('readOnly', 'readOnly');*/
  }; 

  edit() {
    const editInput = document.querySelectorAll('.task-description');
    
    editInput.forEach((item) =>{
      item.readOnly = false;
      console.log(item);

    item.addEventListener('keydown', (event) => {
        if(event.key === 'Enter') {
          console.log('fd')
          const i = document.querySelector('.fa');
          i.classList.add('fa-ellipsis-v');
          i.classList.remove('fa-trash');
          event.preventDefault();
          /*item.setAttribute('readonly', 'readonly');*/
          item.readOnly = true;
        }
      })
  })
}


  deleteFunction(parent) {
    console.log('delete')
    const id = parent.id;
    console.log(id);
    console.log(this.arr)
    this.arr = this.arr.filter(i => i.index !== id);
    console.log(this.arr);
  parent.remove();
  }

  /* readOnly = false;
    editInput.removeAttribute('readOnly');
    editInput.addEventListener('keydown', (event) => {
      if(event.key === 'Enter') {
        console.log('fd')
        const i = document.querySelector('.fa');
        i.classList.add('fa-ellipsis-v');
        i.classList.remove('fa-trash');
        event.preventDefault();
        editInput.setAttribute('readonly', 'readonly');
        editInput.readOnly = true;
      */

  delete() {

  }

  /* fa-ellipsis-v
  fa-trash*/
  
  addTask() {
    const taskDescription = document.getElementById('input-task').value;
    const error = document.getElementById('error');
    
    if(taskDescription === '') {
      error.textContent = 'Please Type in your task';
    }else {
      document.getElementById('default-list').style.display = 'none';
      error.textContent = '';
      const taskObject  = {
        index: this.arr.length,
        description: taskDescription,
        completed: true
      };

      this.arr.push(taskObject);
      this.UpdateLocalStorage();
      this.displayList(taskObject);
      document.querySelectorAll('i').forEach((item) =>{
        item.addEventListener('click', () => {
          if(item.classList.contains('fa-ellipsis-v')){
            item.classList.add('fa-trash');
            item.classList.remove('fa-ellipsis-v');
            this.edit();
          }else if(item.classList.contains('fa-trash')){
            item.classList.add('fa-ellipsis-v');
            item.classList.remove('fa-trash');
          }
          console.log(item.className);
        })
    });    
    }
    defaultObject.description = '';
  };
}


export default Crud;