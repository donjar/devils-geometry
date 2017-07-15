import Integer from './Integer'

export default class Fraction {
  private n: Integer
  private d: Integer

  constructor(n: Integer | number, d: Integer | number) {
    this.n = new Integer(n)
    this.d = new Integer(d)
    this.simplify()
  }

  get numerator() {
    return this.n
  }

  get denominator() {
    return this.d
  }

  add(other: Fraction) { // a/b + c/d = (ad + bc)/bd
    return new Fraction(this.n.mul(other.d).add(this.d.mul(other.n)),
                        this.d.mul(other.d))
  }

  sub(other: Fraction) { // a/b - c/d = (ad - bc)/bd
    return new Fraction(this.n.mul(other.d).sub(this.d.mul(other.n)),
                        this.d.mul(other.d))
  }

  mul(other: Fraction) { // a/b * c/d = ac/bd
    return new Fraction(this.n.mul(other.n), this.d.mul(other.d))
  }

  div(other: Fraction) { // a/b / c/d = ad/bc
    return new Fraction(this.n.mul(other.d), this.d.mul(other.n))
  }

  simplify() {
    const gcd = this.n.gcd(this.d)
    this.n = this.n.integerDiv(gcd)
    this.d = this.d.integerDiv(gcd)
  }
}
