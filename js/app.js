import 'babel-core/register'
import 'babel-polyfill'

import { $on } from './utils'
import ApiClient from './ApiClient'
import MovieRowTemplate from './MovieRowTemplate'
import AppView from './AppView'

const IMAGES_URI = 'http://image.tmdb.org/t/p/'
const API_KEY = '1aee93b115858a448cb83ef53b33f6fa'
const BASE_URI = `http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`

const apiClient = new ApiClient({
    BASE_URI,
    IMAGES_URI,
})
const template = new MovieRowTemplate()
const view = new AppView(template)

// initialize the app
$on(window, 'load', () => {
    view.onSearch(async searchTerm => {
        let response
        try {
            response = await apiClient.fetch({ searchTerm })
            const movies = response.results
            view.showMovies(movies)
        } catch (err) {
            console.error(err)
        }
    })
})
