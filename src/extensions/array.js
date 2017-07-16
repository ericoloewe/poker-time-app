/**
 * Extensions / Array
 */

if (!Array.prototype.constains) {
    Array.prototype.constains = function (value) {
        return this.indexOf(value) !== -1;
    }
}