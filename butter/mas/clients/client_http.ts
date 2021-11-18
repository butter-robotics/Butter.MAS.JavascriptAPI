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
     * @param {string} [protocol='http']
     * @memberof HttpClient
     */
    constructor(ip: string, port: number=3000, protocol: string='http') {
        super(ip, port, protocol);
    }
}
