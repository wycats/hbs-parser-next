import Component from "@glimmerx/component";
import type { tokens, Result, ReadTrace } from "hbs-parser-next";
export declare class Details {
    active: object | undefined;
    isPinned: boolean;
}
export default class ReadNode extends Component {
    #private;
    static template: void;
    args: {
        node: Result<tokens.Token>;
        trace: ReadTrace;
    };
    get details(): Details;
    unpin(): void;
}
//# sourceMappingURL=read-node.d.ts.map