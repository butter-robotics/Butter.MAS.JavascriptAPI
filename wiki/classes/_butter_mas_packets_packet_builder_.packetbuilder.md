
# Class: PacketBuilder

Builds a command packet using the builder design pattern

## Hierarchy

* **PacketBuilder**

## Index

### Constructors

* [constructor](_butter_mas_packets_packet_builder_.packetbuilder.md#constructor)

### Properties

* [args](_butter_mas_packets_packet_builder_.packetbuilder.md#args)
* [cmd](_butter_mas_packets_packet_builder_.packetbuilder.md#cmd)
* [ip](_butter_mas_packets_packet_builder_.packetbuilder.md#ip)
* [keys](_butter_mas_packets_packet_builder_.packetbuilder.md#keys)
* [packet](_butter_mas_packets_packet_builder_.packetbuilder.md#packet)
* [params](_butter_mas_packets_packet_builder_.packetbuilder.md#params)
* [port](_butter_mas_packets_packet_builder_.packetbuilder.md#port)

### Methods

* [_formatParameter](_butter_mas_packets_packet_builder_.packetbuilder.md#private-_formatparameter)
* [addArgument](_butter_mas_packets_packet_builder_.packetbuilder.md#addargument)
* [addArguments](_butter_mas_packets_packet_builder_.packetbuilder.md#addarguments)
* [addCommand](_butter_mas_packets_packet_builder_.packetbuilder.md#addcommand)
* [addKeyValuePair](_butter_mas_packets_packet_builder_.packetbuilder.md#addkeyvaluepair)
* [addParameter](_butter_mas_packets_packet_builder_.packetbuilder.md#addparameter)
* [addParameters](_butter_mas_packets_packet_builder_.packetbuilder.md#addparameters)
* [build](_butter_mas_packets_packet_builder_.packetbuilder.md#build)

## Constructors

###  constructor

\+ **new PacketBuilder**(`ip`: string, `port`: number, `protocol`: string): *[PacketBuilder](_butter_mas_packets_packet_builder_.packetbuilder.md)*

*Defined in [butter/mas/packets/packet_builder.ts:17](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L17)*

Creates an instance of PacketBuilder.

**`memberof`** PacketBuilder

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`ip` | string | - | robot IP |
`port` | number | - | robot port |
`protocol` | string | "http" | - |

**Returns:** *[PacketBuilder](_butter_mas_packets_packet_builder_.packetbuilder.md)*

## Properties

###  args

• **args**: *Array‹string›*

*Defined in [butter/mas/packets/packet_builder.ts:15](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L15)*

___

###  cmd

• **cmd**: *string*

*Defined in [butter/mas/packets/packet_builder.ts:14](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L14)*

___

###  ip

• **ip**: *string*

*Defined in [butter/mas/packets/packet_builder.ts:10](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L10)*

___

###  keys

• **keys**: *Map‹string, string›*

*Defined in [butter/mas/packets/packet_builder.ts:17](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L17)*

___

###  packet

• **packet**: *any*

*Defined in [butter/mas/packets/packet_builder.ts:12](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L12)*

___

###  params

• **params**: *Array‹string›*

*Defined in [butter/mas/packets/packet_builder.ts:16](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L16)*

___

###  port

• **port**: *number*

*Defined in [butter/mas/packets/packet_builder.ts:11](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L11)*

## Methods

### `Private` _formatParameter

▸ **_formatParameter**(`parameter`: string): *string*

*Defined in [butter/mas/packets/packet_builder.ts:144](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L144)*

Formats parameter properly

**`memberof`** PacketBuilder

**Parameters:**

Name | Type |
------ | ------ |
`parameter` | string |

**Returns:** *string*

formatted parameter

___

###  addArgument

▸ **addArgument**(`argument`: string | number | boolean): *this*

*Defined in [butter/mas/packets/packet_builder.ts:61](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L61)*

Add argument

**`memberof`** PacketBuilder

**Parameters:**

Name | Type |
------ | ------ |
`argument` | string &#124; number &#124; boolean |

**Returns:** *this*

this PacketBuilder

___

###  addArguments

▸ **addArguments**(...`argumentss`: Array‹string | number | boolean›): *this*

*Defined in [butter/mas/packets/packet_builder.ts:76](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L76)*

Add arguments

**`memberof`** PacketBuilder

**Parameters:**

Name | Type |
------ | ------ |
`...argumentss` | Array‹string &#124; number &#124; boolean› |

**Returns:** *this*

this PacketBuilder

___

###  addCommand

▸ **addCommand**(`command`: string): *this*

*Defined in [butter/mas/packets/packet_builder.ts:47](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L47)*

Add command

**`memberof`** PacketBuilder

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |

**Returns:** *this*

this PacketBuilder

___

###  addKeyValuePair

▸ **addKeyValuePair**(`key`: string, `value`: string | number | boolean): *this*

*Defined in [butter/mas/packets/packet_builder.ts:127](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L127)*

Add key value pair

**`memberof`** PacketBuilder

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | attribute key |
`value` | string &#124; number &#124; boolean | attribute value |

**Returns:** *this*

this PacketBuilder

___

###  addParameter

▸ **addParameter**(`parameter`: string): *this*

*Defined in [butter/mas/packets/packet_builder.ts:94](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L94)*

Add parameter

**`memberof`** PacketBuilder

**Parameters:**

Name | Type |
------ | ------ |
`parameter` | string |

**Returns:** *this*

this PacketBuilder

___

###  addParameters

▸ **addParameters**(...`parameters`: Array‹string›): *this*

*Defined in [butter/mas/packets/packet_builder.ts:108](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L108)*

Add parameters

**`memberof`** PacketBuilder

**Parameters:**

Name | Type |
------ | ------ |
`...parameters` | Array‹string› |

**Returns:** *this*

this PacketBuilder

___

###  build

▸ **build**(): *any*

*Defined in [butter/mas/packets/packet_builder.ts:166](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/packets/packet_builder.ts#L166)*

Builds the packet

**`memberof`** PacketBuilder

**Returns:** *any*

data packet
