import { qs, $on } from './utils' 
import MovieRowTemplate from './MovieRowTemplate'

const bindParams = params => cb => cb(params)
export default class AppView {
    constructor(template) {
        this.template = template
        this.$moviesList = qs('.movie-list')
        this.$main = qs('.main')
        this.$search = qs('.search-movie')

        this._cbs = {}

        this.initEvents()
    }

    /**
	 * Populate the movies list with a list of movies.
	 *
	 * @param {MovieList} movies Array of movies to display
	 */
	showMovies(movies) {
		this.$moviesList.innerHTML = this.template.moviesList(movies)

        if (movies.length) {
            this.$main.style.display = 'block'
        }
	}

    initEvents() {
        $on(this.$search, 'change', ({ target }) => {
            const search = target.value.trim()
            this._cbs.search.call(null, search)
        })
    }

    onSearch(cb) {
       this._registerCallback('search', cb)
    }

    _registerCallback(name, cb) {
        this._cbs[name] = cb
    }
}