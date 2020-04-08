import { b } from "hbs-parser-next";
declare module "qunit" {
    interface Assert {
        tree(this: Assert, source: string, ...expected: b.CurriedToken[]): void;
    }
    interface Config {
        logging: true | undefined;
    }
}
//# sourceMappingURL=hbs.d.ts.map