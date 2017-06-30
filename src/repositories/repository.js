import uuidv1 from "uuid/v1";
import {
    AsyncStorage
} from "react-native";
import {
    Logger
} from "../configs/index";

const LOGGER = new Logger(Repository);

/**
 * @description repository
 */
export class Repository {
    constructor() {}

    async save(item) {
        try {
            await AsyncStorage.setItem(this._formatItemHash(await this._getNextUUID()), value, this._logError);
        } catch (ex) {
            LOGGER.error("We had some errors to save data", ex);
        }
    }

    async get(uuid) {
        let item = null;

        try {
            item = await AsyncStorage.getItem(this._formatItemHash(uuid), this._logError);
        } catch (ex) {
            LOGGER.error("We had some errors to retrieve data", ex);
        }

        return item;
    }

    async list(from, to) {
        let items = [];

        try {
            let keys = this._getKeys(from, to);

            items = await AsyncStorage.multiGet(keys, this._logError);
        } catch (ex) {
            LOGGER.error("We had some errors to retrieve data", ex);
        }

        return item;
    }

    async _getNextUUID() {
        var nextId = uuidv1();

        try {
            while ((await this.get(nextId)) !== null) {
                nextId = uuidv1();
            }
        } catch (ex) {
            let errorMessage = "We had some errors to get the next UUID";

            LOGGER.error(errorMessage, ex);

            throw new Error(errorMessage);
        }

        return nextId;
    }

    async _getKeys(from, to) {
        let keys = [];

        try {
            keys = await AsyncStorage.getAllKeys();
        } catch (ex) {
            LOGGER.error("We had some errors to retrieve keys", ex);
        }

        return keys.filter((k) => k.contains(this._formatModelHash())).slice(from, to);
    }

    _formatModelHash() {
        return String.format('@{0}', this.constructor.name);
    }

    _formatItemHash(uuid) {
        return String.format('{0}:{1}', this._formatModelHash(), uuid);
    }

    _logError() {
        LOGGER.error.apply(LOGGER, arguments);
    }
}