"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdpClient = void 0;
const client_1 = require("./client");
class UdpClient extends client_1.Client {
    constructor(ip, port = 5000, protocol = 'udp') {
        super(ip, port, protocol);
    }
}
exports.UdpClient = UdpClient;
//# sourceMappingURL=client_udp.js.map