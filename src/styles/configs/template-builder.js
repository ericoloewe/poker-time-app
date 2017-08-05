import { getTheme, brandLight } from '../index';
import { Main } from "../../containers/index";

export class TemplateBuilder {
    static _actualTheme = brandLight;

    static getActualTheme() {
        return getTheme(TemplateBuilder._actualTheme);
    }

    static extend(content, options) {
        return new Main().render(content, options);
    }
}