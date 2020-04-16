import Component from "@glimmerx/component";
import { ReadTrace, Snippet, Result, Debuggable } from "hbs-parser-next";
import type GuidService from "./guid";
import TraceNodeModel from "./models/trace-node";
import type { Details } from "./read-node";
declare class TraceNode extends Component {
    #private;
    static template: void;
    args: {
        node: ReadTrace;
        isDeepExpanded: boolean | undefined;
        details: Details;
    };
    guid: GuidService;
    isShallowExpanded: boolean;
    localDeepExpanded: boolean;
    get model(): TraceNodeModel;
    get output(): Result<[Snippet, Debuggable]>;
    get isExpandable(): boolean;
    get isShallowExpandable(): boolean;
    get isExpanded(): boolean;
    get isDeepExpanded(): boolean;
    get isPinned(): boolean;
    hoverDetails(): void;
    togglePin(): void;
    toggleExpanded(e: Event): void;
    toggleDeepExpanded(e: Event): void;
}
export default TraceNode;
//# sourceMappingURL=trace-node.d.ts.map