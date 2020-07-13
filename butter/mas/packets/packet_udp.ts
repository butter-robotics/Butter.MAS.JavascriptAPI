import axios from '../../../node_modules/axios/index';
import { Packet, Response } from './packet'


/**
 * Represents a http data packet
 *
 * @export
 * @class HttpPacket
 * @extends {Packet}
 */
export class UdpPacket extends Packet {


    /**
     *Creates an instance of UdpPacket.
     * @param {string} ip robot IP
     * @param {number} port robot port
     * @param {string} query packet payload
     * @memberof UdpPacket
     */
    constructor(ip: string, port: number, query: string) {
        super(ip, port, query);
    }


    /**
     * Send packet
     *
     * @param {number} [timeout=5] packet timeout (optional)
     * @returns response containing the response
     * @memberof UdpPacket
     */
    async send(timeout: number=5): Promise<Response> {
        let response: Response;

        try {
            response = await axios.get(`http://${this.ip}:${this.port}/${this.query}`, { timeout });
        } catch(error) {
            console.error(`Warning: request failed.\n${error}\n`);
            response = this.generateEmptyResponse();
        }

        return response
    }

    equals(other: any) {
        return other instanceof UdpPacket && this.ip == other.ip && this.port == other.port && this.query == other.query;
    }
}