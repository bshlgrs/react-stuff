/** @jsx React.DOM */

var NewNote = React.createClass({
  render () {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <input
              ref="title"
              placeholder="Untitled"
              onKeyDown={this.handleNewTodoKeyDown}
              autoFocus={true} />
          <input
              ref="body"
              onKeyDown={this.handleNewTodoKeyDown}
              autoFocus={true} />
        </div>
      </div>
    );
  }
});

