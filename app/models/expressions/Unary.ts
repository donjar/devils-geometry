import Expression from './Expression'

export default abstract class Unary extends Expression {
  content: any
  abstract simplify(): Expression
  abstract negate(): Expression

  constructor(content) {
    super()
    this.content = content
  }
}
