/**
 * Style utils
 */

export class StyleUtils {
    static transformByType(type, value) {
        let transformObject = {
            transform: []
        };
        let transformTypeObject = {};

        transformTypeObject[type] = value;
        transformObject.transform.push(transformTypeObject);
        
        return transformObject;
    }
}