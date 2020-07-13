import { Client } from './client';

/**
 * Butter MAS TCP client API
 *
 * @class TcpClient
 * @extends {Client}
 */
export class TcpClient extends Client {
    /**
     *Creates an instance of TcpClient.
     * @param {string} ip
     * @param {number} [port=5050]
     * @param {string} [protocol='tcp']
     * @memberof TcpClient
     */
    constructor(ip: string, port: number=5050, protocol: string='tcp') {
        super(ip, port, protocol);
    }
}
