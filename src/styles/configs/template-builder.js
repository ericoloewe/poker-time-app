import { Main } from "../../containers/index";

export class TemplateBuilder {
    static extend(content) {
        return new Main().render(content);
    }
}