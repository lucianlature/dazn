import sinon from 'sinon'
import { assert, expect } from 'chai'
import MovieRowTemplate from '../js/MovieRowTemplate'

describe('MovieRowTemplate Tests', () => {
  let sandbox
  let template

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    template = new MovieRowTemplate()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('moviesList() should return contents for a movies list', () => {
    const movies = [ { id: 1, title: 'Movie #1' }, { id: 2, title: 'Movie #2' } ]
    const html = template.moviesList(movies)

    expect(html).to.equal(`
            <li data-id="1">
                <label>Movie #1</label>
            </li>
            <li data-id="2">
                <label>Movie #2</label>
            </li>`)
  })
})