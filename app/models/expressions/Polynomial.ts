import Fraction from '../fraction/Fraction';
import Integer from '../fraction/Integer';
import Expression from './Expression';
import Monomial from './Monomial';
import Quotient from './Quotient';

export default class Polynomial extends Expression {
  private monomials: [Monomial];

  constructor(monomials) {
    super();
    this.monomials = monomials;
  }

  public add(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new Error('Adding with the given expression is not yet supported.');
  }

  public sub(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new Error('Subtracting with the given expression is not yet supported.');
  }

  public mul(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new Error('Multiplying with the given expression is not yet supported.');
  }

  public div(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new Error('Dividing with the given expression is not yet supported.');
  }
}
