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
     * @param {number} [port=3003]
     * @param {string} [protocol='tcp']
     * @memberof TcpClient
     */
    constructor(ip: string, port: number = 3003, protocol: string = 'tcp') {
        super(ip, port, protocol);
    }
}
