import "../utils/unhandledPromiseRejections";
import "../src";

console.time('Time elapsed');

console.log('--- Console log, info, debug, warn and error');
console.log('Example of log');
console.info('Example of info');
console.warn('Example of warn');
console.debug('Example of debug');
console.error('Example of error');
console.log('--- Console objects');
console.log('Text and object', {objectSample: {name: "John"}});
console.log({objectSample: {name: "John"}}, "object and text");
console.log({objectSample: {name: "John"}}, {objectSample: {name: "John"}});
console.log('--- Console without params');
console.log();
console.log('--- Console time');
console.timeEnd('Time elapsed');
console.log('--- ...bye');
