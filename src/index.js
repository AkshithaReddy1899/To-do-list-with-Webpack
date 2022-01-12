import taskArr from './module/task.js';
import displayList from "./module/display.js";
import css from "../src/style.css"

console.log(taskArr)

taskArr.forEach((item) => {
  displayList(item)
})