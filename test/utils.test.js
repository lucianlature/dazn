import sinon from 'sinon'
import { assert, expect } from 'chai'
import { qs, $on, escapeForHTML } from '../js/utils'

describe('Utils Tests', () => {
  let sandbox
  let spyqs
  let scope

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    scope = {
        querySelector: sandbox.spy()
    }
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('qs() should call `querySelector` on its scope', () => {
    const selector = '.selector'
    qs(selector, scope)

    expect(scope.querySelector.calledOnce).to.be.true
    expect(scope.querySelector.calledWith(selector)).to.be.true
  })

  it('$on() should call `querySelector` on its scope', () => {
    const target = { addEventListener: sandbox.spy() }
    const type = 'eventType'

    $on(target, type)

    expect(target.addEventListener.calledOnce).to.be.true
    expect(target.addEventListener.calledWith(type)).to.be.true
  })

  it('escapeForHTML() should return string with unsafe characters escaped', () => {
    const html = '<h&h&>'
    const test = escapeForHTML(html)

    expect(test).to.equal('&lt;h&amp;h&amp;>')
  })
})
