const isNode:boolean = typeof process !== "undefined" && !!process.cwd;

if (isNode){
  const cl = console.log;
  const ci = console.info;
  const cd = console.debug;
  const cw = console.warn;
  const ce = console.error;

  const isTime = (args: any[]): boolean => args[0] === "%s: %sms";
  const isFormatted = (args: any[]): boolean => args.length > 1 && typeof args[0] === "string" && args[0].indexOf("%") > -1;

  const buildArgs = (prefix: string, args: any[]): any[] => {
    debugger;
    const now: Date = new Date;
    const ms: number = now.getMilliseconds();
    const timeStamp = `${(new Date).toLocaleString()}.${ms}`;
    const _isTime = isTime(args);
    const _isFormatted = isFormatted(args);

    if (_isTime) prefix = "t TIME ";

    prefix = `${prefix} ${timeStamp}`;

    if (_isFormatted) {
      return [].concat(`${prefix} ${args[0]}`, args.slice(1))
    }
    else {
      return [].concat(prefix, args);
    }
  };

  console.log = (...args): void => cl(...buildArgs("  LOG  ", args));
  console.info = (...args): void => ci(...buildArgs("i INFO ", args));
  console.debug = (...args): void => cd(...buildArgs("> DEBUG", args));
  console.warn = (...args): void => cw(...buildArgs("i WARN ", args));
  console.error = (...args): void => ce(...buildArgs("i ERROR", args));
}