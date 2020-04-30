export const enum AstNodeType {
  Root = "Root",
  Text = "Text",
  Interpolate = "Interpolate",
  // Internal
  NamedArgument = "NamedArgument",
  NamedArguments = "NamedArguments",
  PositionalArguments = "PositionalArguments",
  Member = "Member",
  CallBody = "CallBody",
  OpenBlock = "OpenBlock",
  BlockParams = "BlockParams",
  CloseBlock = "CloseBlock",
  // Expressions
  Block = "Block",
  Call = "Call",
  Path = "Path",
  String = "String",
  Number = "Number",
  ThisReference = "ThisReference",
  VarReference = "VarReference",
  ArgReference = "ArgReference",
}
