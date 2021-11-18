
# Class: PacketFactory

Packet factory for different types of protocols

## Hierarchy

* **PacketFactory**

## Index

### Methods

* [getPacket](_butter_mas_packets_packet_factory_.packetfactory.md#getpacket)
* [getPacketClass](_butter_mas_packets_packet_factory_.packetfactory.md#getpacketclass)

## Methods

###  getPacket

▸ **getPacket**(`ip`: string, `port`: number, `query`: string, `protocol`: string): *[HttpPacket](_butter_mas_packets_packet_http_.httppacket.md)‹› | [TcpPacket](_butter_mas_packets_packet_tcp_.tcppacket.md)‹› | [UdpPacket](_butter_mas_packets_packet_udp_.udppacket.md)‹›*

*Defined in [butter/mas/packets/packet_factory.ts:22](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/packets/packet_factory.ts#L22)*

Creates new client

**`memberof`** PacketFactory

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`ip` | string | - | robot IP |
`port` | number | - | - |
`query` | string | - | packet data |
`protocol` | string | "http" | - |

**Returns:** *[HttpPacket](_butter_mas_packets_packet_http_.httppacket.md)‹› | [TcpPacket](_butter_mas_packets_packet_tcp_.tcppacket.md)‹› | [UdpPacket](_butter_mas_packets_packet_udp_.udppacket.md)‹›*

requested client

___

###  getPacketClass

▸ **getPacketClass**(`protocol`: string): *[HttpPacket](_butter_mas_packets_packet_http_.httppacket.md)*

*Defined in [butter/mas/packets/packet_factory.ts:44](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/packets/packet_factory.ts#L44)*

Get packet class

**`memberof`** PacketFactory

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`protocol` | string | "http" |

**Returns:** *[HttpPacket](_butter_mas_packets_packet_http_.httppacket.md)*
