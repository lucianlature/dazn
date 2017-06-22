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
            <li data-id="${movie.id}">
                <label>${escapeForHTML(movie.title)}</label>
				<img src="${movie.image}" />
            </li>`, '')
	}
}