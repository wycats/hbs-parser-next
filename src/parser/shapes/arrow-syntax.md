The core arrow operations correspond to a pseudo-syntax that can describe the combination of any arrows.

# Literals

Right now, literals are:

1. JSON string
2. JSON number
3. JSON boolean
4. `null`
5. `$ARRAY(...literal)`
6. `$DICT(key: literal, ...)`

# Source Language

Escaping into the source language is done via Rust's raw string literal syntax.

# Expressions

Every form in this document produces an expression, as defined by the interfaces in `core-operations.ts`.

# Conventions

Identifiers that begin with a capital letter are reserved for core operations.

# Static Invocation

You can build a host-provided arrow using static invocation syntax (using parentheses).

```rust
takeToken("+")
```

Expressions using parentheses are completely evaluated before runtime.

# Core Operations

## Id

```rust
ID
```

## Source

```rust
SOURCE(<literal>)
```

## Input

```rust
INPUT
```

## Pure

```rust
PURE r"{...}"
```

# Blocks

## Invoking

You invoke an arrow through `->` syntax

```rust
VOID -> arrow1
```

```rust
SOURCE(1) -> arrow2
```

There is a special shorthand for source arrows (which begin with `VOID`):

```rust
-> arrow1
```

The arrow must unambiguously start an expression.

## Block Syntax

The `{}` syntax allows you to create a single compound arrow by sequentially evaluating arrows.

```rust
{
  arrow1
  arrow2
}
```

This corresponds to:

```
pipeline(drop(arrow1), arrow2)
```

## The `produce!` Syntax

```rust
{
  -> arrow1
  produce! arrow2
  -> arrow3
}
```

This entire expression produces a source arrow whose return value is the same as `arrow2`. This syntax
is useful in combination with question mark syntax below.

## Let Variables

You can use variable names to save off the result of an arrow and use it later. You can't peek
inside the actual result of the arrow. You can simply use it later as the input into other arrows.

```rust
{
  let x = SOURCE(1) -> arrow1
  x -> arrow2
}
```

This corresponds to

```ts
let x = pipeline(
  source(() => 1),
  arrow1
);
pipeline(x, arrow2);
```

# Result Operations

## Question Mark

```rust
{
  <arrow1>?
  <arrow2>?
}
```

This corresponds to:

```
mapResult(allOk(arrow1, arrow2), { ifOk: (arr) => arr.last, ifErr: id })
```

This allows you to do something like

```rust
let composed = {
  -> maybeTakeWs?
  produce! [
    -> takeToken("+")?
    -> takeInt()?
  ]
  -> maybeTakeWs?
}
```

# Combinator Operations

## Pipeline

```rust
<left> -> <right>
```

## MapInput

```rust
<left> >- <right>
```

## Merge

```rust
[<left>, <right>]
```

# List Operations

## Nth

```rust
<arrow>[n]
```

## Last

```rust
LAST(<arrow>)
```

## Reduce

```rust
<list> => <reducer>
```

Example:

```rust
let iteration = |input| {
  let accumulator = input[0]
  let value = input[1]

  let append = PURE r#"
    ([accum, input]) => {
      accum.push(input);
      return accum;
    }
  "#

  [accumulator, value -> map] -> append // iterate
}

let initializer =
let input = [$ARRAY(), INPUT]

input => iteration
```

# Errors

## MapResult

```rust
if <left> {
  <ifOk>
} else {
  <ifErr>
}
```

## BothOk

```rust
[<left>?, <right>?]
```

## AllOk

```rust
[...<arrows>?]
```

## FirstOk

```rust
<arrow> | <arrow> ...
```

# Stateful

## Repeat

```rust
COLLECT <arrow>
```

This allows you to do something like:

```rust
COLLECT {
  -> maybeTakeWS?
  produce! [
    -> takeInt?
    -> takePlus?
    -> takeInt?
  ]
  -> maybeTakeWS?
}
```

# Math Parser Example

```rust
fn takeWS {
  STATE -> PURE r#"
    state => state.parser.match(/^\s+/)
  "#
}

fn maybeWS {
  takeWS -> PURE r#"span => ok(span)"#
}

fn int {
  STATE -> PURE r#"
    state => state.parser.match(/^\s+/)
  "# -> PURE r#"
    leafTok("Number")
  "#
}

fn expr {
  takeParens | takeInt
}

fn exact(chars) {
  STATE -> PURE r#"
    chars => state => state.parser.tryMatch(chars)
  "#
}

fn keyword(type, chars) {
  let span = -> exact(chars)

  span? -> PURE r#"
    (type, chars) => span => ok(leafTok(type)(span))
  "#
}

fn plus {
  keyword("Plus", "+")
}

fn sum {
  let tokens = [
    -> expr?
    -> maybeWS
    -> plus?
    -> maybeWS
    -> expr?
  ]

  tokens -> PURE r#"
    tokens => new NestedToken("Sum", tokens)
  "#
}

fn parens {
  let tokens = [
    -> open-paren?
    -> maybeWS
    -> sum?
    -> maybeWS
    -> close-paren?
  ]

  tokens -> PURE r#"
    tokens => new NestedToken("Parens", tokens)
  "#
}

let plus = keyword("Plus", "+")
let open-paren = keyword("OpenParen", "(")
let close-paren = keyword("CloseParen", ")")
```
