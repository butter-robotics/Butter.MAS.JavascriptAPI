# Class: PacketFactory

[packets/packet\_factory](../modules/packets_packet_factory.md).PacketFactory

Packet factory for different types of protocols

 PacketFactory

## Table of contents

### Constructors

- [constructor](packets_packet_factory.PacketFactory.md#constructor)

### Methods

- [getPacket](packets_packet_factory.PacketFactory.md#getpacket)
- [getPacketClass](packets_packet_factory.PacketFactory.md#getpacketclass)

## Constructors

### constructor

• **new PacketFactory**(): [`PacketFactory`](packets_packet_factory.PacketFactory.md)

#### Returns

[`PacketFactory`](packets_packet_factory.PacketFactory.md)

## Methods

### getPacket

▸ **getPacket**(`ip`, `port?`, `query`, `protocol?`): [`HttpPacket`](packets_packet_http.HttpPacket.md) \| [`TcpPacket`](packets_packet_tcp.TcpPacket.md) \| [`UdpPacket`](packets_packet_udp.UdpPacket.md)

Creates new client

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ip` | `string` | `undefined` | robot IP |
| `port?` | `number` | `undefined` | robot port |
| `query` | `string` | `undefined` | packet data |
| `protocol?` | `string` | `'http'` | communication protocol |

#### Returns

[`HttpPacket`](packets_packet_http.HttpPacket.md) \| [`TcpPacket`](packets_packet_tcp.TcpPacket.md) \| [`UdpPacket`](packets_packet_udp.UdpPacket.md)

requested client

**`Memberof`**

PacketFactory

#### Defined in

[packets/packet_factory.ts:21](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_factory.ts#L21)

___

### getPacketClass

▸ **getPacketClass**(`protocol?`): typeof [`HttpPacket`](packets_packet_http.HttpPacket.md)

Get packet class

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `protocol?` | `string` | `'http'` | communication protocol |

#### Returns

typeof [`HttpPacket`](packets_packet_http.HttpPacket.md)

class of type Packet

**`Memberof`**

PacketFactory

#### Defined in

[packets/packet_factory.ts:43](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_factory.ts#L43)
