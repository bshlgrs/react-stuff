/** @jsx React.DOM */

var App = React.createClass({
  getInitialState () {
    return {
      notes: [{title: "what", body: "shit shit shit"},
              {title: "what2", body: "shit shit shit"}]
    }
  },
  render () {
    var sideNotes = _(this.state.notes).map((item) => <SideNote title={item.title} body={item.title} />);

    return (
      <div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <h1>Betternote <small>main notebook</small></h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-3 col-xs-offset-1">
            <a>new</a>

            {sideNotes}
          </div>
          <div className="col-xs-8">
            <MainNote />
          </div>

        </div>
      </div>
    );
  }
});