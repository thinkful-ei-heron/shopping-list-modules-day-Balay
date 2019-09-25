/* eslint-disable semi */
/* eslint-disable no-console */
import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
  let item = this.items.find(item => item.id === id);
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

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    let item = findById(id);
    item.name = newName;
  } catch(error) {
    console.log(`cannot update name: ${error.message}.`);
  }
}

function findAndDelete(id) {
  let item = findById(id);
  let index = this.items.findIndex(item);
  this.items.splice(index, 1);
}

export default {
  items,
  hideCheckedItems
};




