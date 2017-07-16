import Expression from './Expression'
import Polynomial from './Polynomial'
import Monomial from './Monomial'
import Fraction from '../fraction/Fraction'
import Integer from '../fraction/Integer'

export default class Quotient extends Expression {
  private numerator: Polynomial
  private denominator: Polynomial

  constructor(numerator, denominator) {
    super()
    this.numerator = numerator
    this.denominator = denominator
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
