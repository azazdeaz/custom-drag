import {assert} from 'chai'
import Monitor from '../src/Monitor'

describe('Monitor', () => {
  it('can be instantiated', () => {
    assert.isFunction(Monitor)
    assert.isObject(new Monitor())
  })
})
