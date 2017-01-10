var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

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
  }, //componentDidMount

  componentWillUnmount: function() {
    this.serverRequest.abort();
  }, //componentWillUnmount

  deleteMessage: function(item) {
    var allApts = this.state.myAppointments;
    var newApts = _.without(allApts, item);
    this.setState({
      myAppointments: newApts
    }); //setState
  }, //deleteMessage


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
          singleItem = { item }
          whichItem = { item }
          onDelete = { this.deleteMessage }
           />
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
    ) //return
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
); //render
