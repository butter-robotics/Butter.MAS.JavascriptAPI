# Class: PacketBuilder

[packets/packet\_builder](../modules/packets_packet_builder.md).PacketBuilder

Builds a command packet using the builder design pattern

 PacketBuilder

## Table of contents

### Constructors

- [constructor](packets_packet_builder.PacketBuilder.md#constructor)

### Properties

- [args](packets_packet_builder.PacketBuilder.md#args)
- [cmd](packets_packet_builder.PacketBuilder.md#cmd)
- [ip](packets_packet_builder.PacketBuilder.md#ip)
- [keys](packets_packet_builder.PacketBuilder.md#keys)
- [packet](packets_packet_builder.PacketBuilder.md#packet)
- [params](packets_packet_builder.PacketBuilder.md#params)
- [port](packets_packet_builder.PacketBuilder.md#port)

### Methods

- [\_formatParameter](packets_packet_builder.PacketBuilder.md#_formatparameter)
- [addArgument](packets_packet_builder.PacketBuilder.md#addargument)
- [addArguments](packets_packet_builder.PacketBuilder.md#addarguments)
- [addCommand](packets_packet_builder.PacketBuilder.md#addcommand)
- [addKeyValuePair](packets_packet_builder.PacketBuilder.md#addkeyvaluepair)
- [addParameter](packets_packet_builder.PacketBuilder.md#addparameter)
- [addParameters](packets_packet_builder.PacketBuilder.md#addparameters)
- [build](packets_packet_builder.PacketBuilder.md#build)

## Constructors

### constructor

• **new PacketBuilder**(`ip`, `port`, `protocol?`): [`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

Creates an instance of PacketBuilder.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ip` | `string` | `undefined` | robot IP |
| `port` | `number` | `undefined` | robot port |
| `protocol?` | `string` | `'http'` | communication protocol |

#### Returns

[`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

**`Memberof`**

PacketBuilder

#### Defined in

[packets/packet_builder.ts:26](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L26)

## Properties

### args

• **args**: `string`[]

#### Defined in

[packets/packet_builder.ts:15](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L15)

___

### cmd

• **cmd**: `string`

#### Defined in

[packets/packet_builder.ts:14](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L14)

___

### ip

• **ip**: `string`

#### Defined in

[packets/packet_builder.ts:10](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L10)

___

### keys

• **keys**: `Map`\<`string`, `string`\>

#### Defined in

[packets/packet_builder.ts:17](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L17)

___

### packet

• **packet**: `any`

#### Defined in

[packets/packet_builder.ts:12](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L12)

___

### params

• **params**: `string`[]

#### Defined in

[packets/packet_builder.ts:16](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L16)

___

### port

• **port**: `number`

#### Defined in

[packets/packet_builder.ts:11](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L11)

## Methods

### \_formatParameter

▸ **_formatParameter**(`parameter`): `string`

Formats parameter properly

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameter` | `string` |

#### Returns

`string`

formatted parameter

**`Memberof`**

PacketBuilder

#### Defined in

[packets/packet_builder.ts:144](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L144)

___

### addArgument

▸ **addArgument**(`argument`): [`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

Add argument

#### Parameters

| Name | Type |
| :------ | :------ |
| `argument` | `string` \| `number` \| `boolean` |

#### Returns

[`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

this PacketBuilder

**`Memberof`**

PacketBuilder

#### Defined in

[packets/packet_builder.ts:61](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L61)

___

### addArguments

▸ **addArguments**(`...argumentss`): [`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

Add arguments

#### Parameters

| Name | Type |
| :------ | :------ |
| `...argumentss` | (`string` \| `number` \| `boolean`)[] |

#### Returns

[`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

this PacketBuilder

**`Memberof`**

PacketBuilder

#### Defined in

[packets/packet_builder.ts:76](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L76)

___

### addCommand

▸ **addCommand**(`command`): [`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

Add command

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |

#### Returns

[`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

this PacketBuilder

**`Memberof`**

PacketBuilder

#### Defined in

[packets/packet_builder.ts:47](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L47)

___

### addKeyValuePair

▸ **addKeyValuePair**(`key`, `value`): [`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

Add key value pair

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | attribute key |
| `value` | `string` \| `number` \| `boolean` | attribute value |

#### Returns

[`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

this PacketBuilder

**`Memberof`**

PacketBuilder

#### Defined in

[packets/packet_builder.ts:127](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L127)

___

### addParameter

▸ **addParameter**(`parameter`): [`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

Add parameter

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameter` | `string` |

#### Returns

[`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

this PacketBuilder

**`Memberof`**

PacketBuilder

#### Defined in

[packets/packet_builder.ts:94](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L94)

___

### addParameters

▸ **addParameters**(`...parameters`): [`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

Add parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parameters` | `string`[] |

#### Returns

[`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

this PacketBuilder

**`Memberof`**

PacketBuilder

#### Defined in

[packets/packet_builder.ts:108](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L108)

___

### build

▸ **build**(): `any`

Builds the packet

#### Returns

`any`

data packet

**`Memberof`**

PacketBuilder

#### Defined in

[packets/packet_builder.ts:166](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/packets/packet_builder.ts#L166)
