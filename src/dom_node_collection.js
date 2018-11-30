class DomNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }
  
  html(string) {
    if (string == undefined) {
      return this.nodes[0].innerHTML;
    } else {
      this.nodes.forEach( (node) => {
        node.innerHTML = string;
      });
      return string;
    }
  }
  
  empty() {
    this.html("");
  }
  
  append(arg) {
    // if (arg == this.constructor.name) {
    // 
    // }
    
    this.nodes.forEach( (node) => {
      node.innerHTML = arg.outerHTML;
    });
  }
  
  attr (attrName, value) {
    if(value == undefined){
      return this.nodes[0].getAttribute(attrName);
    } else {
      return this.nodes[0].setAttribute(attrName, value);
    }
  }
  
  addClass(newClass) {
    return this.attr('class', newClass);
  }

  removeClass(className) {
    return this.attr(className, "");
  }
  
  children() {
    let childNodes = [];
    
    this.nodes.forEach( (node) => {
      childNodes.push(node.children);
    });
    return new DomNodeCollection(childNodes);
  }

  parent() {
    let parentNodes = [];
    
    this.nodes.forEach( (node) => {
      parentNodes.push(node.parentNode);
    });
    return new DomNodeCollection(parentNodes);
  }
  
  find(selector) {
    let descendants = [];
    this.nodes.forEach( (node) => {
      descendants.push(node.querySelectorAll(selector));
    });
    return new DomNodeCollection(descendants);
  }

  remove(){
    this.nodes.forEach((node) => {
      node.innerHTML = '';
      node.outerHTML = '';
    });
    this.nodes = [];
  }
  
  on(action, callback) {
    this.nodes.forEach((node) => {
      node.addEventListener(action, callback);
    });
  }
  
  off(action, callback) {
    this.nodes.forEach((node) => {
      node.removeEventListener(action, callback);
    });
  }
  
}

module.exports = DomNodeCollection;