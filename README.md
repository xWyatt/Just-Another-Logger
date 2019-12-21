
# Just Another Logger
A zero dependency "logger" that wraps the `console` with color and a timestamp

### Installing
Install into your project with  `npm`

```
npm install @xwyatt/just-another-logger --save
```

After installing, require the module and utilize the avaliable methods
```
const Logger = require("@xwyatt/just-another-logger");
```

## Usage
Just Another Logger has 5 printing methods, and one method to toggle method.

### Available Methods
| method(`expected type`) | Description |
| -- | -- |
| setDebug(`boolean`) | This toggles debug mode. When on (`true`) .debug() messages will print; .debug() messages will be ignored if off (`false`) |
| debug(`string`) | This prints a debug message. This is Cyan in color and is prefixed with "DEBUG" |
| info(`string`) | This prints an informational message. This is grey in color and is prefixed with "INFO" |
| warning(`string`)  | This prints a warning message. This is yellow in color and is prefixed with "WARN" |
| error(`string`) | This prints an error message. This is red in color and is prefixed with "ERROR" |
| critical(`string`) | This prints a critical error message. This is white in color, with a red background, and prefixed with "CRITICAL" |


### Example Usage
```
const Logger = require("@xwyatt/just-another-logger");

Logger.debug("This will never get printed, because debug isn't toggled!");
Logger.setDebug(true); // Enable Debug, it is disabled by default
Logger.debug("This will print in a blue color with a timestamp!");

Logger.info("A user has just signed in!"); // Informational Message
Logger.warning("Something bad might happen"); // Yellow warning message!
Logger.error("Something bad happened.."); // Error Message
Logger.critical("This is a really bad error"); // Critical Error
```

Output from the above usage:
![Example Usage Picture](/img/exampleUsageOutput.jpg?raw=true "exampleUsageOutput")


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
