import 'babel-core/register'
import 'babel-polyfill'

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
    const movies = [{ 
      id: 1,
      title: 'Movie #1',
      release_date: '2017-06-22',
      overview: 'blah 1'
    }, {
      id: 2,
      title: 'Movie #2',
      release_date: '2017-06-23',
      overview: 'blah 2'
    }]
    const html = template.moviesList(movies)

    expect(html.replace('\r\n\t/g', '')).to.equal(`
<li data-id="1" class="animated fadeInRight">
  <label>Movie #1</label>
  <img class="center-block img-responsive" width="120px" height="160px" src="undefined" />
  <div class="overview">
    <span><strong>Release Date: </strong>2017-06-22</span>
    <p>blah 1<p>
  </div>
</li>
<li data-id="2" class="animated fadeInRight">
  <label>Movie #2</label>
  <img class="center-block img-responsive" width="120px" height="160px" src="undefined" />
  <div class="overview">
    <span><strong>Release Date: </strong>2017-06-23</span>
    <p>blah 2<p>
  </div>
</li>`)
  })
})