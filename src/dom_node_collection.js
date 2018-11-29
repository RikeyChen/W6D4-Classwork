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
  
}

module.exports = DomNodeCollection;