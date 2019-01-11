class HTTPError extends Error {
    constructor(statusCode, message) {
        super(message)
	    this.statusCode = statusCode
	}

    toString() {
        return `HTTP ${this.statusCode}: ${this.message}`
    }
}

module.exports = HTTPError
