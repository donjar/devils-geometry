import Integer from '../../../app/models/fraction/Integer'

describe('Integer', () => {
  it('creates an integer when passed in a number', () => {
    expect(new Integer(3).getNumber()).toBe(3)
  })
})
