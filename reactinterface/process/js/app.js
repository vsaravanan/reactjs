var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function () {
    return {
      data: [
        {
          "petName": "Buffy",
          "ownerName": "Hassum Harrod",
          "aptDate": "2016-06-20 15:30",
          "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
        },
        {
          "petName": "Spot",
          "ownerName": "Constance Smith",
          "aptDate": "2016-06-24 08:30",
          "aptNotes": "This German Shepherd is having some back pain"
        },
        {
          "petName": "Goldie",
          "ownerName": "Barot Bellingham",
          "aptDate": "2016-06-22 15:50",
          "aptNotes": "This Goldfish has some weird spots in the belly"
        },
        {
          "petName": "Mitten",
          "ownerName": "Hillary Goldwyn",
          "aptDate": "2016-06-21 9:15",
          "aptNotes": "Cat has excessive hairballs"
        }
      ],
      
      title: 'Appointments',
      show: true
    }
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

    var filteredApts = this.state.data;
    filteredApts = filteredApts.map(function(item, index) {
      return(
        <li className="pet-item media" key={index}>
          <div className="pet-info media-body">
            <div className="pet-head">
              <span className="pet-name">{this.state.data[index].petName}</span>
              <span className="apt-date pull-right">{this.state.data[index].aptDate}</span>
            </div>
            <div className="owner-name"><span className="label-item">Owner:</span>
            {this.state.data[index].ownerName}</div>
            <div className="apt-notes">{this.state.data[index].aptNotes}</div>
          </div>
        </li>
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
