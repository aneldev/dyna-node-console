# About

Makes the NodeJS logs little but prettier. Adds the type of log and timestamp.

Applied only on nodejs environments.

# Usage

```
import "dyna-node-console";
```

# Example

```
  LOG   2018-10-20 09:31:46 Example of log
i INFO  2018-10-20 09:31:46 Example of info
! WARN  2018-10-20 09:31:46 Example of warn
X ERROR 2018-10-20 09:31:46 Example of error
> DEBUG 2018-10-20 09:31:46 Example of debug

  LOG   2018-10-20 09:31:46 Example of object arg { objectSample: { name: 'John' } }
```

