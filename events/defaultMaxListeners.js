const EventEmitter = require('events');
const  myEmitter=new EventEmitter()
myEmitter.setMaxListeners(myEmitter.getMaxListeners() + 1);
for(let i=0;i<11;i++){
    myEmitter.on('event'+i,()=>{
        console.log('A')
    })

}

console.log(myEmitter.getMaxListeners(),myEmitter.eventNames())
//(node:15932) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 event listeners added. Use emitter.setMaxListeners() to increase limit

