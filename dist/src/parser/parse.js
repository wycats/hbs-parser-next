import "../read/read";
import { ParseTracer } from "./debug";
import * as a from "./create-node";
import { ParserArrow } from "./shape";
import { TopLevelArrow } from "./shapes/top-level";
import TokensIterator, { TOKENS } from "./tokens-iterator";
import { range } from "../span";
export default function parse({ input, source, logging, }) {
    let tracer = new ParseTracer(input);
    let iterator = new TokensIterator(input.children, {
        source,
        tracer,
    });
    try {
        let topLevel = TopLevelArrow.repeat()
            .fallible()
            .checkNext(ParserArrow.start().eof())
            .ifOk(nodes => a.root(nodes, range(...nodes)))
            .label("root");
        let state = iterator.arrowState;
        let [, root] = topLevel.invoke(state);
        return root;
    }
    finally {
        if (logging === "Print" /* Print */) {
            tracer.print(iterator[TOKENS], iterator.source);
        }
    }
}
