import Integer from '../../../app/models/fraction/Integer'

describe('constructor', () => {
  it('creates an integer representing the number passed in', () => {
    expect(new Integer(3).number).toBe(3)
    expect(new Integer(0).number).toBe(0)
    expect(new Integer(-12341234).number).toBe(-12341234)
  })

  it('throws an error when constructed with a non-integer', () => {
    expect(() => { new Integer(3.5) }).toThrow(Error)
    expect(() => { new Integer('a') }).toThrow(Error)
  })
})

describe('toFraction', () => {
  it('creates the fraction representation of n/1', () => {
    const three = (new Integer(3)).toFraction()

    expect(three.numerator.number).toEqual(3)
    expect(three.denominator.number).toEqual(1)
  })
})

describe('math operators', () => {
  const three = new Integer(3)
  const seven = new Integer(7)

  it('adds integers by calling add', () => {
    expect(three.add(three).number).toEqual(6)
    expect(three.add(seven).number).toEqual(10)
    expect(seven.add(three).number).toEqual(10)
    expect(seven.add(seven).number).toEqual(14)
  })

  it('subtracts integers by calling subtract', () => {
    expect(three.sub(three).number).toEqual(0)
    expect(three.sub(seven).number).toEqual(-4)
    expect(seven.sub(three).number).toEqual(4)
    expect(seven.sub(seven).number).toEqual(0)
  })

  it('multiplies integers by calling mul', () => {
    expect(three.mul(three).number).toEqual(9)
    expect(three.mul(seven).number).toEqual(21)
    expect(seven.mul(three).number).toEqual(21)
    expect(seven.mul(seven).number).toEqual(49)
  })

  it('divides integers by calling div', () => {
    expect(three.div(three).numerator.number).toEqual(1)
    expect(three.div(seven).numerator.number).toEqual(3)
    expect(seven.div(three).numerator.number).toEqual(7)
    expect(seven.div(seven).numerator.number).toEqual(1)

    expect(three.div(three).denominator.number).toEqual(1)
    expect(three.div(seven).denominator.number).toEqual(7)
    expect(seven.div(three).denominator.number).toEqual(3)
    expect(seven.div(seven).denominator.number).toEqual(1)
  })

  it('does integer division properly', () => {
    expect(three.integerDiv(three).number).toEqual(1)
    expect(three.integerDiv(seven).number).toEqual(0)
    expect(seven.integerDiv(three).number).toEqual(2)
    expect(seven.integerDiv(seven).number).toEqual(1)
  })

  it('throws an error when dividing by zero', () => {
    expect(() => { three.div(new Integer(0)) }).toThrow(Error)
    expect(() => { seven.div(new Integer(0)) }).toThrow(Error)
    expect(() => { three.integerDiv(new Integer(0)) }).toThrow(Error)
    expect(() => { seven.integerDiv(new Integer(0)) }).toThrow(Error)
  })

  it('makes numbers to their absolute value by calling abs', () => {
    expect(three.abs().number).toEqual(3)
    expect((new Integer(-5)).abs().number).toEqual(5)
  })
})

