function DFSPreOrder() {
  let node = this.root;
  let data = [];
  function traverse(node) {
    data.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(node);
  return data;
}

function DFSPostOrder() {
  let node = this.root;
  let data = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    data.push(node.value);
  }
  traverse(node);
  return data;
}

function InOrder() {
  let node = this.root;
  let data = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    data.push(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(node);
  return data;
}
