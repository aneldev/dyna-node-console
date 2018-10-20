# About

Makes the NodeJS logs little but prettier. Adds the type of log and timestamp.

Applied only on nodejs environments.

# Usage

```
import "dyna-node-console";
```

# Example

```
⚪ LOG   2018-10-20 19:06:48.155 --- Console log, info, debug, warn and error
⚪ LOG   2018-10-20 19:06:48.159 Example of log
🔵 INFO  2018-10-20 19:06:48.159 Example of info
🔶 WARN  2018-10-20 19:06:48.159 Example of warn
🐞 DEBUG 2018-10-20 19:06:48.159 Example of debug
🔴 ERROR 2018-10-20 19:06:48.159 Example of error
⚪ LOG   2018-10-20 19:06:48.160 --- Console objects
⚪ LOG   2018-10-20 19:06:48.160 Text and object { objectSample: { name: 'John' } }
⚪ LOG   2018-10-20 19:06:48.161 { objectSample: { name: 'John' } } object and text
⚪ LOG   2018-10-20 19:06:48.161 { objectSample: { name: 'John' } } { objectSample: { name: 'John' } }
⚪ LOG   2018-10-20 19:06:48.161 --- Console without params
⚪ LOG   2018-10-20 19:06:48.161
⚪ LOG   2018-10-20 19:06:48.161 --- Console time
⏱ TIME  2018-10-20 19:06:48.161 Time elapsed: 6.179ms
⚪ LOG   2018-10-20 19:06:48.162 --- ...bye
```

