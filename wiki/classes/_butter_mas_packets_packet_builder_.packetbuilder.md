
# Class: PacketBuilder

Builds a command packet using the builder design pattern

**`export`** 

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

*Defined in [butter/mas/packets/packet_builder.ts:18](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L18)*

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

*Defined in [butter/mas/packets/packet_builder.ts:16](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L16)*

___

###  cmd

• **cmd**: *string*

*Defined in [butter/mas/packets/packet_builder.ts:15](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L15)*

___

###  ip

• **ip**: *string*

*Defined in [butter/mas/packets/packet_builder.ts:11](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L11)*

___

###  keys

• **keys**: *Map‹string, string›*

*Defined in [butter/mas/packets/packet_builder.ts:18](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L18)*

___

###  packet

• **packet**: *any*

*Defined in [butter/mas/packets/packet_builder.ts:13](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L13)*

___

###  params

• **params**: *Array‹string›*

*Defined in [butter/mas/packets/packet_builder.ts:17](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L17)*

___

###  port

• **port**: *number*

*Defined in [butter/mas/packets/packet_builder.ts:12](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L12)*

## Methods

### `Private` _formatParameter

▸ **_formatParameter**(`parameter`: string): *string*

*Defined in [butter/mas/packets/packet_builder.ts:145](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L145)*

Formats parameter properly

**`memberof`** PacketBuilder

**Parameters:**

Name | Type |
------ | ------ |
`parameter` | string |

**Returns:** *string*

formated parameter

___

###  addArgument

▸ **addArgument**(`argument`: string | number | boolean): *this*

*Defined in [butter/mas/packets/packet_builder.ts:62](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L62)*

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

*Defined in [butter/mas/packets/packet_builder.ts:77](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L77)*

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

*Defined in [butter/mas/packets/packet_builder.ts:48](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L48)*

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

*Defined in [butter/mas/packets/packet_builder.ts:128](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L128)*

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

*Defined in [butter/mas/packets/packet_builder.ts:95](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L95)*

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

*Defined in [butter/mas/packets/packet_builder.ts:109](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L109)*

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

*Defined in [butter/mas/packets/packet_builder.ts:167](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/9120d4c/butter/mas/packets/packet_builder.ts#L167)*

Builds the packet

**`memberof`** PacketBuilder

**Returns:** *any*

data packet
