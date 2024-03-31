import { Client } from './client';

/**
 * Butter MAS UDP client API
 *
 * @class UdpClient
 * @extends {Client}
 */
export class UdpClient extends Client {
    /**
     *Creates an instance of UdpClient.
     * @param {string} ip
     * @param {number} [port=3030]
     * @param {string} [protocol='udp']
     * @memberof UdpClient
     */
    constructor(ip: string, port: number = 3030, protocol: string = 'udp') {
        super(ip, port, protocol);
    }
}
