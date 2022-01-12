import taskArr from "./task.js"

const list = document.getElementById('list');

const displayList = (item) => {
  const li = document.createElement('li');
  
  li.textContent = `<input type="checkbox"><p class="task">${item.description}</p>`
}
list.appendChild(li);

export default displayList();