import Crud from './render.js'

const crud = new Crud;

const checkBoxChecked = (array) => {
  array.forEach( () => {
    document.querySelectorAll('input-description').style.textDecoration = 'line-through';
    document.querySelectorAll('inputCheck').checked = true;  
  });
  
}
export {checkBoxChecked};