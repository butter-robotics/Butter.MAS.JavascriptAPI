"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketBuilder = void 0;
const packet_factory_1 = require("./packet_factory");
class PacketBuilder {
    constructor(ip, port, protocol = "http") {
        this.ip = ip;
        this.port = port;
        const packetFactory = new packet_factory_1.PacketFactory();
        this.packet = packetFactory.getPacketClass(protocol);
        this.cmd = null;
        this.args = [];
        this.params = [];
        this.keys = new Map();
    }
    addCommand(command) {
        this.cmd = String(command);
        return this;
    }
    addArgument(argument) {
        this.args.push(String(argument));
        return this;
    }
    addArguments(...argumentss) {
        if (argumentss) {
            argumentss.forEach(argument => {
                this.args.push(String(argument));
            });
        }
        return this;
    }
    addParameter(parameter) {
        this.params.push(this._formatParameter(String(parameter)));
        return this;
    }
    addParameters(...parameters) {
        if (parameters) {
            parameters.forEach(parameter => {
                this.params.push(this._formatParameter(String(parameter)));
            });
        }
        return this;
    }
    addKeyValuePair(key, value) {
        if (value) {
            this.keys.set(key, String(value));
        }
        return this;
    }
    _formatParameter(parameter) {
        let normalizedParameter = parameter;
        if (!parameter.startsWith('--')) {
            if (parameter.startsWith('-')) {
                normalizedParameter = `-${parameter}`;
            }
            else {
                normalizedParameter = `--${parameter}`;
            }
        }
        return normalizedParameter;
    }
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
            let keys = [];
            this.keys.forEach((key, value) => { keys.push(`${key}=${value}`); });
            query = `${query}${keys.join('&')}`;
        }
        let uri = ['cmd', 'json'].join('/');
        uri = `${uri}${query.replace(/&+$/, "")}`;
        return new this.packet(this.ip, this.port, uri);
    }
}
exports.PacketBuilder = PacketBuilder;
//# sourceMappingURL=packet_builder.js.map