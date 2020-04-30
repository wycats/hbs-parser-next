import { any } from "../../combinators";
import { ARG } from "../../hbs";
import "../../tokens";
import { AbstractCombinator } from "../base";
import Id from "./id";
import SomeToken from "./token";
export default class Head extends AbstractCombinator {
    constructor(disallowedKeywords) {
        super();
        this.disallowedKeywords = disallowedKeywords;
        this.id = new SomeToken(new Id(disallowedKeywords), "Identifier" /* Identifier */);
    }
    get name() {
        if (this.disallowedKeywords) {
            return `HEAD • not ${JSON.stringify(this.disallowedKeywords)}`;
        }
        else {
            return "HEAD";
        }
    }
    invoke(input) {
        return input.invoke(any("HEAD", ARG, this.id));
    }
}
