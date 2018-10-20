import "../utils/unhandledPromiseRejections";
import "../src"

console.time('Time elapsed');
console.log('Example of log');
console.info('Example of info');
console.warn('Example of warn');
console.error('Example of error');
console.debug('Example of debug');
console.log('Text and object', {objectSample: {name: "John"}});
console.log({objectSample: {name: "John"}}, "object and text");
console.log({objectSample: {name: "John"}}, {objectSample: {name: "John"}});
console.log();
console.timeEnd('Time elapsed');
