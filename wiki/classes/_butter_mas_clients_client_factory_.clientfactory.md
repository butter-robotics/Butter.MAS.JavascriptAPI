
# Class: ClientFactory

Client factory for different types of protocols

## Hierarchy

* **ClientFactory**

## Index

### Methods

* [getClient](_butter_mas_clients_client_factory_.clientfactory.md#getclient)
* [getClientClass](_butter_mas_clients_client_factory_.clientfactory.md#getclientclass)

## Methods

###  getClient

▸ **getClient**(`ip`: string, `port?`: number, `protocol`: string): *[HttpClient](_butter_mas_clients_client_http_.httpclient.md)‹› | [TcpClient](_butter_mas_clients_client_tcp_.tcpclient.md)‹› | [UdpClient](_butter_mas_clients_client_udp_.udpclient.md)‹›*

*Defined in [butter/mas/clients/client_factory.ts:22](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/clients/client_factory.ts#L22)*

Creates new client

**`memberof`** ClientFactory

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`ip` | string | - | robot IP |
`port?` | number | - | - |
`protocol` | string | "http" | - |

**Returns:** *[HttpClient](_butter_mas_clients_client_http_.httpclient.md)‹› | [TcpClient](_butter_mas_clients_client_tcp_.tcpclient.md)‹› | [UdpClient](_butter_mas_clients_client_udp_.udpclient.md)‹›*

requested client

___

###  getClientClass

▸ **getClientClass**(`protocol`: string): *[HttpClient](_butter_mas_clients_client_http_.httpclient.md)*

*Defined in [butter/mas/clients/client_factory.ts:44](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/2d105e8/butter/mas/clients/client_factory.ts#L44)*

Get client class

**`memberof`** ClientFactory

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`protocol` | string | "http" |

**Returns:** *[HttpClient](_butter_mas_clients_client_http_.httpclient.md)*
