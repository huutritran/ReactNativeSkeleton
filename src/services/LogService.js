const isDebug = true;

const logServiceDebug = console;

const logServiceRelease = {
  log: () => {},
};

const LogService = isDebug ? logServiceDebug : logServiceRelease;

export default LogService;
