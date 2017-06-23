import { escapeForHTML } from './utils'

export default class MovieRowTemplate {
	/**
	 * Format the contents of a movies list.
	 *
	 * @param {ItemList} items Object containing keys you want to find in the template to replace.
	 * @returns {!string} Contents for a movie list
	 *
	 * @example
	 * view.show({
	 *	id: 1,
	 *	title: "Hello World",
	 * })
	 */
	moviesList(movies) {
		return movies.reduce((a, movie) => a + `
<li data-id="${movie.id}" class="animated fadeInRight">
  <label>${escapeForHTML(movie.title)}</label>
  <img class="center-block img-responsive" width="120px" height="160px" src="${movie.image}" />
  <div class="overview">
    <span><strong>Release Date: </strong>${movie.release_date}</span>
    <p>${movie.overview}<p>
  </div>
</li>`, '')
	}
}