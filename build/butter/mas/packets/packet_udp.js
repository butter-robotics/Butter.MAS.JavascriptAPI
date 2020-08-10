"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdpPacket = void 0;
const axios_1 = require("axios");
const packet_1 = require("./packet");
class UdpPacket extends packet_1.Packet {
    constructor(ip, port, query) {
        super(ip, port, query);
    }
    send(timeout = 40) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                response = yield axios_1.default.get(`http://${this.ip}:${this.port}/${this.query}`, { timeout });
            }
            catch (error) {
                console.error(`Warning: request failed.\n${error}\n`);
                response = this.generateEmptyResponse();
            }
            return response;
        });
    }
    equals(other) {
        return other instanceof UdpPacket && this.ip == other.ip && this.port == other.port && this.query == other.query;
    }
}
exports.UdpPacket = UdpPacket;
//# sourceMappingURL=packet_udp.js.map