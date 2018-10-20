const isNode:boolean = typeof process !== "undefined" && !!process.cwd;

if (isNode){
  const cl = console.log;
  const ci = console.info;
  const cd = console.debug;
  const cw = console.warn;
  const ce = console.error;

  console.log = (...args): void => cl(`  LOG   ${(new Date).toLocaleString()}`, ...args);
  console.info = (...args): void => ci(`i INFO  ${(new Date).toLocaleString()}`, ...args);
  console.debug = (...args): void => cd(`> DEBUG ${(new Date).toLocaleString()}`, ...args);
  console.warn = (...args): void => cw(`! WARN  ${(new Date).toLocaleString()}`, ...args);
  console.error = (...args): void => ce(`X ERROR ${(new Date).toLocaleString()}`, ...args);
}