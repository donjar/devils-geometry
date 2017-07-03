import Binary from './Binary'
import Expression from './Expression'
import Num from './Num'

export default class Add extends Binary {
  simplify(): Expression {
    if (this.left instanceof Num && (<Num> this.left).content == 0) {
      return this.right
    }
    if (this.right instanceof Num && (<Num> this.right).content == 0) {
      return this.left
    }
    if (this.left instanceof Num && this.right instanceof Num) {
      return new Num((<Num> this.left).content + (<Num> this.right).content)
    }
    return this
  }

  negate(): Expression {
    // -(x + y) = -x - y
    return new Add(this.left.negate(), this.right.negate())
  }
}
