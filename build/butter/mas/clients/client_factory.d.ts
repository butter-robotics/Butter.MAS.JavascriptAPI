import { HttpClient } from './client_http';
import { TcpClient } from './client_tcp';
import { UdpClient } from './client_udp';
export declare class ClientFactory {
    getClient(ip: string, port?: number, protocol?: string): HttpClient | TcpClient | UdpClient;
    getClientClass(protocol?: string): typeof HttpClient;
}
