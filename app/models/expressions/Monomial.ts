import Fraction from '../fraction/Fraction';
import Integer from '../fraction/Integer';
import { NotImplementedError } from '../helpers/Errors';
import Expression from './Expression';
import Polynomial from './Polynomial';
import Quotient from './Quotient';

export default class Monomial extends Expression {
  private coefficient: Fraction;
  private terms: Map<string, Integer>;

  constructor(coefficient, terms) {
    super();
    this.coefficient = coefficient;
    this.terms = terms;
  }

  public negate(): Monomial {
    return new Monomial(this.coefficient.negate, this.terms);
  }

  public toPolynomial(): Polynomial {
    return new Polynomial(this);
  }

  public toQuotient(): Quotient {
    return this.polynomialForm.quotientForm;
  }

  public add(other): Expression {
    if (other instanceof Monomial) {
      return new Polynomial(this, other);
    }

    if (other instanceof Polynomial) {
      return other.add(this);
    }

    if (other instanceof Quotient) {
      return other.add(this);
    }

    throw new NotImplementedError('Adding with the given expression is not yet supported.');
  }

  public mul(other): Expression {
    if (other instanceof Monomial) {
      const newCoeff = this.coefficient.mul(other.coefficient);
      const newTerms = new Map(this.terms);
      for (const [key, value] of other.terms) {
        let prevValue = newTerms.get(key);
        if (prevValue === undefined) { prevValue = new Integer(0); }
        newTerms.set(key, value.add(prevValue));
      }

      return new Monomial(newCoeff, newTerms);
    }

    if (other instanceof Polynomial) {
      return other.mul(this);
    }

    if (other instanceof Quotient) {
      return other.mul(this);
    }

    throw new NotImplementedError('Multiplying with the given expression is not yet supported.');
  }

  public div(other): Expression {
    if (other instanceof Monomial) {
      return new Quotient(this, other);
    }

    if (other instanceof Polynomial) {
      return other.div(this);
    }

    if (other instanceof Quotient) {
      return other.div(this);
    }

    throw new NotImplementedError('Dividing with the given expression is not yet supported.');
  }
}
