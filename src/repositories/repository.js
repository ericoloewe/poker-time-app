import uuidv1 from "uuid/v1";
import {
    AsyncStorage
} from "react-native";
import {
    LOGGER
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

    _formatItemHash(uuid) {
        return String.format('@{0}:{1}', this.constructor.name, uuid);
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

    _logError() {
        LOGGER.error.apply(LOGGER, arguments);
    }
}