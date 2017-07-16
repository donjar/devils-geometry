import { MathError } from '../helpers/Errors';
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

  public add(other: Integer) {
    return new Integer(this.n + other.n);
  }

  public sub(other: Integer) {
    return new Integer(this.n - other.n);
  }

  public mul(other: Integer) {
    return new Integer(this.n * other.n);
  }

  public div(other: Integer) {
    if (other.number === 0) { throw new MathError('Division by zero not allowed.'); }
    return new Fraction(this, other);
  }

  public integerDiv(other: Integer) {
    if (other.number === 0) { throw new MathError('Integer division by zero not allowed.'); }
    return new Integer(Math.floor(this.n / other.n));
  }

  public abs() {
    return (this.n < 0) ? this.negate() : this;
  }

  public equals(other: Integer) {
    return this.n === other.n;
  }

  public lessThan(other: Integer) {
    return this.n < other.n;
  }

  public lessThanOrEqualTo(other: Integer) {
    return this.n <= other.n;
  }

  public greaterThan(other: Integer) {
    return this.n > other.n;
  }

  public greaterThanOrEqualTo(other: Integer) {
    return this.n >= other.n;
  }

  public get number() {
    return this.n;
  }

  public isZero() {
    return this.n === 0;
  }

  public gcd(other: Integer) {
    const left = this.abs();
    const right = other.abs();
    const min = (left.lessThanOrEqualTo(right)) ? left : right;
    const max = (left.greaterThanOrEqualTo(right)) ? left : right;

    return (min.isZero()) ? max : min.gcd(max.sub(min));
  }

  public negate() {
    return new Integer(-this.n);
  }
}
