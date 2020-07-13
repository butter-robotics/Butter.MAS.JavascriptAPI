export declare class PacketBuilder {
    ip: string;
    port: number;
    packet: any;
    cmd: string;
    args: Array<string>;
    params: Array<string>;
    keys: Map<string, string>;
    constructor(ip: string, port: number, protocol?: string);
    addCommand(command: string): this;
    addArgument(argument: string | number | boolean): this;
    addArguments(...argumentss: Array<string | number | boolean>): this;
    addParameter(parameter: string): this;
    addParameters(...parameters: Array<string>): this;
    addKeyValuePair(key: string, value: string | number | boolean): this;
    private _formatParameter;
    build(): any;
}
