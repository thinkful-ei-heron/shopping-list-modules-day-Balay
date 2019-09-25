/* eslint-disable semi */
/* eslint-disable no-console */
import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
  let item = items.find(item => item.id === id);
  return item;
}

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch(error) {
    console.log(`cannot add item: ${error.message}.`);
  }
}

function findAndToggleChecked(id) {
  let item = findById(id);
  item.checked = !item.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    let currItem = findById(id);
    currItem.name = newName;
  } catch(error) {
    console.log(`cannot update name: ${error.message}.`);
  }
}

function findAndDelete(id) {
  let item = findById(id);
  let index = this.items.findIndex(a => a.id === item.id);
  this.items.splice(index, 1);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndUpdateName, 
  findAndDelete, 
  toggleCheckedFilter
};




