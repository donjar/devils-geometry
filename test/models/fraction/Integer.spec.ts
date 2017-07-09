import Integer from '../../../app/models/fraction/Integer'
import * as assert from 'assert'

describe('Integer', () => {
  it('creates an integer when passed in a number', () => {
    assert.strictEqual((new Integer(3)).getNumber(), 3)
  })
})
