import { Packet, Response } from './packet';
export declare class UdpPacket extends Packet {
    constructor(ip: string, port: number, query: string);
    send(timeout?: number): Promise<Response>;
    equals(other: any): boolean;
}
