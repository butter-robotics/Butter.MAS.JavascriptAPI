
# Class: Packet

Represents an abstract data packet

## Hierarchy

* **Packet**

  ↳ [HttpPacket](_butter_mas_packets_packet_http_.httppacket.md)

  ↳ [TcpPacket](_butter_mas_packets_packet_tcp_.tcppacket.md)

  ↳ [UdpPacket](_butter_mas_packets_packet_udp_.udppacket.md)

## Index

### Constructors

* [constructor](_butter_mas_packets_packet_.packet.md#constructor)

### Properties

* [ip](_butter_mas_packets_packet_.packet.md#ip)
* [port](_butter_mas_packets_packet_.packet.md#port)
* [query](_butter_mas_packets_packet_.packet.md#query)

### Methods

* [equals](_butter_mas_packets_packet_.packet.md#equals)
* [generateEmptyResponse](_butter_mas_packets_packet_.packet.md#protected-generateemptyresponse)
* [generateResponse](_butter_mas_packets_packet_.packet.md#protected-generateresponse)
* [send](_butter_mas_packets_packet_.packet.md#send)

## Constructors

###  constructor

\+ **new Packet**(`ip`: string, `port`: number, `query`: string): *[Packet](_butter_mas_packets_packet_.packet.md)*

*Defined in [butter/mas/packets/packet.ts:11](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet.ts#L11)*

Creates an instance of Packet.

**`memberof`** Packet

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ip` | string | robot IP |
`port` | number | robot port |
`query` | string | packet payload |

**Returns:** *[Packet](_butter_mas_packets_packet_.packet.md)*

## Properties

###  ip

• **ip**: *string*

*Defined in [butter/mas/packets/packet.ts:9](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet.ts#L9)*

___

###  port

• **port**: *number*

*Defined in [butter/mas/packets/packet.ts:10](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet.ts#L10)*

___

###  query

• **query**: *string*

*Defined in [butter/mas/packets/packet.ts:11](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet.ts#L11)*

## Methods

###  equals

▸ **equals**(`other`: any): *boolean*

*Defined in [butter/mas/packets/packet.ts:147](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | any |

**Returns:** *boolean*

___

### `Protected` generateEmptyResponse

▸ **generateEmptyResponse**(`error`: any, `errorType`: string): *[Response](../interfaces/_butter_mas_interfaces_response_.response.md)*

*Defined in [butter/mas/packets/packet.ts:76](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet.ts#L76)*

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

*Defined in [butter/mas/packets/packet.ts:47](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet.ts#L47)*

**`memberof`** Packet

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | [ResponseData](../interfaces/_butter_mas_interfaces_response_.responsedata.md) | response content |

**Returns:** *[Response](../interfaces/_butter_mas_interfaces_response_.response.md)*

structured response

___

###  send

▸ **send**(`timeout?`: number): *void*

*Defined in [butter/mas/packets/packet.ts:34](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet.ts#L34)*

Send packet abstract method

**`memberof`** Packet

**Parameters:**

Name | Type |
------ | ------ |
`timeout?` | number |

**Returns:** *void*
