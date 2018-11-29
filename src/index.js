const DomNodeCollection = require('./dom_node_collection.js');

window.$l = (selector) => {
  let selected;
  let selectedArr;
  
  
  if (selector instanceof HTMLElement) {
    selected = document.getElementsByTagName(selector.tagName);
    selectedArr = Array.from(selected);
  } else {
    selected = document.querySelectorAll(`${selector}`);
    selectedArr = Array.from(selected);
  }
  
  return new DomNodeCollection(selectedArr);
};