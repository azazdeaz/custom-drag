var createCustomDrag = require('../src/createCustomDrag')
var chai = require('chai')
var spies = require('chai-spies')
var assert = chai.assert
chai.use(spies)
chai.should()

describe('createCustomDrag', () => {
  it('is a function', () => {
    assert.isFunction(createCustomDrag)
  })
})
