/** @jsx React.DOM */

var Calendar = React.createClass({
  getInitialState() {return {
    events: [{title: "what", description: "i am a body", day:"mon", week:1},
             {title: "adfs", description: "i am a body", day:"tue", week:1}]
  };},
  deleteCalendarEvent(thing) {
    this.setState({events: _.reject(this.state.events, function (x) {return x.title == thing})});
  },
  render () {
    return (
      <div>
        <h2>Calendar</h2>

        <table className="table">
          <tr key={0}>
            <th></th>
            {Utils.days.map(
              (b,n) => <th key={b}>{b}</th>
            )}
          </tr>
            <Row key={1} weekNum={1} events={this.state.events} deleteCalendarEvent={this.deleteCalendarEvent}/>
            <Row key={2} weekNum={2} events={this.state.events} deleteCalendarEvent={this.deleteCalendarEvent}/>
        </table>
      </div>
    );
  }
});