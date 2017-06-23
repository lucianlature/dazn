import proxyquire from 'proxyquire'
import sinon from 'sinon'
import { assert, expect } from 'chai'

const selector = {
  style: {
    display: 'none'
  },
  innerHTML: '',
  addEventListener: sinon.spy()
}
const proxyAppView = proxyquire('../js/AppView', {
  './utils': {
    qs: () => selector
  }
})

const AppView = proxyAppView.default

describe('AppView Tests', () => {
  let view, template, sandbox, $onMock, qsMock
  beforeEach(function () {
    this.jsdom = require('jsdom-global')()
    sandbox = sinon.sandbox.create()
    
    const moviesList = sandbox.stub()
    moviesList.withArgs([]).returns('')
    moviesList.withArgs([{}, {}]).returns('<li>1</li><li>2</li>')
    
    template = { moviesList }
    view = new AppView(template)
  })

  afterEach(function () {
    sandbox.restore()
    this.jsdom()
  })

  describe('When the list of movies is empty', () => {
    it('showMovies() should NOT populate $moviesList', () => {
      const movies = []
      view.showMovies(movies)

      expect(template.moviesList.calledOnce).equal(true)
      expect(template.moviesList.calledWith(movies)).to.be.true
      expect(view.$moviesList.innerHTML).to.equal('')
    })

    it('showMovies() should hide the movies list container', () => {
      const movies = []
      view.showMovies(movies)

      expect(view.$main.style.display).to.equal('none')
    })
  })

  describe('When a list of movies is returned', () => {
    it('showMovies() should populate $moviesList', () => {
      const movies = [{}, {}]
      view.showMovies(movies)

      expect(template.moviesList.calledOnce).equal(true)
      expect(template.moviesList.calledWith(movies)).to.be.true
      expect(view.$moviesList.innerHTML).to.equal('<li>1</li><li>2</li>')
    })

    it('showMovies() should hide the movies list container', () => {
      const movies = []
      view.showMovies(movies)

      expect(view.$main.style.display).to.equal('block')
    })
  })
})
