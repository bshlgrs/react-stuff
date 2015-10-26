/** @jsx React.DOM */

var SideNote = React.createClass({
  render () {
    var props = this.props;
    var onClickThing = function () { props.onTitleClick(props.key) };

    return (
      <div className="panel panel-default">
        <div className="panel-body" onClick={onClickThing}>
          <h3>{this.props.title}</h3>
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
});
