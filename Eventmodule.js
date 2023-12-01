var events = require('events');
var eventEmitter = new events.EventEmitter();
var fun = function(){
    console.log("My User Define Event Method");
}
eventEmitter.on('xyz',fun);
eventEmitter.emit('xyz');