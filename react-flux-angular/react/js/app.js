var React = require('react');
var ReactDOM = require('react-dom');
var Forum = require('./components/Forum.react');
ReactDOM.render(
    <Forum />,
    document.getElementById('forum')
    
);
// create an event emitter
//var myemitter = new EventEmitter();
//
//myemitter.on('STARTED_THE_APP', function() {
//    console.log('started the app');
//});
//
//myemitter.on('STARTED_THE_APP', function() {
//    console.log('started the app #2');
//});
//
//myemitter.emit('STARTED_THE_APP');

