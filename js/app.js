import { $on } from './utils'
import Connector from './connector'
import MovieRowTemplate from './MovieRowTemplate'
import AppView from './AppView'

const template = new MovieRowTemplate()
const view = new AppView(template)

$on(window, 'load', () => {
    // start the app
})