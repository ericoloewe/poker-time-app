/**
 * MainStyles
 */
export class MainStyles {
    values = {};

    get(item) {
        return this.values[item];
    }

    uses(values) {
        this.values = Object.assign(this.values, values);
    }
}