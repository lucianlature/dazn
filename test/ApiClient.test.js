import 'babel-core/register'
import 'babel-polyfill'

import sinon from 'sinon'
import { assert, expect } from 'chai'
import ApiClient from '../js/ApiClient'

describe('ApiClient Tests', () => {
  let sandbox
  let client
  let spyFetch
  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    spyFetch = sandbox.stub(window, 'fetch').returns({
        json: () => Promise.resolve({
          results: [{ poster_path: 'hello' }]
        })
    })
    client = new ApiClient({ BASE_URI: 'BASE_URI', IMAGES_URI: 'IMAGES_URI' })
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('fetch() should retrieve response data from the API', done => {
    const query = 'BASE_URI&query=blue'
    client.fetch({ searchTerm: 'blue' })
        .catch(done)
        .then(json => {
            expect(spyFetch.calledOnce).to.be.true
            expect(spyFetch.calledWith(query)).to.be.true
            expect(json).to.deep.equal({ results: [ { poster_path: 'hello', image: 'IMAGES_URIw500/hello' } ] })

            done()
        })
  })

  it('getImage() should return the correct image source path', () => {
      const testImage = client.getImage({ size: 10, file: 'foo'})

      expect(testImage).to.equal('IMAGES_URI10/foo')
  })
})