import { MathError } from '../helpers/Errors';
import Integer from './Integer';

export default class Fraction {
  private n: Integer;
  private d: Integer;

  constructor(n: Integer | number, d: Integer | number) {
    this.n = new Integer(n);
    this.d = new Integer(d);
    if (this.d.number === 0) { throw new MathError('Cannot pass in 0 as denominator.'); }
    this.simplify();
  }

  public get numerator() {
    return this.n;
  }

  public get denominator() {
    return this.d;
  }

  public add(other: Fraction) { // a/b + c/d = (ad + bc)/bd
    return new Fraction(this.n.mul(other.d).add(this.d.mul(other.n)),
                        this.d.mul(other.d));
  }

  public sub(other: Fraction) { // a/b - c/d = (ad - bc)/bd
    return new Fraction(this.n.mul(other.d).sub(this.d.mul(other.n)),
                        this.d.mul(other.d));
  }

  public mul(other: Fraction) { // a/b * c/d = ac/bd
    return new Fraction(this.n.mul(other.n), this.d.mul(other.d));
  }

  public div(other: Fraction) { // a/b / c/d = ad/bc
    return new Fraction(this.n.mul(other.d), this.d.mul(other.n));
  }

  public negate() {
    return new Fraction(this.n.negate(), this.d);
  }

  private simplify() {
    const gcd = this.n.gcd(this.d);
    this.n = this.n.integerDiv(gcd);
    this.d = this.d.integerDiv(gcd);
  }
}
