var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
System.register("butter/mas/packets/packet", [], function (exports_1, context_1) {
    "use strict";
    var Packet;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Packet = class Packet {
                constructor(ip, port, query) {
                    this.ip = ip;
                    this.port = port;
                    this.query = query;
                }
                send(timeout) {
                    throw new Error('Not Implemented');
                }
                generateResponse(content) {
                    let response;
                    response = {
                        data: content,
                        status: 200,
                        statusText: 'OK'
                    };
                    return response;
                }
                generateEmptyResponse(errorType = 'unknown') {
                    let response;
                    response = {
                        data: `{ "exception": "Request resolved with an ${errorType} error" }`,
                        status: 400,
                        statusText: 'Failed'
                    };
                    return response;
                }
                equals(other) {
                    return other instanceof Packet && this.ip == other.ip && this.port == other.port && this.query == other.query;
                }
            };
            exports_1("Packet", Packet);
        }
    };
});
System.register("butter/mas/packets/packet_http", ["../../../node_modules/axios/index", "butter/mas/packets/packet"], function (exports_2, context_2) {
    "use strict";
    var index_1, packet_1, HttpPacket;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (packet_1_1) {
                packet_1 = packet_1_1;
            }
        ],
        execute: function () {
            HttpPacket = class HttpPacket extends packet_1.Packet {
                constructor(ip, port, query) {
                    super(ip, port, query);
                }
                send(timeout = 5) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let response;
                        try {
                            response = yield index_1.default.get(`http://${this.ip}:${this.port}/${this.query}`, { timeout });
                        }
                        catch (error) {
                            console.error(`Warning: request failed.\n${error}\n`);
                            response = this.generateEmptyResponse();
                        }
                        return response;
                    });
                }
                equals(other) {
                    return other instanceof HttpPacket && this.ip == other.ip && this.port == other.port && this.query == other.query;
                }
            };
            exports_2("HttpPacket", HttpPacket);
        }
    };
});
System.register("butter/mas/packets/packet_tcp", ["../../../node_modules/axios/index", "butter/mas/packets/packet"], function (exports_3, context_3) {
    "use strict";
    var index_2, packet_2, TcpPacket;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (packet_2_1) {
                packet_2 = packet_2_1;
            }
        ],
        execute: function () {
            TcpPacket = class TcpPacket extends packet_2.Packet {
                constructor(ip, port, query) {
                    super(ip, port, query);
                }
                send(timeout = 5) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let response;
                        try {
                            response = yield index_2.default.get(`http://${this.ip}:${this.port}/${this.query}`, { timeout });
                        }
                        catch (error) {
                            console.error(`Warning: request failed.\n${error}\n`);
                            response = this.generateEmptyResponse();
                        }
                        return response;
                    });
                }
                equals(other) {
                    return other instanceof TcpPacket && this.ip == other.ip && this.port == other.port && this.query == other.query;
                }
            };
            exports_3("TcpPacket", TcpPacket);
        }
    };
});
System.register("butter/mas/packets/packet_udp", ["../../../node_modules/axios/index", "butter/mas/packets/packet"], function (exports_4, context_4) {
    "use strict";
    var index_3, packet_3, UdpPacket;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (packet_3_1) {
                packet_3 = packet_3_1;
            }
        ],
        execute: function () {
            UdpPacket = class UdpPacket extends packet_3.Packet {
                constructor(ip, port, query) {
                    super(ip, port, query);
                }
                send(timeout = 5) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let response;
                        try {
                            response = yield index_3.default.get(`http://${this.ip}:${this.port}/${this.query}`, { timeout });
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
            };
            exports_4("UdpPacket", UdpPacket);
        }
    };
});
System.register("butter/mas/packets/packet_factory", ["butter/mas/packets/packet_http", "butter/mas/packets/packet_tcp", "butter/mas/packets/packet_udp"], function (exports_5, context_5) {
    "use strict";
    var packet_http_1, packet_tcp_1, packet_udp_1, PacketFactory;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (packet_http_1_1) {
                packet_http_1 = packet_http_1_1;
            },
            function (packet_tcp_1_1) {
                packet_tcp_1 = packet_tcp_1_1;
            },
            function (packet_udp_1_1) {
                packet_udp_1 = packet_udp_1_1;
            }
        ],
        execute: function () {
            PacketFactory = class PacketFactory {
                getPacket(ip, port, query, protocol = "http") {
                    if (protocol == "http") {
                        return new packet_http_1.HttpPacket(ip, port, query);
                    }
                    else if (protocol == "tcp") {
                        throw new Error('Not Implemented');
                        return new packet_tcp_1.TcpPacket(ip, port, query);
                    }
                    else if (protocol == "udp") {
                        throw new Error('Not Implemented');
                        return new packet_udp_1.UdpPacket(ip, port, query);
                    }
                    else {
                        return null;
                    }
                }
                getPacketClass(protocol = "http") {
                    if (protocol == "http") {
                        return packet_http_1.HttpPacket;
                    }
                    else if (protocol == "tcp") {
                        throw new Error('Not Implemented');
                        return packet_tcp_1.TcpPacket;
                    }
                    else if (protocol == "udp") {
                        throw new Error('Not Implemented');
                        return packet_udp_1.UdpPacket;
                    }
                    else {
                        return null;
                    }
                }
            };
            exports_5("PacketFactory", PacketFactory);
        }
    };
});
System.register("butter/mas/packets/packet_builder", ["butter/mas/packets/packet_factory"], function (exports_6, context_6) {
    "use strict";
    var packet_factory_1, PacketBuilder;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (packet_factory_1_1) {
                packet_factory_1 = packet_factory_1_1;
            }
        ],
        execute: function () {
            PacketBuilder = class PacketBuilder {
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
            };
            exports_6("PacketBuilder", PacketBuilder);
        }
    };
});
System.register("butter/mas/clients/client", ["butter/mas/packets/packet_builder"], function (exports_7, context_7) {
    "use strict";
    var packet_builder_1, Client;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (packet_builder_1_1) {
                packet_builder_1 = packet_builder_1_1;
            }
        ],
        execute: function () {
            Client = class Client {
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
                    const packet = new packet_builder_1.PacketBuilder(this.ip, this.port, this.protocol).addCommand('move').addArguments(motorName, position)
                        .addKeyValuePair('velocity', velocity).addKeyValuePair('acceleration', acceleration).build();
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
            };
            exports_7("Client", Client);
        }
    };
});
System.register("butter/mas/clients/client_http", ["butter/mas/clients/client"], function (exports_8, context_8) {
    "use strict";
    var client_1, HttpClient;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (client_1_1) {
                client_1 = client_1_1;
            }
        ],
        execute: function () {
            HttpClient = class HttpClient extends client_1.Client {
                constructor(ip, port = 5555, protocol = 'http') {
                    super(ip, port, protocol);
                }
            };
            exports_8("HttpClient", HttpClient);
        }
    };
});
System.register("butter/mas/clients/client_tcp", ["butter/mas/clients/client"], function (exports_9, context_9) {
    "use strict";
    var client_2, TcpClient;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (client_2_1) {
                client_2 = client_2_1;
            }
        ],
        execute: function () {
            TcpClient = class TcpClient extends client_2.Client {
                constructor(ip, port = 5050, protocol = 'tcp') {
                    super(ip, port, protocol);
                }
            };
            exports_9("TcpClient", TcpClient);
        }
    };
});
System.register("butter/mas/clients/client_udp", ["butter/mas/clients/client"], function (exports_10, context_10) {
    "use strict";
    var client_3, UdpClient;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (client_3_1) {
                client_3 = client_3_1;
            }
        ],
        execute: function () {
            UdpClient = class UdpClient extends client_3.Client {
                constructor(ip, port = 5000, protocol = 'udp') {
                    super(ip, port, protocol);
                }
            };
            exports_10("UdpClient", UdpClient);
        }
    };
});
System.register("butter/mas/clients/client_factory", ["butter/mas/clients/client_http", "butter/mas/clients/client_tcp", "butter/mas/clients/client_udp"], function (exports_11, context_11) {
    "use strict";
    var client_http_1, client_tcp_1, client_udp_1, ClientFactory;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (client_http_1_1) {
                client_http_1 = client_http_1_1;
            },
            function (client_tcp_1_1) {
                client_tcp_1 = client_tcp_1_1;
            },
            function (client_udp_1_1) {
                client_udp_1 = client_udp_1_1;
            }
        ],
        execute: function () {
            ClientFactory = class ClientFactory {
                getClient(ip, port, protocol = "http") {
                    if (protocol == "http") {
                        return port ? new client_http_1.HttpClient(ip, port) : new client_http_1.HttpClient(ip);
                    }
                    else if (protocol == "tcp") {
                        throw new Error('Not Implemented');
                        return port ? new client_tcp_1.TcpClient(ip, port) : new client_tcp_1.TcpClient(ip);
                    }
                    else if (protocol == "udp") {
                        throw new Error('Not Implemented');
                        return port ? new client_udp_1.UdpClient(ip, port) : new client_udp_1.UdpClient(ip);
                    }
                    else {
                        return null;
                    }
                }
                getClientClass(protocol = "http") {
                    if (protocol == "http") {
                        return client_http_1.HttpClient;
                    }
                    else if (protocol == "tcp") {
                        throw new Error('Not Implemented');
                        return client_tcp_1.TcpClient;
                    }
                    else if (protocol == "udp") {
                        throw new Error('Not Implemented');
                        return client_udp_1.UdpClient;
                    }
                    else {
                        return null;
                    }
                }
            };
            exports_11("ClientFactory", ClientFactory);
        }
    };
});
System.register("butter/mas/environment", [], function (exports_12, context_12) {
    "use strict";
    var __version__, app_name;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [],
        execute: function () {
            exports_12("__version__", __version__ = '0.12.1');
            exports_12("app_name", app_name = 'butter.mas-api');
        }
    };
});
System.register("butter/mas/api", ["butter/mas/clients/client_factory", "butter/mas/clients/client_http", "butter/mas/environment"], function (exports_13, context_13) {
    "use strict";
    var client_factory_1, client_http_2, environment_1;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (client_factory_1_1) {
                client_factory_1 = client_factory_1_1;
            },
            function (client_http_2_1) {
                client_http_2 = client_http_2_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }
        ],
        execute: function () {
            exports_13("ClientFactory", client_factory_1.ClientFactory);
            exports_13("HttpClient", client_http_2.HttpClient);
            exports_13("__version__", environment_1.__version__);
        }
    };
});
//# sourceMappingURL=api.js.map