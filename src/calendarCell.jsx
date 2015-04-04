/** @jsx React.DOM */

var CalendarCell = React.createClass({
  getInitialState() {return {};},
  render () {
    var day = this.props.day;
    var week = this.props.week;
    var events = _.filter(this.props.events, function(x) {return x.day==day && x.week==week});
    return (
      <td>
        {events.map(
          (thing, n) => <CalendarEvent 
            title={thing.title} 
            key={thing.title} 
            description={thing.description} 
            deleteCalendarEvent={this.props.deleteCalendarEvent}/>
        )}
      </td>
    );
  }
});