import Component from "@glimmerx/component";
import { tokens, ReadTrace, Result } from "hbs-parser-next";
declare type ParseResult = {
    root: Result<tokens.RootToken>;
    trace: ReadTrace;
};
export default class Parsed extends Component {
    #private;
    static template: void;
    args: {
        source: string;
    };
    perf: number;
    get parsed(): ParseResult;
}
export {};
//# sourceMappingURL=parsed.d.ts.map