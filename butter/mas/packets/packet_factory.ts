import { HttpPacket } from './packet_http';
import { TcpPacket } from './packet_tcp';
import { UdpPacket } from './packet_udp';

/**
 * Packet factory for different types of protocols
 *
 * @class PacketFactory
 */
export class PacketFactory {
    /**
     * Creates new client
     *
     * @param {string} ip robot IP
     * @param {number} [port] robot port
     * @param {string} query packet data
     * @param {string} [protocol="http"] communication protocol
     * @returns requested client
     * @memberof PacketFactory
     */
    getPacket(ip: string, port: number, query: string, protocol: string = 'http') {
        if (protocol === 'http') {
            return new HttpPacket(ip, port, query);
        } else if (protocol === 'tcp') {
            throw new Error('Not Implemented');
            return new TcpPacket(ip, port, query);
        } else if (protocol === 'udp') {
            throw new Error('Not Implemented');
            return new UdpPacket(ip, port, query);
        } else {
            return null;
        }
    }


    /**
     * Get packet class
     *
     * @param {string} [protocol="http"] communication protocol
     * @returns class of type Packet
     * @memberof PacketFactory
     */
    getPacketClass(protocol: string = 'http') {
        if (protocol === 'http') {
            return HttpPacket;
        } else if (protocol === 'tcp') {
            throw new Error('Not Implemented');
            return TcpPacket;
        } else if (protocol === 'udp') {
            throw new Error('Not Implemented');
            return UdpPacket;
        } else {
            return null;
        }
    }
}
