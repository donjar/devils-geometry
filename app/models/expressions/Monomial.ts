import Expression from './Expression'
import Polynomial from './Polynomial'
import Quotient from './Quotient'
import Fraction from '../fraction/Fraction'
import Integer from '../fraction/Integer'

export default class Monomial extends Expression {
  private coefficient: Fraction
  private terms: Map<string, Integer>

  constructor(coefficient, terms) {
    super()
    this.coefficient = coefficient
    this.terms = terms
  }

  add(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new Error('Adding with the given expression is not yet supported.')
  }

  sub(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new Error('Subtracting with the given expression is not yet supported.')
  }

  mul(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new Error('Multiplying with the given expression is not yet supported.')
  }

  div(other): Expression {
    if (other instanceof Monomial) {

    }

    if (other instanceof Polynomial) {

    }

    if (other instanceof Quotient) {

    }

    throw new Error('Dividing with the given expression is not yet supported.')
  }
}
