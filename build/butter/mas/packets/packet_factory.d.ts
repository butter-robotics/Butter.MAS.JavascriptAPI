import { HttpPacket } from './packet_http';
import { TcpPacket } from './packet_tcp';
import { UdpPacket } from './packet_udp';
export declare class PacketFactory {
    getPacket(ip: string, port: number, query: string, protocol?: string): HttpPacket | TcpPacket | UdpPacket;
    getPacketClass(protocol?: string): typeof HttpPacket;
}
