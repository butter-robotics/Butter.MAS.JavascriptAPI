
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

*Defined in [butter/mas/packets/packet.ts:20](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/packets/packet.ts#L20)*

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

*Defined in [butter/mas/packets/packet.ts:18](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/packets/packet.ts#L18)*

___

###  port

• **port**: *number*

*Defined in [butter/mas/packets/packet.ts:19](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/packets/packet.ts#L19)*

___

###  query

• **query**: *string*

*Defined in [butter/mas/packets/packet.ts:20](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/packets/packet.ts#L20)*

## Methods

###  equals

▸ **equals**(`other`: any): *boolean*

*Defined in [butter/mas/packets/packet.ts:114](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/packets/packet.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | any |

**Returns:** *boolean*

___

### `Protected` generateEmptyResponse

▸ **generateEmptyResponse**(`error`: any, `errorType`: string): *[Response](../interfaces/_butter_mas_packets_packet_.response.md)*

*Defined in [butter/mas/packets/packet.ts:77](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/packets/packet.ts#L77)*

Generates empty response packet

**`memberof`** Packet

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`error` | any | null |
`errorType` | string | "unknown" |

**Returns:** *[Response](../interfaces/_butter_mas_packets_packet_.response.md)*

error response

___

### `Protected` generateResponse

▸ **generateResponse**(`content`: string): *[Response](../interfaces/_butter_mas_packets_packet_.response.md)*

*Defined in [butter/mas/packets/packet.ts:56](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/packets/packet.ts#L56)*

**`memberof`** Packet

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | string | response content |

**Returns:** *[Response](../interfaces/_butter_mas_packets_packet_.response.md)*

structured response

___

###  send

▸ **send**(`timeout?`: number): *void*

*Defined in [butter/mas/packets/packet.ts:43](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/packets/packet.ts#L43)*

Send packet abstract method

**`memberof`** Packet

**Parameters:**

Name | Type |
------ | ------ |
`timeout?` | number |

**Returns:** *void*
