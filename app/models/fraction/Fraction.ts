import Integer from './Integer'

export default class Fraction {
  private n: Integer
  private d: Integer

  constructor(n: Integer | number, d: Integer | number) {
    this.n = new Integer(n)
    this.d = new Integer(d)
    this.simplify()
  }

  simplify() {
    const gcd = this.n.gcd(this.d)
    this.n = this.n.integerDiv(gcd)
    this.d = this.d.integerDiv(gcd)
  }
}
