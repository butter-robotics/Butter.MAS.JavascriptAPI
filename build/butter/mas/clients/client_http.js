"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const client_1 = require("./client");
class HttpClient extends client_1.Client {
    constructor(ip, port = 5555, protocol = 'http') {
        super(ip, port, protocol);
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=client_http.js.map