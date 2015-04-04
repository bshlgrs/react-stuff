/** @jsx React.DOM */

var Row = React.createClass({
  getInitialState() {return {};},
  render () {
    return (
      <tr>
        <td>Week {this.props.weekNum}</td>
        {Utils.days.map(
          (b,n) => <CalendarCell 
            key={b}
            day={b}
            week={this.props.weekNum}
            events={this.props.events}
            deleteCalendarEvent={this.props.deleteCalendarEvent}/>
        )}
      </tr>
    );
  }
});