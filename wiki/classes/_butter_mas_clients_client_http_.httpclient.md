
# Class: HttpClient

Butter MAS HTTP client API

## Hierarchy

* [Client](_butter_mas_clients_client_.client.md)

  ↳ **HttpClient**

## Index

### Constructors

* [constructor](_butter_mas_clients_client_http_.httpclient.md#constructor)

### Properties

* [ip](_butter_mas_clients_client_http_.httpclient.md#ip)
* [port](_butter_mas_clients_client_http_.httpclient.md#port)
* [protocol](_butter_mas_clients_client_http_.httpclient.md#protocol)

### Methods

* [getAvailableAnimations](_butter_mas_clients_client_http_.httpclient.md#getavailableanimations)
* [getAvailableHandlers](_butter_mas_clients_client_http_.httpclient.md#getavailablehandlers)
* [getAvailableMotorRegisters](_butter_mas_clients_client_http_.httpclient.md#getavailablemotorregisters)
* [getAvailableSounds](_butter_mas_clients_client_http_.httpclient.md#getavailablesounds)
* [getMotorRegister](_butter_mas_clients_client_http_.httpclient.md#getmotorregister)
* [getMotorRegisterRange](_butter_mas_clients_client_http_.httpclient.md#getmotorregisterrange)
* [moveMotorInDirection](_butter_mas_clients_client_http_.httpclient.md#movemotorindirection)
* [moveMotorInTime](_butter_mas_clients_client_http_.httpclient.md#movemotorintime)
* [moveMotorToPosition](_butter_mas_clients_client_http_.httpclient.md#movemotortoposition)
* [pauseAnimation](_butter_mas_clients_client_http_.httpclient.md#pauseanimation)
* [pauseAudio](_butter_mas_clients_client_http_.httpclient.md#pauseaudio)
* [playAnimation](_butter_mas_clients_client_http_.httpclient.md#playanimation)
* [playAudio](_butter_mas_clients_client_http_.httpclient.md#playaudio)
* [resumeAnimation](_butter_mas_clients_client_http_.httpclient.md#resumeanimation)
* [resumeAudio](_butter_mas_clients_client_http_.httpclient.md#resumeaudio)
* [setMotorRegister](_butter_mas_clients_client_http_.httpclient.md#setmotorregister)
* [stopAnimation](_butter_mas_clients_client_http_.httpclient.md#stopanimation)
* [stopAudio](_butter_mas_clients_client_http_.httpclient.md#stopaudio)

## Constructors

###  constructor

\+ **new HttpClient**(`ip`: string, `port`: number, `protocol`: string): *[HttpClient](_butter_mas_clients_client_http_.httpclient.md)*

*Overrides [Client](_butter_mas_clients_client_.client.md).[constructor](_butter_mas_clients_client_.client.md#constructor)*

*Defined in [butter/mas/clients/client_http.ts:9](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client_http.ts#L9)*

Creates an instance of HttpClient.

**`memberof`** HttpClient

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ip` | string | - |
`port` | number | 5555 |
`protocol` | string | "http" |

**Returns:** *[HttpClient](_butter_mas_clients_client_http_.httpclient.md)*

## Properties

###  ip

• **ip**: *string*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[ip](_butter_mas_clients_client_.client.md#ip)*

*Defined in [butter/mas/clients/client.ts:4](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L4)*

___

###  port

• **port**: *number*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[port](_butter_mas_clients_client_.client.md#port)*

*Defined in [butter/mas/clients/client.ts:5](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L5)*

___

###  protocol

• **protocol**: *string*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[protocol](_butter_mas_clients_client_.client.md#protocol)*

*Defined in [butter/mas/clients/client.ts:6](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L6)*

## Methods

###  getAvailableAnimations

▸ **getAvailableAnimations**(`reload`: boolean): *any*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[getAvailableAnimations](_butter_mas_clients_client_.client.md#getavailableanimations)*

*Defined in [butter/mas/clients/client.ts:43](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L43)*

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

*Inherited from [Client](_butter_mas_clients_client_.client.md).[getAvailableHandlers](_butter_mas_clients_client_.client.md#getavailablehandlers)*

*Defined in [butter/mas/clients/client.ts:29](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L29)*

Get available robot handlers

**`memberof`** Client

**Returns:** *any*

response containing all the available robot handlers

___

###  getAvailableMotorRegisters

▸ **getAvailableMotorRegisters**(`motorName`: string, `readableOnly`: boolean): *any*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[getAvailableMotorRegisters](_butter_mas_clients_client_.client.md#getavailablemotorregisters)*

*Defined in [butter/mas/clients/client.ts:82](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L82)*

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

*Inherited from [Client](_butter_mas_clients_client_.client.md).[getAvailableSounds](_butter_mas_clients_client_.client.md#getavailablesounds)*

*Defined in [butter/mas/clients/client.ts:62](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L62)*

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

*Inherited from [Client](_butter_mas_clients_client_.client.md).[getMotorRegister](_butter_mas_clients_client_.client.md#getmotorregister)*

*Defined in [butter/mas/clients/client.ts:102](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L102)*

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

*Inherited from [Client](_butter_mas_clients_client_.client.md).[getMotorRegisterRange](_butter_mas_clients_client_.client.md#getmotorregisterrange)*

*Defined in [butter/mas/clients/client.ts:120](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L120)*

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

*Inherited from [Client](_butter_mas_clients_client_.client.md).[moveMotorInDirection](_butter_mas_clients_client_.client.md#movemotorindirection)*

*Defined in [butter/mas/clients/client.ts:201](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L201)*

Move motor to a certian direction (relative to the motor's current position)

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

*Inherited from [Client](_butter_mas_clients_client_.client.md).[moveMotorInTime](_butter_mas_clients_client_.client.md#movemotorintime)*

*Defined in [butter/mas/clients/client.ts:181](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L181)*

Move motor to a certian position (relative to the motor's zero position) in fixed duration

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

*Inherited from [Client](_butter_mas_clients_client_.client.md).[moveMotorToPosition](_butter_mas_clients_client_.client.md#movemotortoposition)*

*Defined in [butter/mas/clients/client.ts:160](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L160)*

Move motor to a certian position (relative to the motor's zero position)

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

*Inherited from [Client](_butter_mas_clients_client_.client.md).[pauseAnimation](_butter_mas_clients_client_.client.md#pauseanimation)*

*Defined in [butter/mas/clients/client.ts:257](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L257)*

Pause currently playing animation (if available) on the robot

**`memberof`** Client

**Returns:** *any*

response containing execution result

___

###  pauseAudio

▸ **pauseAudio**(): *any*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[pauseAudio](_butter_mas_clients_client_.client.md#pauseaudio)*

*Defined in [butter/mas/clients/client.ts:321](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L321)*

Pause current audio playback (if available) on the robot

**`memberof`** Client

**Returns:** *any*

response containing execution result

___

###  playAnimation

▸ **playAnimation**(`animationName`: string): *any*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[playAnimation](_butter_mas_clients_client_.client.md#playanimation)*

*Defined in [butter/mas/clients/client.ts:241](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L241)*

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

*Inherited from [Client](_butter_mas_clients_client_.client.md).[playAudio](_butter_mas_clients_client_.client.md#playaudio)*

*Defined in [butter/mas/clients/client.ts:305](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L305)*

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

*Inherited from [Client](_butter_mas_clients_client_.client.md).[resumeAnimation](_butter_mas_clients_client_.client.md#resumeanimation)*

*Defined in [butter/mas/clients/client.ts:272](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L272)*

Resume currently paused animation (if available) on the robot

**`memberof`** Client

**Returns:** *any*

response containing execution result

___

###  resumeAudio

▸ **resumeAudio**(): *any*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[resumeAudio](_butter_mas_clients_client_.client.md#resumeaudio)*

*Defined in [butter/mas/clients/client.ts:337](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L337)*

Resume currently paused audio playback (if available) on the robot

**`memberof`** Client

**Returns:** *any*

response containing execution result

___

###  setMotorRegister

▸ **setMotorRegister**(`motorName`: string, `registerName`: string, `value`: string): *any*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[setMotorRegister](_butter_mas_clients_client_.client.md#setmotorregister)*

*Defined in [butter/mas/clients/client.ts:140](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L140)*

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

*Inherited from [Client](_butter_mas_clients_client_.client.md).[stopAnimation](_butter_mas_clients_client_.client.md#stopanimation)*

*Defined in [butter/mas/clients/client.ts:288](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L288)*

Stop currently playing animation (if available) on the robot

**`memberof`** Client

**Returns:** *any*

response containing execution result

___

###  stopAudio

▸ **stopAudio**(): *any*

*Inherited from [Client](_butter_mas_clients_client_.client.md).[stopAudio](_butter_mas_clients_client_.client.md#stopaudio)*

*Defined in [butter/mas/clients/client.ts:353](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/7e6b18f/butter/mas/clients/client.ts#L353)*

Stop current audio playback (if available) on the robot

**`memberof`** Client

**Returns:** *any*

response containing execution result
