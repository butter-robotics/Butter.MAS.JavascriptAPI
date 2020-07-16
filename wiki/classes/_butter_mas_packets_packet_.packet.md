
# Class: Packet

Represents an abstract data packet

**`export`** 

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

*Defined in [butter/mas/packets/packet.ts:21](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9c75d0f/butter/mas/packets/packet.ts#L21)*

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

*Defined in [butter/mas/packets/packet.ts:19](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9c75d0f/butter/mas/packets/packet.ts#L19)*

___

###  port

• **port**: *number*

*Defined in [butter/mas/packets/packet.ts:20](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9c75d0f/butter/mas/packets/packet.ts#L20)*

___

###  query

• **query**: *string*

*Defined in [butter/mas/packets/packet.ts:21](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9c75d0f/butter/mas/packets/packet.ts#L21)*

## Methods

###  equals

▸ **equals**(`other`: any): *boolean*

*Defined in [butter/mas/packets/packet.ts:91](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9c75d0f/butter/mas/packets/packet.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | any |

**Returns:** *boolean*

___

### `Protected` generateEmptyResponse

▸ **generateEmptyResponse**(`errorType`: string): *[Response](../interfaces/_butter_mas_packets_packet_.response.md)*

*Defined in [butter/mas/packets/packet.ts:78](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9c75d0f/butter/mas/packets/packet.ts#L78)*

Generates empty response packet

**`memberof`** Packet

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`errorType` | string | "unknown" |

**Returns:** *[Response](../interfaces/_butter_mas_packets_packet_.response.md)*

error response

___

### `Protected` generateResponse

▸ **generateResponse**(`content`: string): *[Response](../interfaces/_butter_mas_packets_packet_.response.md)*

*Defined in [butter/mas/packets/packet.ts:57](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9c75d0f/butter/mas/packets/packet.ts#L57)*

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

*Defined in [butter/mas/packets/packet.ts:44](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9c75d0f/butter/mas/packets/packet.ts#L44)*

Send packet abstract methud

**`memberof`** Packet

**Parameters:**

Name | Type |
------ | ------ |
`timeout?` | number |

**Returns:** *void*
