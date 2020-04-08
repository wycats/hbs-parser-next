import { b, parse, ast } from "hbs-parser-next";
import { module, test } from "qunit";

module("[READER] HTML");

test("parsing text", assert => {
  let tree = b.root(b.text("hello"));
  let result = parse(tree.root, tree.source);

  assert.deepEqual(result, {
    type: ast.NodeType.Root,
    span: { start: 0, end: 5 },
    children: [
      {
        type: ast.NodeType.Text,
        span: { start: 0, end: 5 },
      },
    ],
  });
});
