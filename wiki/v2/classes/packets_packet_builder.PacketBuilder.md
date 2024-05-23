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
- [target](packets_packet_builder.PacketBuilder.md#target)
- [ANY\_TARGET](packets_packet_builder.PacketBuilder.md#any_target)

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

• **new PacketBuilder**(`ip`, `port`, `target`, `protocol?`): [`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

Creates an instance of PacketBuilder.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ip` | `string` | `undefined` | robot IP |
| `port` | `number` | `undefined` | robot port |
| `target` | `string` | `undefined` | target robot character |
| `protocol?` | `string` | `'http'` | communication protocol |

#### Returns

[`PacketBuilder`](packets_packet_builder.PacketBuilder.md)

**`Memberof`**

PacketBuilder

#### Defined in

[packets/packet_builder.ts:30](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L30)

## Properties

### args

• **args**: `string`[]

#### Defined in

[packets/packet_builder.ts:18](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L18)

___

### cmd

• **cmd**: `string`

#### Defined in

[packets/packet_builder.ts:17](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L17)

___

### ip

• **ip**: `string`

#### Defined in

[packets/packet_builder.ts:12](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L12)

___

### keys

• **keys**: `Map`\<`string`, `string`\>

#### Defined in

[packets/packet_builder.ts:20](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L20)

___

### packet

• **packet**: `any`

#### Defined in

[packets/packet_builder.ts:15](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L15)

___

### params

• **params**: `string`[]

#### Defined in

[packets/packet_builder.ts:19](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L19)

___

### port

• **port**: `number`

#### Defined in

[packets/packet_builder.ts:13](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L13)

___

### target

• **target**: `string`

#### Defined in

[packets/packet_builder.ts:14](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L14)

___

### ANY\_TARGET

▪ `Static` **ANY\_TARGET**: `string` = `'*'`

#### Defined in

[packets/packet_builder.ts:10](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L10)

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

[packets/packet_builder.ts:149](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L149)

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

[packets/packet_builder.ts:66](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L66)

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

[packets/packet_builder.ts:81](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L81)

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

[packets/packet_builder.ts:52](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L52)

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

[packets/packet_builder.ts:132](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L132)

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

[packets/packet_builder.ts:99](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L99)

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

[packets/packet_builder.ts:113](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L113)

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

[packets/packet_builder.ts:171](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/packets/packet_builder.ts#L171)
