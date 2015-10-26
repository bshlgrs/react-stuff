var renderText = function (text) {

  // hashtags
  var text = text.replace(/(#\w+)/g, "<a href='$1'>$1</a>");

  // italics
  var text = text.replace(/\*(\w+?)\*/g, "<em>*$1*</em>");

  // show the links
  var text = text.replace(/(\[\[([^[]+?)\]\])/g, "<a href='#$2'>$1</a>");

  return text;
}
