

var elementPosition = function(domElement) {
  var parent = domElement.parentNode;
  var siblings = parent.childNodes;

  for (var i = siblings.length - 1; i >= 0; i--) {
    if (siblings[i] == domElement) {
      return i;
    }
  };

  return -1;
}

var pathToRoot = function(domElement, rootNode) {
  if (domElement == rootNode) {
    return [];
  } else {
    var result = pathToRoot(domElement.parentNode, rootNode);
    result.push(elementPosition(domElement));
    return result;
  }
}

var setCursorGeneral = function(rootNode, path, offset) {
  var node = rootNode;

  for (var i = 0; i < path.length; i++) {
    var childNode = node.childNodes[path[i]];
    if (childNode == undefined)
      break;
    node = childNode;
  }

  var range = document.createRange();
  range.setStart(node, Math.min(offset, node.length));
  range.setEnd(node, Math.min(offset, node.length));

  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

var getCursor = function () {
  var selection = window.getSelection();
  return [pathToRoot(selection.anchorNode, thing), selection.anchorOffset];
}

var getRealPosition = function () {
  var cursor = getCursor();
  var path = cursor[0];
  var offset = cursor[1];

  var result = 0;

  node = thing;

  for (var i = 0; i < path.length; i++) {
    var birthOrder = path[i];
    for (var j = 0; j < birthOrder; j++) {
      result += sizeOfNode(node.childNodes[j])
    }
    node = node.childNodes[path[i]];
  }

  result += offset;

  return result;
}

var mySetRealPosition = function(n) {
  var start = setRealPosition(n, thing);
  var end = setRealPosition(n, thing);

  if (start && end) {
    var range = document.createRange();
    range.setStart(start[0], start[1]);
    range.setEnd(end[0], end[1]);

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

var setRealPosition = function (n, node) {
  if (node.length == undefined) {
    for (var i = 0; i < node.childNodes.length; i++) {
      var childNode = node.childNodes[i];
      var childNodeSize = sizeOfNode(childNode);
      if (childNodeSize > n) {
        return setRealPosition(n, childNode);
      } else {
        n -= childNodeSize;
      }
    }

    return undefined;
  } else {
    return [node, n];
  }
}

var sizeOfNode = function(node) {
  if (node.length != undefined) {
    return node.length
  } else {
    total = 0;
    for (var i = 0; i < node.childNodes.length; i++) {
      total += sizeOfNode(node.childNodes[i]);
    }
    return total;
  }
}
