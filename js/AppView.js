import { qs } from './utils' 
import MovieRowTemplate from './MovieRowTemplate'

export default class AppView {
    constructor(template) {
        this.template = template
        this.$moviesList = qs('.movie-list')
        this.$main = qs('.main')
    }

    /**
	 * Populate the movies list with a list of movies.
	 *
	 * @param {MovieList} movies Array of movies to display
	 */
	showMovies(movies) {
		this.$moviesList.innerHTML = this.template.moviesList(movies)
	}
}