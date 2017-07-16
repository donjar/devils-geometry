import Fraction from '../../../app/models/fraction/Fraction'
import Integer from '../../../app/models/fraction/Integer'

describe('Fraction', () => {
  it('is constructed by passing a numerator or denumerator, both integer or number', () => {
    const frac1 = new Fraction(3, 5)
    const frac2 = new Fraction(new Integer(3), 5)
    const frac3 = new Fraction(3, new Integer(5))
    const frac4 = new Fraction(new Integer(3), new Integer(5));

    [frac1, frac2, frac3, frac4].forEach(frac => {
      expect(frac.numerator.number).toEqual(3)
      expect(frac.denominator.number).toEqual(5)
    })
  })

  it('simplifies the fraction passed in', () => {
    const frac1 = new Fraction(3, 6)
    const frac2 = new Fraction(-3, 6)
    const frac3 = new Fraction(3, -6)
    const frac4 = new Fraction(-3, -6)

    expect(frac1.numerator.number).toEqual(1)
    expect(frac1.denominator.number).toEqual(2)
    expect(frac2.numerator.number).toEqual(-1)
    expect(frac2.denominator.number).toEqual(2)
    expect(frac3.numerator.number).toEqual(1)
    expect(frac3.denominator.number).toEqual(-2)
    expect(frac4.numerator.number).toEqual(-1)
    expect(frac4.denominator.number).toEqual(-2)
  })

  it('throws an error on zero denumerator', () => {
    expect(() => { new Fraction(3, 0) }).toThrow(Error)
  })
})
