import { r, SourceSpan, a } from "hbs-parser-next";
declare module "qunit" {
    interface Assert {
        tree(this: Assert, source: string, expectedRead: r.CurriedToken | r.CurriedToken[], expectedAst?: a.CurriedNode | a.CurriedNode[]): void;
        readError(this: Assert, source: string, expected: {
            reason: string;
            span: SourceSpan;
        }): void;
    }
    interface Config {
        logging: true | undefined;
    }
}
//# sourceMappingURL=hbs.d.ts.map