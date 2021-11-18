
# Class: UdpClient

Butter MAS UDP client API

## Hierarchy

* [Client](_butter_mas_clients_client_.client.md)

  ↳ **UdpClient**

## Index

### Constructors

* [constructor](_butter_mas_clients_client_udp_.udpclient.md#constructor)

### Properties

* [ip](_butter_mas_clients_client_udp_.udpclient.md#ip)
* [port](_butter_mas_clients_client_udp_.udpclient.md#port)
* [protocol](_butter_mas_clients_client_udp_.udpclient.md#protocol)

### Accessors

* [timeout](_butter_mas_clients_client_udp_.udpclient.md#timeout)

### Methods

* [clearAnimation](_butter_mas_clients_client_udp_.udpclient.md#clearanimation)
* [getAvailableAnimations](_butter_mas_clients_client_udp_.udpclient.md#getavailableanimations)
* [getAvailableHandlers](_butter_mas_clients_client_udp_.udpclient.md#getavailablehandlers)
* [getAvailableMotorRegisters](_butter_mas_clients_client_udp_.udpclient.md#getavailablemotorregisters)
* [getAvailableSounds](_butter_mas_clients_client_udp_.udpclient.md#getavailablesounds)
* [getMotorRegister](_butter_mas_clients_client_udp_.udpclient.md#getmotorregister)
* [getMotorRegisterRange](_butter_mas_clients_client_udp_.udpclient.md#getmotorregisterrange)
* [moveMotorInDirection](_butter_mas_clients_client_udp_.udpclient.md#movemotorindirection)
* [moveMotorInTime](_butter_mas_clients_client_udp_.udpclient.md#movemotorintime)
* [moveMotorToPosition](_butter_mas_clients_client_udp_.udpclient.md#movemotortoposition)
* [pauseAnimation](_butter_mas_clients_client_udp_.udpclient.md#pauseanimation)
* [pauseAudio](_butter_mas_clients_client_udp_.udpclient.md#pauseaudio)
* [playAnimation](_butter_mas_clients_client_udp_.udpclient.md#playanimation)
* [playAudio](_butter_mas_clients_client_udp_.udpclient.md#playaudio)
* [resumeAnimation](_butter_mas_clients_client_udp_.udpclient.md#resumeanimation)
* [resumeAudio](_butter_mas_clients_client_udp_.udpclient.md#resumeaudio)
* [setMotorRegister](_butter_mas_clients_client_udp_.udpclient.md#setmotorregister)
* [stopAnimation](_butter_mas_clients_client_udp_.udpclient.md#stopanimation)
* [stopAudio](_butter_mas_clients_client_udp_.udpclient.md#stopaudio)

## Constructors

###  constructor

\+ **new UdpClient**(`ip`: string, `port`: number, `protocol`: string): *[UdpClient](_butter_mas_clients_client_udp_.udpclient.md)*

*Overrides [Client](_butter_mas_clients_client_.client.md).[constructor](_butter_mas_clients_client_.client.md#constructor)*

*Defined in [butter/mas/clients/client_udp.ts:9](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client_udp.ts#L9)*

Creates an instance of UdpClient.

**`memberof`** UdpClient

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ip` | string | - |
`port` | number | 3030 |
`protocol` | string | "udp" |

**Returns:** *[UdpClient](_butter_mas_clients_client_udp_.udpclient.md)*

## Properties

###  ip

• **ip**: *string*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[ip](_butter_mas_clients_client_.client.md#ip)*

*Defined in [butter/mas/clients/client.ts:6](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L6)*

___

###  port

• **port**: *number*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[port](_butter_mas_clients_client_.client.md#port)*

*Defined in [butter/mas/clients/client.ts:7](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L7)*

___

###  protocol

• **protocol**: *string*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[protocol](_butter_mas_clients_client_.client.md#protocol)*

*Defined in [butter/mas/clients/client.ts:8](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L8)*

## Accessors

###  timeout

• **get timeout**(): *number*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[timeout](_butter_mas_clients_client_.client.md#timeout)*

*Defined in [butter/mas/clients/client.ts:31](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L31)*

Get command execution timeout (in milliseconds)

**`memberof`** Client

**Returns:** *number*

• **set timeout**(`timeout`: number): *void*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[timeout](_butter_mas_clients_client_.client.md#timeout)*

*Defined in [butter/mas/clients/client.ts:41](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L41)*

Set time for the command execution

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeout` | number | command execution timeout in milliseconds |

**Returns:** *void*

## Methods

###  clearAnimation

▸ **clearAnimation**(): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[clearAnimation](_butter_mas_clients_client_.client.md#clearanimation)*

*Defined in [butter/mas/clients/client.ts:345](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L345)*

Clear animation queue (if present)

**`memberof`** Client

**Returns:** *Response*

response containing execution result

___

###  getAvailableAnimations

▸ **getAvailableAnimations**(`reload`: boolean): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[getAvailableAnimations](_butter_mas_clients_client_.client.md#getavailableanimations)*

*Defined in [butter/mas/clients/client.ts:69](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L69)*

Get available (loaded) robot animations

**`memberof`** Client

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reload` | boolean | false |

**Returns:** *Response*

response containing all the available (loaded) robot animations

___

###  getAvailableHandlers

▸ **getAvailableHandlers**(): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[getAvailableHandlers](_butter_mas_clients_client_.client.md#getavailablehandlers)*

*Defined in [butter/mas/clients/client.ts:55](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L55)*

Get available robot handlers

**`memberof`** Client

**Returns:** *Response*

response containing all the available robot handlers

___

###  getAvailableMotorRegisters

▸ **getAvailableMotorRegisters**(`motorName`: string, `readableOnly`: boolean): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[getAvailableMotorRegisters](_butter_mas_clients_client_.client.md#getavailablemotorregisters)*

*Defined in [butter/mas/clients/client.ts:108](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L108)*

Get all available motor registers (for Dynamixel motors only)

**`memberof`** Client

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`motorName` | string | - | motor name (as configured on the configurator) |
`readableOnly` | boolean | false | - |

**Returns:** *Response*

response containing all the available motor registers

___

###  getAvailableSounds

▸ **getAvailableSounds**(`reload`: boolean): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[getAvailableSounds](_butter_mas_clients_client_.client.md#getavailablesounds)*

*Defined in [butter/mas/clients/client.ts:88](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L88)*

Get available (loaded) robot sound assets

**`memberof`** Client

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reload` | boolean | false |

**Returns:** *Response*

response containing all the available (loaded) robot sound assets

___

###  getMotorRegister

▸ **getMotorRegister**(`motorName`: string, `registerName`: string): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[getMotorRegister](_butter_mas_clients_client_.client.md#getmotorregister)*

*Defined in [butter/mas/clients/client.ts:128](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L128)*

Get motor register value (for Dynamixel motors only)

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`motorName` | string | motor name (as configured on the configurator) |
`registerName` | string | - |

**Returns:** *Response*

response containing register value

___

###  getMotorRegisterRange

▸ **getMotorRegisterRange**(`motorName`: string, `registerName`: string): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[getMotorRegisterRange](_butter_mas_clients_client_.client.md#getmotorregisterrange)*

*Defined in [butter/mas/clients/client.ts:146](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L146)*

Get motor register value range (for Dynamixel motors only)

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`motorName` | string | motor name (as configured on the configurator) |
`registerName` | string | - |

**Returns:** *Response*

response containing register range value

___

###  moveMotorInDirection

▸ **moveMotorInDirection**(`motorName`: string, `direction`: string, `velocity?`: number, `units`: [RotationUnits](../modules/_butter_mas_interfaces_types_.md#rotationunits)): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[moveMotorInDirection](_butter_mas_clients_client_.client.md#movemotorindirection)*

*Defined in [butter/mas/clients/client.ts:232](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L232)*

Move motor to a certain direction (relative to the motor's current position)

**`memberof`** Client

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`motorName` | string | - | motor name (as configured on the configurator) |
`direction` | string | - | motor movement direction (left, right, stop) |
`velocity?` | number | - | - |
`units` | [RotationUnits](../modules/_butter_mas_interfaces_types_.md#rotationunits) | "radians" | - |

**Returns:** *Response*

response containing execution result

___

###  moveMotorInTime

▸ **moveMotorInTime**(`motorName`: string, `position`: number, `duration`: number, `units`: [RotationUnits](../modules/_butter_mas_interfaces_types_.md#rotationunits)): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[moveMotorInTime](_butter_mas_clients_client_.client.md#movemotorintime)*

*Defined in [butter/mas/clients/client.ts:210](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L210)*

Move motor to a certain position (relative to the motor's zero position) in fixed duration

**`memberof`** Client

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`motorName` | string | - | motor name (as configured on the configurator) |
`position` | number | - | motor final position (in units) |
`duration` | number | - | motor movement duration (in milliseconds) |
`units` | [RotationUnits](../modules/_butter_mas_interfaces_types_.md#rotationunits) | "radians" | - |

**Returns:** *Response*

response containing execution result

___

###  moveMotorToPosition

▸ **moveMotorToPosition**(`motorName`: string, `position`: number, `velocity?`: number, `acceleration?`: number, `units`: [RotationUnits](../modules/_butter_mas_interfaces_types_.md#rotationunits)): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[moveMotorToPosition](_butter_mas_clients_client_.client.md#movemotortoposition)*

*Defined in [butter/mas/clients/client.ts:187](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L187)*

Move motor to a certain position (relative to the motor's zero position)

**`memberof`** Client

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`motorName` | string | - | motor name (as configured on the configurator) |
`position` | number | - | motor final position (in units) |
`velocity?` | number | - | - |
`acceleration?` | number | - | - |
`units` | [RotationUnits](../modules/_butter_mas_interfaces_types_.md#rotationunits) | "radians" | - |

**Returns:** *Response*

response containing execution result

___

###  pauseAnimation

▸ **pauseAnimation**(): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[pauseAnimation](_butter_mas_clients_client_.client.md#pauseanimation)*

*Defined in [butter/mas/clients/client.ts:297](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L297)*

Pause currently playing animation (if available) on the robot

**`memberof`** Client

**Returns:** *Response*

response containing execution result

___

###  pauseAudio

▸ **pauseAudio**(): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[pauseAudio](_butter_mas_clients_client_.client.md#pauseaudio)*

*Defined in [butter/mas/clients/client.ts:378](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L378)*

Pause current audio playback (if available) on the robot

**`memberof`** Client

**Returns:** *Response*

response containing execution result

___

###  playAnimation

▸ **playAnimation**(`animationName`: string, `lenient`: boolean, `relative`: boolean): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[playAnimation](_butter_mas_clients_client_.client.md#playanimation)*

*Defined in [butter/mas/clients/client.ts:279](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L279)*

Play animation on the robot

**`memberof`** Client

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`animationName` | string | - |
`lenient` | boolean | false |
`relative` | boolean | false |

**Returns:** *Response*

response containing execution result

___

###  playAudio

▸ **playAudio**(`fileName`: string): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[playAudio](_butter_mas_clients_client_.client.md#playaudio)*

*Defined in [butter/mas/clients/client.ts:362](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L362)*

Play audio on the robot

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileName` | string | audio asset name |

**Returns:** *Response*

response containing execution result

___

###  resumeAnimation

▸ **resumeAnimation**(): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[resumeAnimation](_butter_mas_clients_client_.client.md#resumeanimation)*

*Defined in [butter/mas/clients/client.ts:313](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L313)*

Resume currently paused animation (if available) on the robot

**`memberof`** Client

**Returns:** *Response*

response containing execution result

___

###  resumeAudio

▸ **resumeAudio**(): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[resumeAudio](_butter_mas_clients_client_.client.md#resumeaudio)*

*Defined in [butter/mas/clients/client.ts:394](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L394)*

Resume currently paused audio playback (if available) on the robot

**`memberof`** Client

**Returns:** *Response*

response containing execution result

___

###  setMotorRegister

▸ **setMotorRegister**(`motorName`: string, `registerName`: string, `value`: string): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[setMotorRegister](_butter_mas_clients_client_.client.md#setmotorregister)*

*Defined in [butter/mas/clients/client.ts:166](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L166)*

Get motor register value (for Dynamixel motors only)

**`memberof`** Client

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`motorName` | string | motor name (as configured on the configurator) |
`registerName` | string | - |
`value` | string | - |

**Returns:** *Response*

response containing execution result

___

###  stopAnimation

▸ **stopAnimation**(): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[stopAnimation](_butter_mas_clients_client_.client.md#stopanimation)*

*Defined in [butter/mas/clients/client.ts:329](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L329)*

Stop currently playing animation (if available) on the robot

**`memberof`** Client

**Returns:** *Response*

response containing execution result

___

###  stopAudio

▸ **stopAudio**(): *Response*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[stopAudio](_butter_mas_clients_client_.client.md#stopaudio)*

*Defined in [butter/mas/clients/client.ts:410](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/3caa871/butter/mas/clients/client.ts#L410)*

Stop current audio playback (if available) on the robot

**`memberof`** Client

**Returns:** *Response*

response containing execution result
