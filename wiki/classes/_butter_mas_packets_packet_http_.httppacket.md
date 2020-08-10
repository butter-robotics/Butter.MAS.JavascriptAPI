
# Class: HttpPacket

Represents a http data packet

**`export`** 

## Hierarchy

* [Packet](_butter_mas_packets_packet_.packet.md)

  ↳ **HttpPacket**

## Index

### Constructors

* [constructor](_butter_mas_packets_packet_http_.httppacket.md#constructor)

### Properties

* [ip](_butter_mas_packets_packet_http_.httppacket.md#ip)
* [port](_butter_mas_packets_packet_http_.httppacket.md#port)
* [query](_butter_mas_packets_packet_http_.httppacket.md#query)

### Methods

* [equals](_butter_mas_packets_packet_http_.httppacket.md#equals)
* [generateEmptyResponse](_butter_mas_packets_packet_http_.httppacket.md#protected-generateemptyresponse)
* [generateResponse](_butter_mas_packets_packet_http_.httppacket.md#protected-generateresponse)
* [send](_butter_mas_packets_packet_http_.httppacket.md#send)

## Constructors

###  constructor

\+ **new HttpPacket**(`ip`: string, `port`: number, `query`: string): *[HttpPacket](_butter_mas_packets_packet_http_.httppacket.md)*

*Overrides [Packet](_butter_mas_packets_packet_.packet.md).[constructor](_butter_mas_packets_packet_.packet.md#constructor)*

*Defined in [butter/mas/packets/packet_http.ts:12](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_http.ts#L12)*

Creates an instance of HttpPacket.

**`memberof`** HttpPacket

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ip` | string | robot IP |
`port` | number | robot port |
`query` | string | packet payload |

**Returns:** *[HttpPacket](_butter_mas_packets_packet_http_.httppacket.md)*

## Properties

###  ip

• **ip**: *string*

*Inherited from [Packet](_butter_mas_packets_packet_.packet.md).[ip](_butter_mas_packets_packet_.packet.md#ip)*

*Defined in [butter/mas/packets/packet.ts:19](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet.ts#L19)*

___

###  port

• **port**: *number*

*Inherited from [Packet](_butter_mas_packets_packet_.packet.md).[port](_butter_mas_packets_packet_.packet.md#port)*

*Defined in [butter/mas/packets/packet.ts:20](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet.ts#L20)*

___

###  query

• **query**: *string*

*Inherited from [Packet](_butter_mas_packets_packet_.packet.md).[query](_butter_mas_packets_packet_.packet.md#query)*

*Defined in [butter/mas/packets/packet.ts:21](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet.ts#L21)*

## Methods

###  equals

▸ **equals**(`other`: any): *boolean*

*Overrides [Packet](_butter_mas_packets_packet_.packet.md).[equals](_butter_mas_packets_packet_.packet.md#equals)*

*Defined in [butter/mas/packets/packet_http.ts:47](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_http.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | any |

**Returns:** *boolean*

___

### `Protected` generateEmptyResponse

▸ **generateEmptyResponse**(`error`: any, `errorType`: string): *[Response](../interfaces/_butter_mas_packets_packet_.response.md)*

*Inherited from [Packet](_butter_mas_packets_packet_.packet.md).[generateEmptyResponse](_butter_mas_packets_packet_.packet.md#protected-generateemptyresponse)*

*Defined in [butter/mas/packets/packet.ts:78](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet.ts#L78)*

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

*Inherited from [Packet](_butter_mas_packets_packet_.packet.md).[generateResponse](_butter_mas_packets_packet_.packet.md#protected-generateresponse)*

*Defined in [butter/mas/packets/packet.ts:57](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet.ts#L57)*

**`memberof`** Packet

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | string | response content |

**Returns:** *[Response](../interfaces/_butter_mas_packets_packet_.response.md)*

structured response

___

###  send

▸ **send**(`timeout`: number): *Promise‹[Response](../interfaces/_butter_mas_packets_packet_.response.md)›*

*Overrides [Packet](_butter_mas_packets_packet_.packet.md).[send](_butter_mas_packets_packet_.packet.md#send)*

*Defined in [butter/mas/packets/packet_http.ts:34](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_http.ts#L34)*

Send packet

**`memberof`** HttpPacket

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`timeout` | number | 40 |

**Returns:** *Promise‹[Response](../interfaces/_butter_mas_packets_packet_.response.md)›*

response containing the response
