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
    async save(item) {
        try {
            if (typeof (item.id) !== "string") {
                item.id = await this._getNextUUID();

                await AsyncStorage.setItem(this._formatItemHash(item.id), JSON.stringify(item), this._logError);
            } else {
                await AsyncStorage.mergeItem(this._formatItemHash(item.id), JSON.stringify(item), this._logError);
            }
        } catch (ex) {
            LOGGER.error("We had some errors to save data", ex);
        }

        return item.id || null;
    }

    async get(uuid) {
        let item = null;

        try {
            item = JSON.parse(await AsyncStorage.getItem(this._formatItemHash(uuid), this._logError));
        } catch (ex) {
            LOGGER.error("We had some errors to retrieve data", ex);
        }

        return item;
    }

    async list(from, to, sort) {
        let items = [];

        try {
            let keys = await this._getKeys(from, to, sort);

            items = await AsyncStorage.multiGet(keys, this._logError);
        } catch (ex) {
            LOGGER.error("We had some errors to retrieve data", ex);
        }

        return items.map(keySet => {
            return JSON.parse(keySet[1]);
        });
    }

    async remove(uuid) {
        try {
            await AsyncStorage.removeItem(this._formatItemHash(uuid), this._logError);
        } catch (ex) {
            LOGGER.error("We had some errors to delete data", ex);
        }
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

    async _getKeys(from, to, sort = null) {
        let keys = [];

        try {
            keys = (await AsyncStorage.getAllKeys()).filter(k => k.contains(this._formatModelHash()));
        } catch (ex) {
            LOGGER.error("We had some errors to retrieve keys", ex);
        }

        if (sort !== null) {
            keys = keys.sort(sort);
        }

        return keys.slice(from, to);
    }

    _formatModelHash() {
        return `@${this.constructor.name}`;
    }

    _formatItemHash(uuid) {
        return `${this._formatModelHash()}:${uuid}`;
    }

    _logError(error) {
        if (error !== null) {
            LOGGER.error.apply(LOGGER, arguments);
        }
    }
}