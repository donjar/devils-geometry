import Fraction from './Fraction'

export default class Integer {
  private num: number

  constructor(num: any) {
    if (num !== parseInt(num, 10)) {
      throw new Error('Integer class is not constructed with an integer.')
    }
    this.num = num
  }

  toFraction(): Fraction {
    return new Fraction(this, new Integer(1))
  }

  add(other: Integer): Integer {
    return new Integer(this.num + other.num)
  }

  sub(other: Integer): Integer {
    return new Integer(this.num - other.num)
  }

  mul(other: Integer): Integer {
    return new Integer(this.num * other.num)
  }

  div(other: Integer): Fraction {
    return new Fraction(this, other)
  }

  integerDiv(other: Integer): Integer {
    return new Integer(Math.floor(this.num / other.num))
  }

  abs(): Integer {
    return (this.num < 0) ? new Integer(-this.num) : this
  }

  equals(other: Integer): boolean {
    return this.num === other.num
  }

  lessThan(other: Integer): boolean {
    return this.num < other.num
  }

  lessThanOrEqualTo(other: Integer): boolean {
    return this.num <= other.num
  }

  greaterThan(other: Integer): boolean {
    return this.num > other.num
  }

  greaterThanOrEqualTo(other: Integer): boolean {
    return this.num >= other.num
  }

  getNumber(): number {
    return this.num
  }

  isZero(): boolean {
    return this.num === 0
  }

  gcd(other: Integer): Integer {
    const left = this.abs()
    const right = other.abs()
    const min = (left.lessThanOrEqualTo(right)) ? left : right
    const max = (left.greaterThanOrEqualTo(right)) ? left : right

    return (min.isZero()) ? max : min.gcd(max.sub(min))
  }
}
