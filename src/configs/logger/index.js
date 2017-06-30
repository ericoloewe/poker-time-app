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
        let instanceName = "Logger";

        if (this.actualInstance !== undefined) {
            instanceName = this.actualInstance.name;
        }

        const defaultLog = [
            `${new Date()}: ${type.toUpperCase()}\n ${instanceName}:`
        ];

        console[type].apply(console, defaultLog.concat(args));
    }
}