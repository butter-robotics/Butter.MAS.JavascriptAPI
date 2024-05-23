import { Client } from './client';

/**
 * Butter MAS HTTP client API
 *
 * @class HttpClient
 * @extends {Client}
 */
export class HttpClient extends Client {
    /**
     *Creates an instance of HttpClient.
     * @param {string} ip
     * @param {number} [port=3000]
     * @memberof HttpClient
     */
    constructor(ip: string, port: number = 3000) {
        super(ip, port, 'http');
    }
}
