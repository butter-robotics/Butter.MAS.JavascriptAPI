"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketFactory = void 0;
const packet_http_1 = require("./packet_http");
const packet_tcp_1 = require("./packet_tcp");
const packet_udp_1 = require("./packet_udp");
class PacketFactory {
    getPacket(ip, port, query, protocol = "http") {
        if (protocol == "http") {
            return new packet_http_1.HttpPacket(ip, port, query);
        }
        else if (protocol == "tcp") {
            throw new Error('Not Implemented');
            return new packet_tcp_1.TcpPacket(ip, port, query);
        }
        else if (protocol == "udp") {
            throw new Error('Not Implemented');
            return new packet_udp_1.UdpPacket(ip, port, query);
        }
        else {
            return null;
        }
    }
    getPacketClass(protocol = "http") {
        if (protocol == "http") {
            return packet_http_1.HttpPacket;
        }
        else if (protocol == "tcp") {
            throw new Error('Not Implemented');
            return packet_tcp_1.TcpPacket;
        }
        else if (protocol == "udp") {
            throw new Error('Not Implemented');
            return packet_udp_1.UdpPacket;
        }
        else {
            return null;
        }
    }
}
exports.PacketFactory = PacketFactory;
//# sourceMappingURL=packet_factory.js.map