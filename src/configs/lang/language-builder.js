import * as PTBR from "./pt-br/index";

export class LanguageBuilder {
    static _actualLanguage = PTBR;

    static getActualLanguage() {
        return _actualLanguage;
    }

    static build(config) {
        return propertieFromArray(config.split("."), LanguageBuilder._actualLanguage);

        function propertieFromArray(params, object) {
            if (typeof (object) === "object") {
                return propertieFromArray(params, object[params.shift()]);
            } else {
                return object;
            }
        }
    }
}