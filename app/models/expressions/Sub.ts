import Binary from './Binary'
import Expression from './Expression'
import Num from './Num'
import Add from './Add'

export default class Sub extends Binary {
  simplify(): Expression {
    if (this.left instanceof Num && (<Num> this.left).content === 0) {
      return this
    }
    return new Add(this.left, this.right.negate())
  }

  negate(): Expression {
    // -(a - b) = -a + b
    return new Add(this.left.negate(), this.right)
  }
}
