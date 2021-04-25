import axios from 'axios';
import { Packet } from './packet'
import { Response } from '../interfaces/response'


/**
 * Represents a http data packet
 *
 * @class HttpPacket
 * @extends {Packet}
 */
export class HttpPacket extends Packet {


    /**
     *Creates an instance of HttpPacket.
     * @param {string} ip robot IP
     * @param {number} port robot port
     * @param {string} query packet payload
     * @memberof HttpPacket
     */
    constructor(ip: string, port: number, query: string) {
        super(ip, port, query);
    }


    /**
     * Send packet
     *
     * @param {number} [timeout=40] packet timeout (optional)
     * @returns response containing the response
     * @memberof HttpPacket
     */
    async send(timeout: number=40): Promise<Response> {
        let response: Response;

        try {
            response = await axios.get(`http://${this.ip}:${this.port}/${this.query}`, { timeout });
        } catch(error) {
            console.error(`Warning: request failed.\n${error}\n`);
            response = this.generateEmptyResponse(error);
        }

        return response;
    }

    equals(other: any) {
        return other instanceof HttpPacket && this.ip == other.ip && this.port == other.port && this.query == other.query;
    }
}