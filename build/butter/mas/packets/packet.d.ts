export interface Response {
    data: any;
    status: number;
    statusText: string;
    headers?: any;
    config?: any;
    request?: any;
}
export declare class Packet {
    ip: string;
    port: number;
    query: string;
    constructor(ip: string, port: number, query: string);
    send(timeout?: number): void;
    protected generateResponse(content: string): Response;
    protected generateEmptyResponse(errorType?: string): Response;
    equals(other: any): boolean;
}
