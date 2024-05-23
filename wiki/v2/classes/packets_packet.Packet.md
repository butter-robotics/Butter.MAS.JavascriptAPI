# Class: Packet

[packets/packet](../modules/packets_packet.md).Packet

Represents an abstract data packet

 Packet

## Hierarchy

- **`Packet`**

  ↳ [`HttpPacket`](packets_packet_http.HttpPacket.md)

  ↳ [`TcpPacket`](packets_packet_tcp.TcpPacket.md)

  ↳ [`UdpPacket`](packets_packet_udp.UdpPacket.md)

## Table of contents

### Constructors

- [constructor](packets_packet.Packet.md#constructor)

### Properties

- [ip](packets_packet.Packet.md#ip)
- [port](packets_packet.Packet.md#port)
- [query](packets_packet.Packet.md#query)

### Methods

- [equals](packets_packet.Packet.md#equals)
- [generateEmptyResponse](packets_packet.Packet.md#generateemptyresponse)
- [generateResponse](packets_packet.Packet.md#generateresponse)
- [send](packets_packet.Packet.md#send)

## Constructors

### constructor

• **new Packet**(`ip`, `port`, `query`): [`Packet`](packets_packet.Packet.md)

Creates an instance of Packet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ip` | `string` | robot IP |
| `port` | `number` | robot port |
| `query` | `string` | packet payload |

#### Returns

[`Packet`](packets_packet.Packet.md)

**`Memberof`**

Packet

#### Defined in

[packets/packet.ts:21](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet.ts#L21)

## Properties

### ip

• **ip**: `string`

#### Defined in

[packets/packet.ts:9](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet.ts#L9)

___

### port

• **port**: `number`

#### Defined in

[packets/packet.ts:10](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet.ts#L10)

___

### query

• **query**: `string`

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

#### Defined in

[packets/packet.ts:144](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet.ts#L144)

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

#### Defined in

[packets/packet.ts:46](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet.ts#L46)

___

### send

▸ **send**(`timeout?`): `Promise`\<[`Response`](../interfaces/interfaces_response.Response.md)\>

Send packet abstract method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeout?` | `number` | packet timeout (optional) |

#### Returns

`Promise`\<[`Response`](../interfaces/interfaces_response.Response.md)\>

structured response

**`Memberof`**

Packet

#### Defined in

[packets/packet.ts:35](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet.ts#L35)
