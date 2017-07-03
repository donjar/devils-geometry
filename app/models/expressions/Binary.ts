import Expression from './Expression';

export default abstract class Binary extends Expression {
  left: Expression
  right: Expression

  constructor(left, right) {
    super()
    this.left = left
    this.right = right
  }

  abstract simplify(): Expression
}
