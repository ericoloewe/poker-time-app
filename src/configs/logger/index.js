/**
 * @description logger
 */
export class Logger {
    constructor(actualInstance) {
        this.actualInstance = actualInstance
    }

    log() {
        this._logOfType("log", arguments);
    }

    debug() {
        this._logOfType("debug", arguments);
    }

    info() {
        this._logOfType("info", arguments);
    }

    warn() {
        this._logOfType("warn", arguments);
    }

    error() {
        this._logOfType("error", arguments);
    }

    _logOfType(type, args) {
        const defaultLog = [
            String.format("{0}: {1}\n", type.toUpperCase()),
            String.format("{0}: ", this.actualInstance.name)
        ];

        console[type].apply(console, defaultLog.concat(args));
    }
}