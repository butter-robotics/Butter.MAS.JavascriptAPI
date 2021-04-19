import { Response } from '../response';

/**
 * Represents an abstract data packet
 *
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
     * Send packet abstract method
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
            data: {
                response: {
                    status: "Succeeded",
                    data: content
                }
            },
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
    protected generateEmptyResponse(error: any=null, errorType: string='unknown') {
        let response: Response;

        response = {
            data: {
                response: {
                    status: "Failed",
                    data: `{ "exception": "Request resolved with an ${errorType} error" }`,
                    metadata: errorType
                }
            },
            status: 400,
            statusText: 'Failed'
        };

        if (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                response = {
                    data: error.response.data,
                    status: error.response.status,
                    statusText: 'Failed',
                    headers: error.response.headers
                };
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                response.request = error.request;
            } else {
                // Something happened in setting up the request that triggered an Error
                response.data = {
                    response: {
                        status: "Failed",
                        data: `{ "exception": "Request resolved with an ${error.message} error" }`,
                        metadata: errorType
                    }
                };
            }

            response.config = error.config;
        }


        return response;
    }


    equals(other: any) {
        return other instanceof Packet && this.ip == other.ip && this.port == other.port && this.query == other.query;
    }
}