/* global describe, it */
const assert = require('chai').assert
const arabic2English = require('.')
// var converter = require('number-to-words')

describe('Testing', () => {
  it('should work', () => {
    assert.isTrue(true)
  })
})

describe('Arabic to English', () => {
  it('returns "one" for 1', () => {
    assert.equal(arabic2English.single(1), 'one')
  })

  it('returns "two" for 2', () => {
    assert.equal(arabic2English.single(2), 'two')
  })

  it('returns "two hundred" for 200', () => {
    assert.equal(arabic2English.single(200), 'two hundred')
  })

  it('returns "one thousand" for 1000', () => {
    assert.equal(arabic2English.single(1000), 'one thousand')
  })

  it('returns "one hundred twenty-three thousand, four hundred fifty-six" for 123456', () => {
    assert.equal(arabic2English.single(123456), 'one hundred twenty-three thousand, four hundred fifty-six')
  })
})
