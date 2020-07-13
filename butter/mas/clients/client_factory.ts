import { HttpClient } from './client_http';
import { TcpClient } from './client_tcp';
import { UdpClient } from './client_udp';


/**
 * Client factory for different types of protocols
 *
 * @class ClientFactory
 */
export class ClientFactory {

    /**
     * Creates new client
     *
     * @param {string} ip robot IP
     * @param {number} [port] robot port
     * @param {string} [protocol="http"] communication protocol
     * @returns requested client
     * @memberof ClientFactory
     */
    getClient(ip: string, port?: number, protocol: string="http") {
        if (protocol == "http") {
            return port ? new HttpClient(ip, port) : new HttpClient(ip);
        } else if (protocol == "tcp") {
            throw new Error('Not Implemented');
            return port ? new TcpClient(ip, port) : new TcpClient(ip);
        } else if (protocol == "udp") {
            throw new Error('Not Implemented');
            return port ? new UdpClient(ip, port) : new UdpClient(ip);
        } else {
            return null;
        }
    }


    /**
     * Get client class
     *
     * @param {string} [protocol="http"] communication protocol
     * @returns
     * @memberof ClientFactory
     */
    getClientClass(protocol: string="http") {
        if (protocol == "http") {
            return HttpClient;
        } else if (protocol == "tcp") {
            throw new Error('Not Implemented');
            return TcpClient;
        } else if (protocol == "udp") {
            throw new Error('Not Implemented');
            return UdpClient;
        } else {
            return null;
        }
    }
}