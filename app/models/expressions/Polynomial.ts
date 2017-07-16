import Fraction from '../fraction/Fraction';
import Integer from '../fraction/Integer';
import { NotImplementedError } from '../helpers/Errors';
import Expression from './Expression';
import Monomial from './Monomial';
import Quotient from './Quotient';

export default class Polynomial extends Expression {
  private monomials: Monomial[];

  constructor(...monomials: Monomial[]) {
    super();
    this.monomials = monomials;
  }

  public negate(): Polynomial {
    return new Polynomial(...this.monomials.map((x) => x.negate));
  }

  public quotientForm(): Quotient {
    return new Quotient(this, new Monomial(1, new Map()).quotientForm);
  }

  public add(other): Expression {
    if (other instanceof Monomial) {
      return this.add(other.polynomialForm);
    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {
      return other.add(this);
    }

    throw new NotImplementedError('Adding with the given expression is not yet supported.');
  }

  public sub(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {
      return other.add(this);
    }

    throw new NotImplementedError('Subtracting with the given expression is not yet supported.');
  }

  public mul(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {
      return other.mul(this);
    }

    throw new NotImplementedError('Multiplying with the given expression is not yet supported.');
  }

  public div(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {
      return other.div(this);
    }

    throw new NotImplementedError('Dividing with the given expression is not yet supported.');
  }
}
