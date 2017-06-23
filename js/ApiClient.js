import 'whatwg-fetch'

export default class ApiClient {
    constructor({
        BASE_URI,
        IMAGES_URI,
    }) {
        this.base_uri = BASE_URI
        this.images_uri = IMAGES_URI
    }

    async fetch({ searchTerm }) {
        const query = `${this.base_uri}&query=${searchTerm}`
        const response = await window.fetch(query, {
            headers: {
                "Content-Type": "application/json"
            },
        })
        
        return response.json().then(data => {
            data.results.forEach(item => {
                item.image = this.getImage({ size: 'w500', file: item.poster_path })
            })

            return data
        })
    }

    getImage(options) {
        return `${this.images_uri}${options.size}/${options.file}`
    }
}