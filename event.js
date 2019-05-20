
const EventEmitter = require('events');

const myEmitter = new EventEmitter();
// 只处理一次，所以不会无限循环
myEmitter.once('newListener', (event, listener) => {
    if (event === 'event') {
        // 在开头插入一个新的监听器
        myEmitter.on('event', () => {
            console.log('B');
        });
    }
});
myEmitter.on('event', () => {
    console.log('A');
});
myEmitter.emit('event');