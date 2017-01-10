var React = require('react');
var ReactDOM = require('react-dom');

var AptList = require('./AptList');
var MainInterface = React.createClass({
  getInitialState: function () {
    return {
      myAppointments: [],
      title: 'Appointments',
      show: true
    }
  },

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(result) {
      var tempApts = result;
      this.setState({
        myAppointments: tempApts 
      }); //setState
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var showTitle;
    if (this.state.show) {
      showTitle = 'New ';
    }

    var displayList = {
      display: this.state.show ? 'block' : 'none',
      color : 'red'
    }

    var filteredApts = this.state.myAppointments;
    filteredApts = filteredApts.map(function(item, index) {
      return(
        <AptList key = { index }
          singleItem = { item } />
      ) //return
    }.bind(this)); //filteredApts.map
    
    return (
      <div className="interface">
        <h1>
          {showTitle}

          {this.state.title}
        </h1>
        <ul style={displayList}>
          <li>Buffy 3:30 PM</li>
          <li>Spot 8:30 PM</li>
          <li>Goldie 3:50 PM</li>
        </ul>

        <ul className="item-list media-list">{filteredApts}</ul>	
	
      </div>
    )
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
); //render
