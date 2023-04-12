const EventEmitter = require('events');


// create class
class MyEventEmitter extends EventEmitter {}

// object
const myEvent = new MyEventEmitter();


myEvent.on('event' , () => console.log('event trigger'));

myEvent.emit('event')
