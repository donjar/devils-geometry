export default abstract class Expression {
  abstract simplify(): Expression
  abstract negate(): Expression
}
