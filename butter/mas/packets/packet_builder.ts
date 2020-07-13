import { PacketFactory } from './packet_factory';


/**
 * Builds a command packet using the builder design pattern
 *
 * @export
 * @class PacketBuilder
 */
export class PacketBuilder {
    ip: string;
    port: number;
    packet: any;

    cmd: string;
    args: Array<string>;
    params: Array<string>;
    keys: Map<string,string>;

    /**
     * Creates an instance of PacketBuilder.
     * @param {string} ip robot IP
     * @param {number} port robot port
     * @param {string} [protocol="http"] communication protocol
     * @memberof PacketBuilder
     */
    constructor(ip: string, port: number, protocol: string="http") {
        this.ip = ip
        this.port = port

        const packetFactory = new PacketFactory()
        this.packet = packetFactory.getPacketClass(protocol)

        this.cmd = null;
        this.args = [];
        this.params = [];
        this.keys = new Map();
    }


    /**
     * Add command
     *
     * @param {string} command
     * @returns this PacketBuilder
     * @memberof PacketBuilder
     */
    addCommand(command: string) {
        this.cmd = String(command)

        return this
    }


    /** 
     * Add argument
     *
     * @param {string | number | boolean} argument
     * @returns this PacketBuilder
     * @memberof PacketBuilder
     */
    addArgument(argument: string | number | boolean) {
        this.args.push(String(argument));

        return this
    }
    


    /**
     * Add arguments
     *
     * @param {...Array<string | number | boolean>} argumentss
     * @returns this PacketBuilder
     * @memberof PacketBuilder
     */
    addArguments(...argumentss: Array<string | number | boolean>) {
        if (argumentss) {
            argumentss.forEach(argument => {
                this.args.push(String(argument));
            });
        }

        return this
    }


    /**
     * Add parameter
     *
     * @param {string} parameter
     * @returns this PacketBuilder
     * @memberof PacketBuilder
     */
    addParameter(parameter: string) {
        this.params.push(this._formatParameter(String(parameter)));

        return this
    }


    /**
     * Add parameters
     *
     * @param {...Array<string>} parameters
     * @returns this PacketBuilder
     * @memberof PacketBuilder
     */
    addParameters(...parameters: Array<string>) {
        if (parameters) {
            parameters.forEach(parameter => {
                this.params.push(this._formatParameter(String(parameter)));
            });
        }

        return this
    }


    /**
     * Add key value pair
     *
     * @param {string} key  attribute key
     * @param {string | number | boolean} value attribute value
     * @returns this PacketBuilder
     * @memberof PacketBuilder
     */
    addKeyValuePair(key: string, value: string | number | boolean) {
        if (value) {
            this.keys.set(key, String(value));
        }

        return this
    }


    /**
     * Formats parameter properly
     *
     * @private
     * @param {string} parameter
     * @returns formated parameter
     * @memberof PacketBuilder
     */
    private _formatParameter(parameter: string) {
        let normalizedParameter: string = parameter;

        if (!parameter.startsWith('--')) {
            if (parameter.startsWith('-')) {
                normalizedParameter = `-${parameter}`
            } else {
                normalizedParameter = `--${parameter}`
            }
        }

        return normalizedParameter
    }



    /**
     * Builds the packet
     *
     * @returns data packet
     * @memberof PacketBuilder
     */
    build() {
        if (this.cmd == null) {
            return null;
        }

        let query = `${this.cmd}?`;

        if (this.args) { 
            query = `${query}${this.args.join('&')}&`;
        }

        if (this.params) { 
            const params = this.params.map(this._formatParameter);
            query = `${query}${params.join('&')}&`;
        }

        if (this.keys) {
            let keys: Array<string> = [];
            this.keys.forEach((key, value) => {keys.push(`${key}=${value}`)});
            query = `${query}${keys.join('&')}`;
        }

        let uri = ['cmd', 'json'].join('/');
        uri = `${uri}${query.replace(/&+$/, "")}`;

        return new this.packet(this.ip, this.port, uri);
    }  
}
