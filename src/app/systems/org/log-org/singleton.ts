export default class Logger {
  private static instance: Logger

  private constructor() {
    // init code
  }

  public static new(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }

    return Logger.instance
  }

  public someBusinessLogic() {
    return 'Logger'
  }
}
