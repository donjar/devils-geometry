import Unary from './Unary'
import Expression from './Expression'

export default class Num extends Unary {
  content: number

  simplify(): Num {
    return this
  }

  negate(): Num {
    return new Num(-this.content)
  }
}
