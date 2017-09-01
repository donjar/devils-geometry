import Fraction from '../fraction/Fraction';
import Integer from '../fraction/Integer';
import { NotImplementedError } from '../helpers/Errors';
import Expression from './Expression';
import Quotient from './Quotient';

export default class Polynomial extends Expression {
  private trms: Map<Map<string, Integer>, Fraction>;

  constructor(termsMap: Map<Map<string, Integer>, Fraction> = new Map()) {
    super();
    this.trms = termsMap;
  }

  public get terms() {
    return this.trms;
  }

  public equals(other: Polynomial) {
    const map1 = this.trms;
    const map2 = other.trms;

    if (map1.size !== map2.size) { return false; }
    for (const [k, v] of map1) {
      const otherValue = map2.get(k);
    }
  }

  public negate() {
    function negateFunction(x: [Map<string, Integer>, Fraction]): [Map<string, Integer>, Fraction] {
      return [x[0], x[1].negate()];
    }

    return new Polynomial(new Map(Array.from(this.trms).map(negateFunction)));
  }

  public toQuotient() {
    const one: [Map<string, Integer>, Fraction] = [new Map(), new Integer(1).toFraction()];
    return new Quotient(this, new Polynomial(new Map([one])));
  }

  public add(other: Expression): Expression {
    if (other instanceof Polynomial) {
      const newTerms = new Map(this.trms);
      for (const [k, v] of other.trms) {
        let oldTerm = newTerms.get(k);
        if (oldTerm === undefined) { oldTerm = new Integer(0).toFraction(); }
        newTerms.set(k, oldTerm.add(v));
      }

      return new Polynomial(newTerms);
    }

    if (other instanceof Quotient) {
      return other.add(this);
    }

    throw new NotImplementedError('Adding with the given expression is not yet supported.');
  }

  public mul(other: Expression): Expression {
    if (other instanceof Polynomial) {
      let result = new Polynomial();

      for (const [term1, coeff1] of this.trms) {
        for (const [term2, coeff2] of other.trms) {
          const newCoeff = coeff1.mul(coeff2);
          const newTerm = new Map(term1);

          for (const [variable, exponent] of term2) {
            let originalExponent = newTerm.get(variable);
            if (originalExponent === undefined) { originalExponent = new Integer(0); }
            newTerm.set(variable, originalExponent.add(exponent));
          }

          const newMap = new Map<Map<string, Integer>, Fraction>();
          newMap.set(newTerm, newCoeff);
          const newMonomial = new Polynomial(newMap);
          result = result.add(newMonomial) as Polynomial;
        }
      }

      return result;
    }

    if (other instanceof Quotient) {
      return other.mul(this);
    }

    throw new NotImplementedError('Multiplying with the given expression is not yet supported.');
  }

  public div(other: Expression): Expression {
    if (other instanceof Polynomial) {
      return new Quotient(this, other);
    }

    if (other instanceof Quotient) { // a / (b/c) = ac/b
      const newNumerator = this.mul(other.denominator) as Polynomial;
      const newDenominator = other.numerator;
      return new Quotient(newNumerator, newDenominator);
    }

    throw new NotImplementedError('Dividing with the given expression is not yet supported.');
  }
}
