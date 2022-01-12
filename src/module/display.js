const displayList = (item) => {
  list.innerHTML += `<li>
  <input type="checkbox">
  <p class="task-description">${item.description}</p>
  <button type="button" class="li-btn"><div class="line"></button>
  </li>`;
};

export {displayList};