import Fraction from '../fraction/Fraction';
import Integer from '../fraction/Integer';
import { NotImplementedError } from '../helpers/Errors';
import Expression from './Expression';
import Quotient from './Quotient';

export default class Polynomial extends Expression {
  private terms: Map<Map<string, Integer>, Fraction>;

  constructor(termsMap: Map<Map<string, Integer>, Fraction>) {
    super();
    this.terms = termsMap;
  }

  public negate() {
    function negateFunction(x: [Map<string, Integer>, Fraction]): [Map<string, Integer>, Fraction] {
      return [x[0], x[1].negate()]
    }

    return new Polynomial(new Map(Array.from(this.terms).map(negateFunction)));
  }

  public toQuotient() {
    const one: [Map<string, Integer>, Fraction] = [new Map(), new Integer(1).toFraction()];
    return new Quotient(this, new Polynomial(new Map([one])));
  }

  public add(other: Expression) {
    if (other instanceof Polynomial) {
      let newTerms = new Map(this.terms);
      for (const [k, v] of other.terms) {
        let oldTerm = newTerms.get(k);
        if (oldTerm === undefined) { oldTerm = new Integer(0).toFraction(); }
        newTerms.set(k, oldTerm.add(v));
      }
    }

    if (other instanceof Quotient) {
      return other.add(this);
    }

    throw new NotImplementedError('Adding with the given expression is not yet supported.');
  }

  public mul(other: Expression) {
    if (other instanceof Polynomial) {
      for (const [term, coeff] of this.terms) {
        function multiplyMonomial(m: [Map<string, Integer>, Fraction]): [Map<string, Integer>, Fraction] {
          const newCoeff = coeff.mul(m[1]);

          let newTerm = new Map<string, Integer>();
        }
      }
    }

    if (other instanceof Quotient) {
      return other.mul(this);
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
