

export interface Response {
    data: any,
    status: number,
    statusText: string,
    headers?: any,
    config?: any,
    request?: any
}

/**
 * Represents an abstract data packet
 *
 * @export
 * @class Packet
 */
export class Packet {
    ip: string;
    port: number;
    query: string;

    
    /**
     * Creates an instance of Packet.
     * @param {string} ip robot IP
     * @param {number} port robot port
     * @param {string} query packet payload
     * @memberof Packet
     */
    constructor(ip: string, port: number, query: string) {
        this.ip = ip;
        this.port = port;
        this.query = query;
    }


    /**
     * Send packet abstract methud
     *
     * @param {number} [timeout] packet timeout (optional)
     * @memberof Packet
     */
    send(timeout?: number) {
        throw new Error('Not Implemented');
    }


    /**
     *
     *
     * @protected
     * @param {string} content response content
     * @returns structured response
     * @memberof Packet
     */
    protected generateResponse(content: string): Response {
        let response: Response;

        response = {
            data: content,
            status: 200,
            statusText: 'OK'
        };

        return response;
    }


    /**
     * Generates empty response packet
     *
     * @protected
     * @param {string} [errorType='unknown'] error type
     * @returns error response
     * @memberof Packet
     */
    protected generateEmptyResponse(errorType: string='unknown') {
        let response: Response;

        response = {
            data: `{ "exception": "Request resolved with an ${errorType} error" }`,
            status: 400,
            statusText: 'Failed'
        };

        return response;
    }


    equals(other: any) {
        return other instanceof Packet && this.ip == other.ip && this.port == other.port && this.query == other.query;
    }
}