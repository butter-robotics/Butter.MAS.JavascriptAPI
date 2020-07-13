"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TcpClient = void 0;
const client_1 = require("./client");
class TcpClient extends client_1.Client {
    constructor(ip, port = 5050, protocol = 'tcp') {
        super(ip, port, protocol);
    }
}
exports.TcpClient = TcpClient;
//# sourceMappingURL=client_tcp.js.map