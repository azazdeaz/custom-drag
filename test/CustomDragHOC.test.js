var React = require('react')
var CustomDrag = require('../src/CustomDragHOC')
var chai = require('chai')
var spies = require('chai-spies')
var assert = chai.assert
chai.use(spies)
chai.should()

describe('CustomDragHOC', () => {
  it('is a function', () => {
    assert.isFunction(CustomDrag)
  })
})
