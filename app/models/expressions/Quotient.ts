import Fraction from '../fraction/Fraction';
import Integer from '../fraction/Integer';
import { NotImplementedError } from '../helpers/Errors';
import Expression from './Expression';
import Monomial from './Monomial';
import Polynomial from './Polynomial';

export default class Quotient extends Expression {
  private numerator: Polynomial;
  private denominator: Polynomial;

  constructor(numerator, denominator) {
    super();
    this.numerator = numerator;
    this.denominator = denominator;
  }

  public negate(): Quotient {
    return new Quotient(this.numerator.negate, this.denominator);
  }

  public add(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new NotImplementedError('Adding with the given expression is not yet supported.');
  }

  public sub(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new NotImplementedError('Subtracting with the given expression is not yet supported.');
  }

  public mul(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new NotImplementedError('Multiplying with the given expression is not yet supported.');
  }

  public div(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new NotImplementedError('Dividing with the given expression is not yet supported.');
  }
}
