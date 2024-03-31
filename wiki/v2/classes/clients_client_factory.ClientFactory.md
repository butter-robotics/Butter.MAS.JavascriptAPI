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

▸ **getClient**(`ip`, `port?`, `protocol?`): [`HttpClient`](clients_client_http.HttpClient.md) \| [`TcpClient`](clients_client_tcp.TcpClient.md) \| [`UdpClient`](clients_client_udp.UdpClient.md)

Creates new client

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ip` | `string` | `undefined` | robot IP |
| `port?` | `number` | `undefined` | robot port |
| `protocol?` | `string` | `'http'` | communication protocol |

#### Returns

[`HttpClient`](clients_client_http.HttpClient.md) \| [`TcpClient`](clients_client_tcp.TcpClient.md) \| [`UdpClient`](clients_client_udp.UdpClient.md)

requested client

**`Memberof`**

ClientFactory

#### Defined in

[clients/client_factory.ts:21](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client_factory.ts#L21)

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

[clients/client_factory.ts:43](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client_factory.ts#L43)
