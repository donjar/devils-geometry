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

  public add(other: Expression) {
    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new NotImplementedError('Adding with the given expression is not yet supported.');
  }

  public mul(other: Expression) {
    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new NotImplementedError('Multiplying with the given expression is not yet supported.');
  }

  public div(other: Expression) {
    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new NotImplementedError('Dividing with the given expression is not yet supported.');
  }
}
