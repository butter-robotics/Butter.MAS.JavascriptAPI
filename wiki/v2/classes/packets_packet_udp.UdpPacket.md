# Class: UdpPacket

[packets/packet\_udp](../modules/packets_packet_udp.md).UdpPacket

Represents a http data packet

 UdpPacket

## Hierarchy

- [`Packet`](packets_packet.Packet.md)

  ↳ **`UdpPacket`**

## Table of contents

### Constructors

- [constructor](packets_packet_udp.UdpPacket.md#constructor)

### Properties

- [ip](packets_packet_udp.UdpPacket.md#ip)
- [port](packets_packet_udp.UdpPacket.md#port)
- [query](packets_packet_udp.UdpPacket.md#query)

### Methods

- [equals](packets_packet_udp.UdpPacket.md#equals)
- [generateEmptyResponse](packets_packet_udp.UdpPacket.md#generateemptyresponse)
- [generateResponse](packets_packet_udp.UdpPacket.md#generateresponse)
- [send](packets_packet_udp.UdpPacket.md#send)

## Constructors

### constructor

• **new UdpPacket**(`ip`, `port`, `query`): [`UdpPacket`](packets_packet_udp.UdpPacket.md)

Creates an instance of UdpPacket.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ip` | `string` | robot IP |
| `port` | `number` | robot port |
| `query` | `string` | packet payload |

#### Returns

[`UdpPacket`](packets_packet_udp.UdpPacket.md)

**`Memberof`**

UdpPacket

#### Overrides

[Packet](packets_packet.Packet.md).[constructor](packets_packet.Packet.md#constructor)

#### Defined in

[packets/packet_udp.ts:20](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_udp.ts#L20)

## Properties

### ip

• **ip**: `string`

#### Inherited from

[Packet](packets_packet.Packet.md).[ip](packets_packet.Packet.md#ip)

#### Defined in

[packets/packet.ts:9](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet.ts#L9)

___

### port

• **port**: `number`

#### Inherited from

[Packet](packets_packet.Packet.md).[port](packets_packet.Packet.md#port)

#### Defined in

[packets/packet.ts:10](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet.ts#L10)

___

### query

• **query**: `string`

#### Inherited from

[Packet](packets_packet.Packet.md).[query](packets_packet.Packet.md#query)

#### Defined in

[packets/packet.ts:11](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet.ts#L11)

## Methods

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `any` |

#### Returns

`boolean`

#### Overrides

[Packet](packets_packet.Packet.md).[equals](packets_packet.Packet.md#equals)

#### Defined in

[packets/packet_udp.ts:45](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_udp.ts#L45)

___

### generateEmptyResponse

▸ **generateEmptyResponse**(`error?`, `errorType?`): [`Response`](../interfaces/interfaces_response.Response.md)

Generates empty response packet

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `error?` | `any` | `null` |  |
| `errorType?` | `string` | `'unknown'` | error type |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

error response

**`Memberof`**

Packet
/**

**`Memberof`**

Packet

#### Inherited from

[Packet](packets_packet.Packet.md).[generateEmptyResponse](packets_packet.Packet.md#generateemptyresponse)

#### Defined in

[packets/packet.ts:73](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet.ts#L73)

___

### generateResponse

▸ **generateResponse**(`content`): [`Response`](../interfaces/interfaces_response.Response.md)

Generates response packet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | [`ResponseData`](../interfaces/interfaces_response.ResponseData.md) | response content |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

structured response

**`Memberof`**

Packet

#### Inherited from

[Packet](packets_packet.Packet.md).[generateResponse](packets_packet.Packet.md#generateresponse)

#### Defined in

[packets/packet.ts:46](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet.ts#L46)

___

### send

▸ **send**(`timeout?`): `Promise`\<[`Response`](../interfaces/interfaces_response.Response.md)\>

Send packet

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `timeout?` | `number` | `40` | packet timeout (optional) |

#### Returns

`Promise`\<[`Response`](../interfaces/interfaces_response.Response.md)\>

response containing the response

**`Memberof`**

UdpPacket

#### Overrides

[Packet](packets_packet.Packet.md).[send](packets_packet.Packet.md#send)

#### Defined in

[packets/packet_udp.ts:32](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_udp.ts#L32)
