import Fraction from '../fraction/Fraction';
import Integer from '../fraction/Integer';
import { NotImplementedError } from '../helpers/Errors';
import Expression from './Expression';
import Polynomial from './Polynomial';

export default class Quotient extends Expression {
  private n: Polynomial;
  private d: Polynomial;

  constructor(numerator: Polynomial, denominator: Polynomial) {
    super();
    this.n = numerator;
    this.d = denominator;
  }

  public negate() {
    return new Quotient(this.n.negate(), this.d);
  }

  public get numerator() {
    return this.n;
  }

  public get denominator() {
    return this.d;
  }

  public add(other: Expression): Expression {
    if (other instanceof Polynomial) {
      return this.add(other.toQuotient());
    }

    if (other instanceof Quotient) { // a/b + c/d = (ad + bc)/bd
      const newNumerator = this.numerator.mul(other.denominator)
                                         .add(this.denominator.mul(other.numerator)) as Polynomial;
      const newDenominator = this.denominator.mul(other.denominator) as Polynomial;
      return new Quotient(newNumerator, newDenominator);
    }

    throw new NotImplementedError('Adding with the given expression is not yet supported.');
  }

  public mul(other: Expression): Expression {
    if (other instanceof Polynomial) {
      return this.mul(other.toQuotient());
    }

    if (other instanceof Quotient) {
      const newNumerator = this.numerator.mul(other.numerator) as Polynomial;
      const newDenominator = this.denominator.mul(other.denominator) as Polynomial;
      return new Quotient(newNumerator, newDenominator);
    }

    throw new NotImplementedError('Multiplying with the given expression is not yet supported.');
  }

  public div(other: Expression): Expression {
    if (other instanceof Polynomial) {
      return this.div(other.toQuotient());
    }

    if (other instanceof Quotient) { // a/b / c/d = ad/bc
      const newNumerator = this.numerator.mul(other.denominator) as Polynomial;
      const newDenominator = this.denominator.mul(other.numerator) as Polynomial;
      return new Quotient(newNumerator, newDenominator);
    }

    throw new NotImplementedError('Dividing with the given expression is not yet supported.');
  }

  private simplify() {
    // TODO
  }
}
