/** @jsx React.DOM */

var App = React.createClass({
  getInitialState() {
    return {
      notes: [{title: "what", body: "i am a bigger body. i am a bigger body. i am a bigger body. i am a bigger body."},
             {title: "adfs", body: "i am a body. i am a body. i am a body. i am a body. i am a body. i am a body."}],
      currentSelectedNoteId: -1
    };
  },
  onClickNewNote() {
    this.setState({currentSelectedNoteId: -1});
  },
  onTitleClick(n) {
    this.setState({currentSelectedNoteId: n});
  },
  render () {
    onTitleClick = this.onTitleClick;
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h2>Betternote</h2>
          </div>
        </div>

        <hr />

        <div className="row"> 
          <div className="col-xs-4">
            <a onClick={this.onClickNewNote}>New note</a>

            {this.state.notes.map(
              (b,n) => <SideNote onTitleClick={onTitleClick} key={n} body={b.body} title={b.title}></SideNote>
            )}
          </div>        
          <div className="col-xs-6">
            {this.state.currentSelectedNoteId == -1 ?
              <NewNote /> : 
              <MainNote note={this.state.notes[this.state.currentSelectedNoteId]}></MainNote>}
          </div>
        </div>
      </div>
    );
  }
});