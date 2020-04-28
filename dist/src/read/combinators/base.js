import { map } from "../utils";
export class AbstractCombinator {
    map(mapper) {
        return map(this, mapper);
    }
}