describe('comparison operators', () => {
  const minusFour = new Integer(-4)
  const minusTwo = new Integer(-2)
  const zero = new Integer(0)
  const three = new Integer(3)
  const five = new Integer(5)

  it('compares equals with equals', () => {
    expect(minusFour.equals(minusTwo)).toBe(false)
    expect(minusTwo.equals(zero)).toBe(false)
    expect(zero.equals(three)).toBe(false)
    expect(three.equals(five)).toBe(false)

    expect(minusTwo.equals(minusFour)).toBe(false)

    expect(minusFour.equals(minusFour)).toBe(true)
    expect(minusTwo.equals(minusTwo)).toBe(true)
    expect(zero.equals(zero)).toBe(true)
    expect(three.equals(three)).toBe(true)
    expect(five.equals(five)).toBe(true)
  })

  it('compares less than with lessThan', () => {
    expect(minusFour.lessThan(minusTwo)).toBe(true)
    expect(minusTwo.lessThan(zero)).toBe(true)
    expect(zero.lessThan(three)).toBe(true)
    expect(three.lessThan(five)).toBe(true)

    expect(minusTwo.lessThan(minusFour)).toBe(false)

    expect(minusFour.lessThan(minusFour)).toBe(false)
    expect(minusTwo.lessThan(minusTwo)).toBe(false)
    expect(zero.lessThan(zero)).toBe(false)
    expect(three.lessThan(three)).toBe(false)
    expect(five.lessThan(five)).toBe(false)
  })

  it('compares <= with lessThanOrEqualTo', () => {
    expect(minusFour.lessThanOrEqualTo(minusTwo)).toBe(true)
    expect(minusTwo.lessThanOrEqualTo(zero)).toBe(true)
    expect(zero.lessThanOrEqualTo(three)).toBe(true)
    expect(three.lessThanOrEqualTo(five)).toBe(true)

    expect(minusTwo.lessThanOrEqualTo(minusFour)).toBe(false)

    expect(minusFour.lessThanOrEqualTo(minusFour)).toBe(true)
    expect(minusTwo.lessThanOrEqualTo(minusTwo)).toBe(true)
    expect(zero.lessThanOrEqualTo(zero)).toBe(true)
    expect(three.lessThanOrEqualTo(three)).toBe(true)
    expect(five.lessThanOrEqualTo(five)).toBe(true)
  })

  it('compares greater than with greaterThan', () => {
    expect(minusFour.greaterThan(minusTwo)).toBe(false)
    expect(minusTwo.greaterThan(zero)).toBe(false)
    expect(zero.greaterThan(three)).toBe(false)
    expect(three.greaterThan(five)).toBe(false)

    expect(minusTwo.greaterThan(minusFour)).toBe(true)

    expect(minusFour.greaterThan(minusFour)).toBe(false)
    expect(minusTwo.greaterThan(minusTwo)).toBe(false)
    expect(zero.greaterThan(zero)).toBe(false)
    expect(three.greaterThan(three)).toBe(false)
    expect(five.greaterThan(five)).toBe(false)
  })

  it('compares >= with greaterThanOrEqualTo', () => {
    expect(minusFour.greaterThanOrEqualTo(minusTwo)).toBe(false)
    expect(minusTwo.greaterThanOrEqualTo(zero)).toBe(false)
    expect(zero.greaterThanOrEqualTo(three)).toBe(false)
    expect(three.greaterThanOrEqualTo(five)).toBe(false)

    expect(minusTwo.greaterThanOrEqualTo(minusFour)).toBe(true)

    expect(minusFour.greaterThanOrEqualTo(minusFour)).toBe(true)
    expect(minusTwo.greaterThanOrEqualTo(minusTwo)).toBe(true)
    expect(zero.greaterThanOrEqualTo(zero)).toBe(true)
    expect(three.greaterThanOrEqualTo(three)).toBe(true)
    expect(five.greaterThanOrEqualTo(five)).toBe(true)
  })
})

describe('isZero', () => {
  const pos = new Integer(22)
  const zero = new Integer(0)
  const neg = new Integer(-3)
  it('returns true if and only if it is 0', () => {
    expect(pos.isZero()).toBe(false)
    expect(zero.isZero()).toBe(true)
    expect(neg.isZero()).toBe(false)
  })
})

describe('gcd', () => {
  it('returns the gcd as we know', () => {
    expect(new Integer(3).gcd(new Integer(6)).number).toBe(3)
    expect(new Integer(3).gcd(new Integer(7)).number).toBe(1)
    expect(new Integer(3).gcd(new Integer(-7)).number).toBe(1)
    expect(new Integer(0).gcd(new Integer(-7)).number).toBe(7)
  })
})
