/** @jsx React.DOM */

var MainNote = React.createClass({
  render () {
    var props = this.props;

    var title;
    // if (props.editingTitle) {
    //   title = <input 
    // }

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h2>{this.props.note.title}</h2>
          <p>{this.props.note.body}</p>
        </div>
      </div>
    );
  }
});

