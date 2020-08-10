"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Packet = void 0;
class Packet {
    constructor(ip, port, query) {
        this.ip = ip;
        this.port = port;
        this.query = query;
    }
    send(timeout) {
        throw new Error('Not Implemented');
    }
    generateResponse(content) {
        let response;
        response = {
            data: content,
            status: 200,
            statusText: 'OK'
        };
        return response;
    }
    generateEmptyResponse(error = null, errorType = 'unknown') {
        let response;
        response = {
            data: `{ "exception": "Request resolved with an ${errorType} error" }`,
            status: 400,
            statusText: 'Failed'
        };
        if (error) {
            if (error.response) {
                response = {
                    data: error.response.data,
                    status: error.response.status,
                    statusText: 'Failed',
                    headers: error.response.headers
                };
            }
            else if (error.request) {
                response.request = error.request;
            }
            else {
                response.data = `{ "exception": "Request resolved with an ${error.message} error" }`;
            }
            response.config = error.config;
        }
        return response;
    }
    equals(other) {
        return other instanceof Packet && this.ip == other.ip && this.port == other.port && this.query == other.query;
    }
}
exports.Packet = Packet;
//# sourceMappingURL=packet.js.map