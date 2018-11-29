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
  
}

module.exports = DomNodeCollection;