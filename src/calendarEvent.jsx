/** @jsx React.DOM */

var CalendarEvent = React.createClass({
  getInitialState() {return {};},
  handleClick() {
    this.props.deleteCalendarEvent(this.props.title);
  },
  render () {
    return (
      <div className="calendar-event">
        <strong>{this.props.title}</strong> <small><a onClick={this.handleClick}>delete</a></small>
        <p>{this.props.description}</p>
      </div>
    );
  }
});