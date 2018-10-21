import chalk from "chalk";

const isNode:boolean = typeof process !== "undefined" && !!process.cwd;

(()=>{
  if (isNode){
    if ((process as any)._dynaNodeConsole) return; // is already applied
    (process as any)._dynaNodeConsole =true;

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
        case ELogType.LOG: return '⚪ LOG  ';
        case ELogType.INFO: return '🔵 INFO ';
        case ELogType.DEBUG: return '🐞 DEBUG';
        case ELogType.WARN: return '🔶 WARN ';
        case ELogType.ERROR: return '🔴 ERROR';
        case ELogType.TIME: return '⏱ TIME ';
      }
    };

    const getColorMethod = (logType:ELogType): any => {
      switch (logType) {
        case ELogType.LOG: return (text:string) => text;
        case ELogType.INFO: return chalk.blueBright;
        case ELogType.DEBUG: return chalk.blue;
        case ELogType.WARN: return chalk.yellow;
        case ELogType.ERROR: return chalk.red;
        case ELogType.TIME: return chalk.green;
      }
    };

    const colorArgs = (logType: ELogType, args: any[]): any[] => {
      const colorMethod: any = getColorMethod(logType);
      return args.map((arg: any) => {
        if (
          typeof arg === "string" ||
          typeof arg === "number" ||
          typeof arg === "boolean" ||
          arg instanceof Date
        ) return colorMethod(arg);
        return arg;
      });
    };

    const buildArgs = (logType:ELogType, args: any[]): any[] => {
      const now: Date = new Date;
      const ms: number = now.getMilliseconds();
      const timeStamp = `${(new Date).toLocaleString()}.${("000" + ms).substr(-3)}`;
      const _isTime = isTime(args);
      const _isFormatted = isFormatted(args);
      let output: any[];

      if (_isTime) logType = ELogType.TIME;

      let prefix: string = `${getLabel(logType)} ${timeStamp}`;

      if (_isFormatted) {
        output = [].concat(`${prefix} ${args[0]}`, args.slice(1))
      }
      else {
        output = [].concat(prefix, args);
      }

      output = colorArgs(logType, output);

      return output;
    };

    console.log = (...args): void => cl(...buildArgs(ELogType.LOG, args));
    console.info = (...args): void => ci(...buildArgs(ELogType.INFO, args));
    console.debug = (...args): void => cd(...buildArgs(ELogType.DEBUG, args));
    console.warn = (...args): void => cw(...buildArgs(ELogType.WARN, args));
    console.error = (...args): void => ce(...buildArgs(ELogType.ERROR, args));
  }
})();
