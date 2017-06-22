import fetch from 'whatwg-fetch'

export default class Connector {
    constructor({
        BASE_URI,
        IMAGES_URI,
        API_KEY,
    }) {

    }

    async fetch(url) {
        return await fetch(url)
    }
}