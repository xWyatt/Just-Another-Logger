// ASCII color escape sequences
// Font modifiers
const RESET_M = '\x1b[0m'
const BRIGHT_M = '\x1b[1m'
const DIM_M = '\x1b[2m'
const UNDERSCORE_M = '\x1b[4m'
const BLINK_M = '\x1b[5m'
const REVERSE_M = '\x1b[7m'
const HIDDEN_M = '\x1b[8m'
// Foreground
const BLACK_F = '\x1b[30m'
const RED_F = '\x1b[31m'
const GREEN_F = '\x1b[32m'
const YELLOW_F = '\x1b[33m'
const BLUE_F = '\x1b[34m'
const MAGENTA_F = '\x1b[35m'
const CYAN_F = '\x1b[36m'
const WHITE_F = '\x1b[37m'
// Background
const BLACK_B = '\x1b[40m'
const RED_B = '\x1b[41m'
const GREEN_B = '\x1b[42m'
const YELLOW_B = '\x1b[43m'
const BLUE_B = '\x1b[44m'
const MAGENTA_B = '\x1b[45m'
const CYANE_B = '\x1b[46m'
const WHITE_B = '\x1b[47m'

const getTimestamp = () => {
  return (new Date).toLocaleString();
}


let canDebug = false;

if (process.env.DEBUG) {
  canDebug = true;
}

const toggleDebug = (flag) => {
  canDebug = flag;
}

// Debug logging, only functions if canDebug flag is true
const debug = (message) => {
  if (canDebug) {
    const msg = `${CYAN_F}DEBUG - ${DIM_M}${getTimestamp()}: ${RESET_M}${message}${RESET_M}`;

    console.log(msg);
  }
}

// General information
const info = (message) => {
  const msg = `${WHITE_F}INFO  - ${DIM_M}${getTimestamp()}: ${RESET_M}${message}${RESET_M}`;

  console.log(msg);
}

// Warning
const warning = (message) => {
  const msg = `${YELLOW_F}WARN  - ${DIM_M}${getTimestamp()}: ${RESET_M}${YELLOW_F}${message}${RESET_M}`;

  console.log(msg);
}

// Error
const error = (message) => {
  const msg = `${RED_F}ERROR - ${DIM_M}${getTimestamp()}: ${RESET_M}${RED_F}${message}${RESET_M}`;

  console.error(msg);
}

// Critical
const critical = (message) => {
  const msg = `${WHITE_F}${RED_B}CRITICAL - ${DIM_M}${getTimestamp()}: ${RESET_M}${RED_B}${WHITE_F}${message}${RESET_M}`;

  console.error(msg);
}

module.exports = {
  debug: debug,
  log: info,
  info: info,
  warning: warning,
  error: error,
  critical: critical
}
