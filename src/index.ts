const isNode:boolean = typeof process !== "undefined" && !!process.cwd;

if (isNode){
  const cl = console.log;
  const ci = console.info;
  const cd = console.debug;
  const cw = console.warn;
  const ce = console.error;

  enum ELogType {
    LOG ="LOG",
    INFO ="INFO",
    DEBUG ="DEBUG",
    WARN ="WARN",
    ERROR ="ERROR",
    TIME ="TIME",
  }

  const isTime = (args: any[]): boolean => args[0] === "%s: %sms";
  const isFormatted = (args: any[]): boolean => args.length > 1 && typeof args[0] === "string" && args[0].indexOf("%") > -1;
  const getLabel = (logType:ELogType)=>{
    switch (logType) {
      case ELogType.LOG: return '⚫ LOG  ';
      case ELogType.INFO: return '🔵 INFO ';
      case ELogType.DEBUG: return '🐞 DEBUG';
      case ELogType.WARN: return '🔶 WARN ';
      case ELogType.ERROR: return '🔴 ERROR';
      case ELogType.TIME: return '⏱ TIME ';
    }
  };

  const buildArgs = (logType:ELogType, args: any[]): any[] => {
    const now: Date = new Date;
    const ms: number = now.getMilliseconds();
    const timeStamp = `${(new Date).toLocaleString()}.${ms}`;
    const _isTime = isTime(args);
    const _isFormatted = isFormatted(args);

    if (_isTime) logType=ELogType.TIME;

    let prefix: string = `${getLabel(logType)} ${timeStamp}`;

    if (_isFormatted) {
      return [].concat(`${prefix} ${args[0]}`, args.slice(1))
    }
    else {
      return [].concat(prefix, args);
    }
  };

  console.log = (...args): void => cl(...buildArgs(ELogType.LOG, args));
  console.info = (...args): void => ci(...buildArgs(ELogType.INFO, args));
  console.debug = (...args): void => cd(...buildArgs(ELogType.DEBUG, args));
  console.warn = (...args): void => cw(...buildArgs(ELogType.WARN, args));
  console.error = (...args): void => ce(...buildArgs(ELogType.ERROR, args));
}