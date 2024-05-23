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
     * @memberof TcpClient
     */
    constructor(ip: string, port: number = 3003) {
        super(ip, port, 'tcp');
    }
}
