/** @jsx React.DOM */

var MainNote = React.createClass({
  getInitialState() {
    return {
      title: this.props.title,
      body: this.props.body
    }
  },
  componentDidMount() {
    thing = document.getElementById("edit-place");
    $thing = $(thing);

    var oldHtml;

    $thing.on("keyup", function () {
      var realStartPosition = getRealPosition();

      var outHtml = renderText($thing.text());
      if (oldHtml != outHtml) {
        $thing.html(outHtml);
        mySetRealPosition(realStartPosition);
      }

      oldHtml = outHtml;
    });

    var outHtml = renderText($thing.text());
    $thing.html(outHtml);
  },
  handleChange () {
    this.setState({body: $("#edit-place").text()});
  },
  render () {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h3>I am a title</h3>
          <div id="edit-place" contentEditable="true" onInput={this.handleChange}>
            <p>j asdfa sadf hello <b>[[sdf]]</b> da</p>

            <p>assfdfasdfafads</p>
          </div>
        </div>
      </div>
    );
  }
});

