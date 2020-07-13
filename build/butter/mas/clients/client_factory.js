"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientFactory = void 0;
const client_http_1 = require("./client_http");
const client_tcp_1 = require("./client_tcp");
const client_udp_1 = require("./client_udp");
class ClientFactory {
    getClient(ip, port, protocol = "http") {
        if (protocol == "http") {
            return port ? new client_http_1.HttpClient(ip, port) : new client_http_1.HttpClient(ip);
        }
        else if (protocol == "tcp") {
            throw new Error('Not Implemented');
            return port ? new client_tcp_1.TcpClient(ip, port) : new client_tcp_1.TcpClient(ip);
        }
        else if (protocol == "udp") {
            throw new Error('Not Implemented');
            return port ? new client_udp_1.UdpClient(ip, port) : new client_udp_1.UdpClient(ip);
        }
        else {
            return null;
        }
    }
    getClientClass(protocol = "http") {
        if (protocol == "http") {
            return client_http_1.HttpClient;
        }
        else if (protocol == "tcp") {
            throw new Error('Not Implemented');
            return client_tcp_1.TcpClient;
        }
        else if (protocol == "udp") {
            throw new Error('Not Implemented');
            return client_udp_1.UdpClient;
        }
        else {
            return null;
        }
    }
}
exports.ClientFactory = ClientFactory;
//# sourceMappingURL=client_factory.js.map