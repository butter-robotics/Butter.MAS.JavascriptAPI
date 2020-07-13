"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const packet_builder_1 = require("../packets/packet_builder");
class Client {
    constructor(ip, port = 5555, protocol = 'http') {
        this.ip = ip;
        this.port = port;
        this.protocol = protocol;
    }
    getAvailableHandlers() {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol).addCommand('list').build();
        return packet.send();
    }
    getAvailableAnimations(reload = false) {
        const builder = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol).addCommand('animate');
        if (reload)
            builder.addParameter('reload');
        const packet = builder.addParameter('list').build();
        return packet.send();
    }
    getAvailableSounds(reload = false) {
        const builder = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol).addCommand('audio');
        if (reload)
            builder.addParameter('reload');
        const packet = builder.addParameter('list').build();
        return packet.send();
    }
    getAvailableMotorRegisters(motorName, readableOnly = false) {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('dxl')
            .addArguments('get', motorName)
            .addParameter('list')
            .addKeyValuePair('readableOnly', readableOnly)
            .build();
        return packet.send();
    }
    getMotorRegister(motorName, registerName) {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('dxl')
            .addArguments('get', motorName, registerName)
            .build();
        return packet.send();
    }
    getMotorRegisterRange(motorName, registerName) {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('dxl')
            .addArguments('get', motorName, registerName)
            .addParameter('range')
            .build();
        return packet.send();
    }
    setMotorRegister(motorName, registerName, value) {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('dxl')
            .addArguments('set', motorName, registerName, value)
            .build();
        return packet.send();
    }
    moveMotorToPosition(motorName, position, velocity, acceleration) {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('move')
            .addArguments(motorName, position)
            .addKeyValuePair('velocity', velocity)
            .addKeyValuePair('acceleration', acceleration)
            .build();
        return packet.send();
    }
    moveMotorInTime(motorName, position, duration) {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('move')
            .addArguments(motorName, position)
            .addKeyValuePair('duration', duration)
            .build();
        return packet.send();
    }
    moveMotorInDirection(motorName, direction, velocity) {
        const direction_code = direction.toLowerCase() == 'right' ? 1 : direction.toLowerCase() == 'left' ? -1 : 0;
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('move')
            .addArguments(motorName, direction_code)
            .addKeyValuePair('velocity', velocity)
            .addParameter('continuously')
            .build();
        return packet.send();
    }
    playAnimation(animationName) {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('animate')
            .addArgument(animationName)
            .build();
        return packet.send();
    }
    pauseAnimation() {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('animate')
            .addParameter('pause')
            .build();
        return packet.send();
    }
    resumeAnimation() {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('animate')
            .addParameter('resume')
            .build();
        return packet.send();
    }
    stopAnimation() {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('animate')
            .addParameter('stop')
            .build();
        return packet.send();
    }
    playAudio(fileName) {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('audio')
            .addArgument(fileName)
            .build();
        return packet.send();
    }
    pauseAudio() {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('audio')
            .addParameter('pause')
            .build();
        return packet.send();
    }
    resumeAudio() {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('audio')
            .addParameter('resume')
            .build();
        return packet.send();
    }
    stopAudio() {
        const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol)
            .addCommand('audio')
            .addParameter('stop')
            .build();
        return packet.send();
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map