
const EventEmitter=require('events')
const myEmitter = new EventEmitter();
const callbackA = () => {
    console.log('A');
    myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
    console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA 移除了监听器 callbackB，但它依然会被调用。
// 触发是内部的监听器数组为 [callbackA, callbackB]
myEmitter.emit('event');
// 打印:
//   A
//   B

// callbackB 被移除了。
// 内部监听器数组为 [callbackA]
myEmitter.emit('event');
// 打印:
//   A