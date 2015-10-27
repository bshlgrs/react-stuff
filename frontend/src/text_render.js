var renderText = function (text) {

  // hashtags
  var text = text.replace(/#(\w+)/g, "<a contentEditable='false' href='#$1'>#</a><a href='#$1'>$1</a>");

  // italics
  text = text.replace(/\*(\w+?)\*/g, "<em>*$1*</em>");

// bold
  text = text.replace(/\_\_(\w+?)\_\_/g, "<strong>__$1__</strong>");

// bold
  text = text.replace(/`(.+?)`/g, "<code>`$1`</code>");

  // show the links
  text = text.replace(/(\[\[([^[]+?)\]\])/g, "<a contentEditable='false' href='#$2'>[[</a><a href='#$2'>$2</a><a contentEditable='false' href='#$2'>]]</a>");

  var paragraphs = text.split("\n");

  text = ""
  for (var i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i]) {
      text += "<p>" + paragraphs[i] + "</p>\n";
    }
  }

  // text = text.replace(/<p><\/p>/g, "");
  // text += "<p></p>";

  return text;
}