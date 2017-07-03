import Unary from './Unary'
import Expression from './Expression'
import Sub from './Sub'

export default class Variable extends Unary {
  content: string

  simplify(): Variable {
    return this
  }

  negate(): Sub {
    return new Sub(0, this)
  }
}
