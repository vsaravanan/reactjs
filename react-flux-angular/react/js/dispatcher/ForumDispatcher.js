var Dispatcher = require('flux').Dispatcher;
var ForumDispatcher = new Dispatcher();

module.exports = ForumDispatcher;
//ForumDispatcher.register(function(action) {
//    console.log('received an action');
//    console.log(action);
//});