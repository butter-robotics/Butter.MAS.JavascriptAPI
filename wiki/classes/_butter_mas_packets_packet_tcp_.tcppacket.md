
# Class: TcpPacket

Represents a http data packet

## Hierarchy

* [Packet](_butter_mas_packets_packet_.packet.md)

  ↳ **TcpPacket**

## Index

### Constructors

* [constructor](_butter_mas_packets_packet_tcp_.tcppacket.md#constructor)

### Properties

* [ip](_butter_mas_packets_packet_tcp_.tcppacket.md#ip)
* [port](_butter_mas_packets_packet_tcp_.tcppacket.md#port)
* [query](_butter_mas_packets_packet_tcp_.tcppacket.md#query)

### Methods

* [equals](_butter_mas_packets_packet_tcp_.tcppacket.md#equals)
* [generateEmptyResponse](_butter_mas_packets_packet_tcp_.tcppacket.md#protected-generateemptyresponse)
* [generateResponse](_butter_mas_packets_packet_tcp_.tcppacket.md#protected-generateresponse)
* [send](_butter_mas_packets_packet_tcp_.tcppacket.md#send)

## Constructors

###  constructor

\+ **new TcpPacket**(`ip`: string, `port`: number, `query`: string): *[TcpPacket](_butter_mas_packets_packet_tcp_.tcppacket.md)*

*Overrides [Packet](_butter_mas_packets_packet_.packet.md).[constructor](_butter_mas_packets_packet_.packet.md#constructor)*

*Defined in [butter/mas/packets/packet_tcp.ts:12](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/f2f46d3/butter/mas/packets/packet_tcp.ts#L12)*

Creates an instance of TcpPacket.

**`memberof`** TcpPacket

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ip` | string | robot IP |
`port` | number | robot port |
`query` | string | packet payload |

**Returns:** *[TcpPacket](_butter_mas_packets_packet_tcp_.tcppacket.md)*

## Properties

###  ip

• **ip**: *string*

*Inherited from [Packet](_butter_mas_packets_packet_.packet.md).[ip](_butter_mas_packets_packet_.packet.md#ip)*

*Defined in [butter/mas/packets/packet.ts:9](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/f2f46d3/butter/mas/packets/packet.ts#L9)*

___

###  port

• **port**: *number*

*Inherited from [Packet](_butter_mas_packets_packet_.packet.md).[port](_butter_mas_packets_packet_.packet.md#port)*

*Defined in [butter/mas/packets/packet.ts:10](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/f2f46d3/butter/mas/packets/packet.ts#L10)*

___

###  query

• **query**: *string*

*Inherited from [Packet](_butter_mas_packets_packet_.packet.md).[query](_butter_mas_packets_packet_.packet.md#query)*

*Defined in [butter/mas/packets/packet.ts:11](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/f2f46d3/butter/mas/packets/packet.ts#L11)*

## Methods

###  equals

▸ **equals**(`other`: any): *boolean*

*Overrides [Packet](_butter_mas_packets_packet_.packet.md).[equals](_butter_mas_packets_packet_.packet.md#equals)*

*Defined in [butter/mas/packets/packet_tcp.ts:47](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/f2f46d3/butter/mas/packets/packet_tcp.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | any |

**Returns:** *boolean*

___

### `Protected` generateEmptyResponse

▸ **generateEmptyResponse**(`error`: any, `errorType`: string): *[Response](../interfaces/_butter_mas_interfaces_response_.response.md)*

*Inherited from [Packet](_butter_mas_packets_packet_.packet.md).[generateEmptyResponse](_butter_mas_packets_packet_.packet.md#protected-generateemptyresponse)*

*Defined in [butter/mas/packets/packet.ts:76](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/f2f46d3/butter/mas/packets/packet.ts#L76)*

Generates empty response packet

**`memberof`** Packet
/**

**`memberof`** Packet

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`error` | any | null |
`errorType` | string | "unknown" |

**Returns:** *[Response](../interfaces/_butter_mas_interfaces_response_.response.md)*

error response

___

### `Protected` generateResponse

▸ **generateResponse**(`content`: [ResponseData](../interfaces/_butter_mas_interfaces_response_.responsedata.md)): *[Response](../interfaces/_butter_mas_interfaces_response_.response.md)*

*Inherited from [Packet](_butter_mas_packets_packet_.packet.md).[generateResponse](_butter_mas_packets_packet_.packet.md#protected-generateresponse)*

*Defined in [butter/mas/packets/packet.ts:47](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/f2f46d3/butter/mas/packets/packet.ts#L47)*

**`memberof`** Packet

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | [ResponseData](../interfaces/_butter_mas_interfaces_response_.responsedata.md) | response content |

**Returns:** *[Response](../interfaces/_butter_mas_interfaces_response_.response.md)*

structured response

___

###  send

▸ **send**(`timeout`: number): *Promise‹[Response](../interfaces/_butter_mas_interfaces_response_.response.md)›*

*Overrides [Packet](_butter_mas_packets_packet_.packet.md).[send](_butter_mas_packets_packet_.packet.md#send)*

*Defined in [butter/mas/packets/packet_tcp.ts:34](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/f2f46d3/butter/mas/packets/packet_tcp.ts#L34)*

Send packet

**`memberof`** TcpPacket

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`timeout` | number | 40 |

**Returns:** *Promise‹[Response](../interfaces/_butter_mas_interfaces_response_.response.md)›*

response containing the response
