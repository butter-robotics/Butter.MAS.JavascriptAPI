
# Class: Client

## Hierarchy

* **Client**

  ↳ [HttpClient](_butter_mas_clients_client_http_.httpclient.md)

  ↳ [TcpClient](_butter_mas_clients_client_tcp_.tcpclient.md)

  ↳ [UdpClient](_butter_mas_clients_client_udp_.udpclient.md)

## Index

### Constructors

* [constructor](_butter_mas_clients_client_.client.md#constructor)

### Properties

* [_timeout](_butter_mas_clients_client_.client.md#private-_timeout)
* [ip](_butter_mas_clients_client_.client.md#ip)
* [port](_butter_mas_clients_client_.client.md#port)
* [protocol](_butter_mas_clients_client_.client.md#protocol)

### Accessors

* [timeout](_butter_mas_clients_client_.client.md#timeout)

### Methods

* [getAvailableAnimations](_butter_mas_clients_client_.client.md#getavailableanimations)
* [getAvailableHandlers](_butter_mas_clients_client_.client.md#getavailablehandlers)
* [getAvailableMotorRegisters](_butter_mas_clients_client_.client.md#getavailablemotorregisters)
* [getAvailableSounds](_butter_mas_clients_client_.client.md#getavailablesounds)
* [getMotorRegister](_butter_mas_clients_client_.client.md#getmotorregister)
* [getMotorRegisterRange](_butter_mas_clients_client_.client.md#getmotorregisterrange)
* [moveMotorInDirection](_butter_mas_clients_client_.client.md#movemotorindirection)
* [moveMotorInTime](_butter_mas_clients_client_.client.md#movemotorintime)
* [moveMotorToPosition](_butter_mas_clients_client_.client.md#movemotortoposition)
* [pauseAnimation](_butter_mas_clients_client_.client.md#pauseanimation)
* [pauseAudio](_butter_mas_clients_client_.client.md#pauseaudio)
* [playAnimation](_butter_mas_clients_client_.client.md#playanimation)
* [playAudio](_butter_mas_clients_client_.client.md#playaudio)
* [resumeAnimation](_butter_mas_clients_client_.client.md#resumeanimation)
* [resumeAudio](_butter_mas_clients_client_.client.md#resumeaudio)
* [setMotorRegister](_butter_mas_clients_client_.client.md#setmotorregister)
* [stopAnimation](_butter_mas_clients_client_.client.md#stopanimation)
* [stopAudio](_butter_mas_clients_client_.client.md#stopaudio)

## Constructors

###  constructor

\+ **new Client**(`ip`: string, `port`: number, `protocol`: string): *[Client](_butter_mas_clients_client_.client.md)*

*Defined in [butter/mas/clients/client.ts:7](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L7)*

Creates an instance of Client.

**`memberof`** Client

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ip` | string | - |
`port` | number | 3000 |
`protocol` | string | "http" |

**Returns:** *[Client](_butter_mas_clients_client_.client.md)*

## Properties

### `Private` _timeout

• **_timeout**: *number*

*Defined in [butter/mas/clients/client.ts:4](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L4)*

___

###  ip

• **ip**: *string*

*Defined in [butter/mas/clients/client.ts:5](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L5)*

___

###  port

• **port**: *number*

*Defined in [butter/mas/clients/client.ts:6](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L6)*

___

###  protocol

• **protocol**: *string*

*Defined in [butter/mas/clients/client.ts:7](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L7)*

## Accessors

###  timeout

• **get timeout**(): *number*

*Defined in [butter/mas/clients/client.ts:30](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L30)*

Get command execution timeout (in milliseconds)

**`memberof`** Client

**Returns:** *number*

• **set timeout**(`timeout`: number): *void*

*Defined in [butter/mas/clients/client.ts:40](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L40)*

Set time for the command execution

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeout` | number | command execution timeout in milliseconds |

**Returns:** *void*

## Methods

###  getAvailableAnimations

▸ **getAvailableAnimations**(`reload`: boolean): *any*

*Defined in [butter/mas/clients/client.ts:68](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L68)*

Get available (loaded) robot animations

**`memberof`** Client

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reload` | boolean | false |

**Returns:** *any*

response containing all the available (loaded) robot animations

___

###  getAvailableHandlers

▸ **getAvailableHandlers**(): *any*

*Defined in [butter/mas/clients/client.ts:54](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L54)*

Get available robot handlers

**`memberof`** Client

**Returns:** *any*

response containing all the available robot handlers

___

###  getAvailableMotorRegisters

▸ **getAvailableMotorRegisters**(`motorName`: string, `readableOnly`: boolean): *any*

*Defined in [butter/mas/clients/client.ts:107](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L107)*

Get all available motor registers (for Dynamixel motors only)

**`memberof`** Client

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`motorName` | string | - | motor name (as configured on the configurator) |
`readableOnly` | boolean | false | - |

**Returns:** *any*

response containing all the available motor registers

___

###  getAvailableSounds

▸ **getAvailableSounds**(`reload`: boolean): *any*

*Defined in [butter/mas/clients/client.ts:87](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L87)*

Get available (loaded) robot sound assets

**`memberof`** Client

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reload` | boolean | false |

**Returns:** *any*

response containing all the available (loaded) robot sound assets

___

###  getMotorRegister

▸ **getMotorRegister**(`motorName`: string, `registerName`: string): *any*

*Defined in [butter/mas/clients/client.ts:127](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L127)*

Get motor register value (for Dynamixel motors only)

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`motorName` | string | motor name (as configured on the configurator) |
`registerName` | string | - |

**Returns:** *any*

response containing register value

___

###  getMotorRegisterRange

▸ **getMotorRegisterRange**(`motorName`: string, `registerName`: string): *any*

*Defined in [butter/mas/clients/client.ts:145](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L145)*

Get motor register value range (for Dynamixel motors only)

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`motorName` | string | motor name (as configured on the configurator) |
`registerName` | string | - |

**Returns:** *any*

response containing register range value

___

###  moveMotorInDirection

▸ **moveMotorInDirection**(`motorName`: string, `direction`: string, `velocity?`: number): *any*

*Defined in [butter/mas/clients/client.ts:226](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L226)*

Move motor to a certain direction (relative to the motor's current position)

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`motorName` | string | motor name (as configured on the configurator) |
`direction` | string | motor movement direction (left, right, stop) |
`velocity?` | number | - |

**Returns:** *any*

response containing execution result

___

###  moveMotorInTime

▸ **moveMotorInTime**(`motorName`: string, `position`: number, `duration`: number): *any*

*Defined in [butter/mas/clients/client.ts:206](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L206)*

Move motor to a certain position (relative to the motor's zero position) in fixed duration

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`motorName` | string | motor name (as configured on the configurator) |
`position` | number | motor final position (in radians) |
`duration` | number | motor movement duration (in milliseconds) |

**Returns:** *any*

response containing execution result

___

###  moveMotorToPosition

▸ **moveMotorToPosition**(`motorName`: string, `position`: number, `velocity?`: number, `acceleration?`: number): *any*

*Defined in [butter/mas/clients/client.ts:185](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L185)*

Move motor to a certain position (relative to the motor's zero position)

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`motorName` | string | motor name (as configured on the configurator) |
`position` | number | motor final position (in radians) |
`velocity?` | number | - |
`acceleration?` | number | - |

**Returns:** *any*

response containing execution result

___

###  pauseAnimation

▸ **pauseAnimation**(): *any*

*Defined in [butter/mas/clients/client.ts:282](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L282)*

Pause currently playing animation (if available) on the robot

**`memberof`** Client

**Returns:** *any*

response containing execution result

___

###  pauseAudio

▸ **pauseAudio**(): *any*

*Defined in [butter/mas/clients/client.ts:346](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L346)*

Pause current audio playback (if available) on the robot

**`memberof`** Client

**Returns:** *any*

response containing execution result

___

###  playAnimation

▸ **playAnimation**(`animationName`: string): *any*

*Defined in [butter/mas/clients/client.ts:266](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L266)*

Play animation on the robot

**`memberof`** Client

**Parameters:**

Name | Type |
------ | ------ |
`animationName` | string |

**Returns:** *any*

response containing execution result

___

###  playAudio

▸ **playAudio**(`fileName`: string): *any*

*Defined in [butter/mas/clients/client.ts:330](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L330)*

Play audio on the robot

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileName` | string | audio asset name |

**Returns:** *any*

response containing execution result

___

###  resumeAnimation

▸ **resumeAnimation**(): *any*

*Defined in [butter/mas/clients/client.ts:297](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L297)*

Resume currently paused animation (if available) on the robot

**`memberof`** Client

**Returns:** *any*

response containing execution result

___

###  resumeAudio

▸ **resumeAudio**(): *any*

*Defined in [butter/mas/clients/client.ts:362](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L362)*

Resume currently paused audio playback (if available) on the robot

**`memberof`** Client

**Returns:** *any*

response containing execution result

___

###  setMotorRegister

▸ **setMotorRegister**(`motorName`: string, `registerName`: string, `value`: string): *any*

*Defined in [butter/mas/clients/client.ts:165](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L165)*

Get motor register value (for Dynamixel motors only)

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`motorName` | string | motor name (as configured on the configurator) |
`registerName` | string | - |
`value` | string | - |

**Returns:** *any*

response containing execution result

___

###  stopAnimation

▸ **stopAnimation**(): *any*

*Defined in [butter/mas/clients/client.ts:313](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L313)*

Stop currently playing animation (if available) on the robot

**`memberof`** Client

**Returns:** *any*

response containing execution result

___

###  stopAudio

▸ **stopAudio**(): *any*

*Defined in [butter/mas/clients/client.ts:378](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/ab8f204/butter/mas/clients/client.ts#L378)*

Stop current audio playback (if available) on the robot

**`memberof`** Client

**Returns:** *any*

response containing execution result
