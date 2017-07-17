import Fraction from '../../../app/models/fraction/Fraction';
import Integer from '../../../app/models/fraction/Integer';

describe('constructor', () => {
  it('is constructed by passing a numerator or denumerator, both integer or number', () => {
    const frac1 = new Fraction(3, 5);
    const frac2 = new Fraction(new Integer(3), 5);
    const frac3 = new Fraction(3, new Integer(5));
    const frac4 = new Fraction(new Integer(3), new Integer(5));

    [frac1, frac2, frac3, frac4].forEach((frac) => {
      expect(frac.numerator.number).toEqual(3);
      expect(frac.denominator.number).toEqual(5);
    });
  });

  it('simplifies the fraction passed in', () => {
    const frac1 = new Fraction(3, 6);
    const frac2 = new Fraction(-3, 6);
    const frac3 = new Fraction(3, -6);
    const frac4 = new Fraction(-3, -6);

    expect(frac1.numerator.number).toEqual(1);
    expect(frac1.denominator.number).toEqual(2);
    expect(frac2.numerator.number).toEqual(-1);
    expect(frac2.denominator.number).toEqual(2);
    expect(frac3.numerator.number).toEqual(1);
    expect(frac3.denominator.number).toEqual(-2);
    expect(frac4.numerator.number).toEqual(-1);
    expect(frac4.denominator.number).toEqual(-2);
  });

  it('throws an error on zero denumerator', () => {
    expect(() => { const _ = new Fraction(3, 0); }).toThrow(Error);
  });
});

describe('math operators', () => {
  const frac1 = new Fraction(3, 7);
  const frac2 = new Fraction(2, 5);

  it('adds by calling add', () => {
    const sum = frac1.add(frac2);
    expect(sum.numerator.number).toEqual(29);
    expect(sum.denominator.number).toEqual(35);
  });

  it('subtracts by calling sub', () => {
    const sum = frac1.sub(frac2);
    expect(sum.numerator.number).toEqual(1);
    expect(sum.denominator.number).toEqual(35);
  });

  it('multiplies by calling mul', () => {
    const prod = frac1.mul(frac2);
    expect(prod.numerator.number).toEqual(6);
    expect(prod.denominator.number).toEqual(35);
  });

  it('divides by calling div', () => {
    const quotient = frac1.div(frac2);
    expect(quotient.numerator.number).toEqual(15);
    expect(quotient.denominator.number).toEqual(14);
  });

  it('negates by calling negate', () => {
    expect(frac1.negate().numerator.number).toEqual(-3);
    expect(frac1.negate().denominator.number).toEqual(7);
    expect(frac2.negate().numerator.number).toEqual(-2);
    expect(frac2.negate().denominator.number).toEqual(5);
  });
});
