# Class: ClientFactory

[clients/client\_factory](../modules/clients_client_factory.md).ClientFactory

Client factory for different types of protocols

 ClientFactory

## Table of contents

### Constructors

- [constructor](clients_client_factory.ClientFactory.md#constructor)

### Methods

- [getClient](clients_client_factory.ClientFactory.md#getclient)
- [getClientClass](clients_client_factory.ClientFactory.md#getclientclass)

## Constructors

### constructor

• **new ClientFactory**(): [`ClientFactory`](clients_client_factory.ClientFactory.md)

#### Returns

[`ClientFactory`](clients_client_factory.ClientFactory.md)

## Methods

### getClient

▸ **getClient**(`ip`, `port?`, `protocol?`): [`Client`](clients_client.Client.md)

Creates new client

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ip` | `string` | `undefined` | robot IP |
| `port?` | `number` | `undefined` | robot port |
| `protocol?` | `string` | `'http'` | communication protocol |

#### Returns

[`Client`](clients_client.Client.md)

requested client

**`Memberof`**

ClientFactory

#### Defined in

[clients/client_factory.ts:22](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client_factory.ts#L22)

___

### getClientClass

▸ **getClientClass**(`protocol?`): typeof [`HttpClient`](clients_client_http.HttpClient.md)

Get client class

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `protocol?` | `string` | `'http'` | communication protocol |

#### Returns

typeof [`HttpClient`](clients_client_http.HttpClient.md)

**`Memberof`**

ClientFactory

#### Defined in

[clients/client_factory.ts:44](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client_factory.ts#L44)
