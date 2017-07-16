import Fraction from './Fraction';

export default class Integer {
  private n: number;

  constructor(n: any) {
    if (n instanceof Integer) {
      this.n = n.number;
    } else if (n !== parseInt(n, 10)) {
        throw new Error(`Construct the Integer class with an integer, not ${n}.`);
    } else {
      this.n = n;
    }
  }

  public toFraction() {
    return new Fraction(this, new Integer(1));
  }

  public add(other) {
    return new Integer(this.n + other.n);
  }

  public sub(other) {
    return new Integer(this.n - other.n);
  }

  public mul(other) {
    return new Integer(this.n * other.n);
  }

  public div(other) {
    if (other.number === 0) { throw new Error('Division by zero not allowed.'); }
    return new Fraction(this, other);
  }

  public integerDiv(other) {
    if (other.number === 0) { throw new Error('Integer division by zero not allowed.'); }
    return new Integer(Math.floor(this.n / other.n));
  }

  public abs() {
    return (this.n < 0) ? new Integer(-this.n) : this;
  }

  public equals(other) {
    return this.n === other.n;
  }

  public lessThan(other) {
    return this.n < other.n;
  }

  public lessThanOrEqualTo(other) {
    return this.n <= other.n;
  }

  public greaterThan(other) {
    return this.n > other.n;
  }

  public greaterThanOrEqualTo(other) {
    return this.n >= other.n;
  }

  get number() {
    return this.n;
  }

  public isZero() {
    return this.n === 0;
  }

  public gcd(other) {
    const left = this.abs();
    const right = other.abs();
    const min = (left.lessThanOrEqualTo(right)) ? left : right;
    const max = (left.greaterThanOrEqualTo(right)) ? left : right;

    return (min.isZero()) ? max : min.gcd(max.sub(min));
  }
}
