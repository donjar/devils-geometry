export default abstract class Expression {
  abstract add(other: Expression): Expression
  abstract sub(other: Expression): Expression
  abstract mul(other: Expression): Expression
  abstract div(other: Expression): Expression
}
