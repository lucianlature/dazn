import 'whatwg-fetch'

export default class ApiClient {
    constructor({
        BASE_URI,
        IMAGES_URI,
    }) {
        this.base_uri = BASE_URI
        this.images_uri = BASE_URI
    }

    async fetch({ searchTerm }) {
        const query = `${this.base_uri}&query=${searchTerm}`
        const response = await fetch(query, {
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response.json()
    }

    getImage(options) {
        return `${this.images_uri}${options.size}/${options.file}`
    }
}