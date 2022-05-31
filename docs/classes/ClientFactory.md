[Butter MAS Javascript API Documentation](../README.md) / [Exports](../modules.md) / ClientFactory

# Class: ClientFactory

Client factory for different types of protocols

## Table of contents

### Constructors

- [constructor](ClientFactory.md#constructor)

### Methods

- [getClient](ClientFactory.md#getclient)
- [getClientClass](ClientFactory.md#getclientclass)

## Constructors

### constructor

• **new ClientFactory**()

## Methods

### getClient

▸ **getClient**(`ip`, `port?`, `protocol?`): [`HttpClient`](HttpClient.md) \| `TcpClient` \| `UdpClient`

Creates new client

**`memberof`** ClientFactory

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ip` | `string` | `undefined` | robot IP |
| `port?` | `number` | `undefined` | - |
| `protocol` | `string` | `"http"` | - |

#### Returns

[`HttpClient`](HttpClient.md) \| `TcpClient` \| `UdpClient`

requested client

#### Defined in

[clients/client_factory.ts:22](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client_factory.ts#L22)

___

### getClientClass

▸ **getClientClass**(`protocol?`): typeof [`HttpClient`](HttpClient.md)

Get client class

**`memberof`** ClientFactory

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `protocol` | `string` | `"http"` |

#### Returns

typeof [`HttpClient`](HttpClient.md)

#### Defined in

[clients/client_factory.ts:44](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client_factory.ts#L44)
