# Class: UdpClient

[clients/client\_udp](../modules/clients_client_udp.md).UdpClient

Butter MAS UDP client API

 UdpClient

## Hierarchy

- [`Client`](clients_client.Client.md)

  ↳ **`UdpClient`**

## Table of contents

### Constructors

- [constructor](clients_client_udp.UdpClient.md#constructor)

### Properties

- [ip](clients_client_udp.UdpClient.md#ip)
- [port](clients_client_udp.UdpClient.md#port)
- [protocol](clients_client_udp.UdpClient.md#protocol)

### Accessors

- [timeout](clients_client_udp.UdpClient.md#timeout)

### Methods

- [clearAnimation](clients_client_udp.UdpClient.md#clearanimation)
- [getAvailableAnimations](clients_client_udp.UdpClient.md#getavailableanimations)
- [getAvailableHandlers](clients_client_udp.UdpClient.md#getavailablehandlers)
- [getAvailableMotorRegisters](clients_client_udp.UdpClient.md#getavailablemotorregisters)
- [getAvailableSounds](clients_client_udp.UdpClient.md#getavailablesounds)
- [getMotorRegister](clients_client_udp.UdpClient.md#getmotorregister)
- [getMotorRegisterRange](clients_client_udp.UdpClient.md#getmotorregisterrange)
- [moveMotorInDirection](clients_client_udp.UdpClient.md#movemotorindirection)
- [moveMotorInTime](clients_client_udp.UdpClient.md#movemotorintime)
- [moveMotorToPosition](clients_client_udp.UdpClient.md#movemotortoposition)
- [pauseAnimation](clients_client_udp.UdpClient.md#pauseanimation)
- [pauseAudio](clients_client_udp.UdpClient.md#pauseaudio)
- [playAnimation](clients_client_udp.UdpClient.md#playanimation)
- [playAudio](clients_client_udp.UdpClient.md#playaudio)
- [resumeAnimation](clients_client_udp.UdpClient.md#resumeanimation)
- [resumeAudio](clients_client_udp.UdpClient.md#resumeaudio)
- [setMotorRegister](clients_client_udp.UdpClient.md#setmotorregister)
- [stopAnimation](clients_client_udp.UdpClient.md#stopanimation)
- [stopAudio](clients_client_udp.UdpClient.md#stopaudio)

## Constructors

### constructor

• **new UdpClient**(`ip`, `port?`, `protocol?`): [`UdpClient`](clients_client_udp.UdpClient.md)

Creates an instance of UdpClient.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ip` | `string` | `undefined` |
| `port?` | `number` | `3030` |
| `protocol?` | `string` | `'udp'` |

#### Returns

[`UdpClient`](clients_client_udp.UdpClient.md)

**`Memberof`**

UdpClient

#### Overrides

[Client](clients_client.Client.md).[constructor](clients_client.Client.md#constructor)

#### Defined in

[clients/client_udp.ts:17](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client_udp.ts#L17)

## Properties

### ip

• **ip**: `string`

#### Inherited from

[Client](clients_client.Client.md).[ip](clients_client.Client.md#ip)

#### Defined in

[clients/client.ts:7](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L7)

___

### port

• **port**: `number`

#### Inherited from

[Client](clients_client.Client.md).[port](clients_client.Client.md#port)

#### Defined in

[clients/client.ts:8](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L8)

___

### protocol

• **protocol**: `string`

#### Inherited from

[Client](clients_client.Client.md).[protocol](clients_client.Client.md#protocol)

#### Defined in

[clients/client.ts:9](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L9)

## Accessors

### timeout

• `get` **timeout**(): `number`

Get command execution timeout (in milliseconds)

#### Returns

`number`

**`Memberof`**

Client

#### Inherited from

Client.timeout

#### Defined in

[clients/client.ts:32](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L32)

• `set` **timeout**(`timeout`): `void`

Set time for the command execution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeout` | `number` | command execution timeout in milliseconds |

#### Returns

`void`

**`Memberof`**

Client

#### Inherited from

Client.timeout

#### Defined in

[clients/client.ts:42](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L42)

## Methods

### clearAnimation

▸ **clearAnimation**(): [`Response`](../interfaces/interfaces_response.Response.md)

Clear animation queue (if present)

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[clearAnimation](clients_client.Client.md#clearanimation)

#### Defined in

[clients/client.ts:349](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L349)

___

### getAvailableAnimations

▸ **getAvailableAnimations**(`reload?`): [`Response`](../interfaces/interfaces_response.Response.md)

Get available (loaded) robot animations

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reload?` | `boolean` | `false` |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing all the available (loaded) robot animations

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[getAvailableAnimations](clients_client.Client.md#getavailableanimations)

#### Defined in

[clients/client.ts:70](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L70)

___

### getAvailableHandlers

▸ **getAvailableHandlers**(): [`Response`](../interfaces/interfaces_response.Response.md)

Get available robot handlers

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing all the available robot handlers

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[getAvailableHandlers](clients_client.Client.md#getavailablehandlers)

#### Defined in

[clients/client.ts:56](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L56)

___

### getAvailableMotorRegisters

▸ **getAvailableMotorRegisters**(`motorName`, `readableOnly?`): [`Response`](../interfaces/interfaces_response.Response.md)

Get all available motor registers (for Dynamixel motors only)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `motorName` | `string` | `undefined` | motor name (as configured on the configurator) |
| `readableOnly?` | `boolean` | `false` | get readable registers only |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing all the available motor registers

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[getAvailableMotorRegisters](clients_client.Client.md#getavailablemotorregisters)

#### Defined in

[clients/client.ts:111](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L111)

___

### getAvailableSounds

▸ **getAvailableSounds**(`reload?`): [`Response`](../interfaces/interfaces_response.Response.md)

Get available (loaded) robot sound assets

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reload?` | `boolean` | `false` |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing all the available (loaded) robot sound assets

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[getAvailableSounds](clients_client.Client.md#getavailablesounds)

#### Defined in

[clients/client.ts:90](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L90)

___

### getMotorRegister

▸ **getMotorRegister**(`motorName`, `registerName`): [`Response`](../interfaces/interfaces_response.Response.md)

Get motor register value (for Dynamixel motors only)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motorName` | `string` | motor name (as configured on the configurator) |
| `registerName` | `string` |  |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing register value

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[getMotorRegister](clients_client.Client.md#getmotorregister)

#### Defined in

[clients/client.ts:131](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L131)

___

### getMotorRegisterRange

▸ **getMotorRegisterRange**(`motorName`, `registerName`): [`Response`](../interfaces/interfaces_response.Response.md)

Get motor register value range (for Dynamixel motors only)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motorName` | `string` | motor name (as configured on the configurator) |
| `registerName` | `string` |  |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing register range value

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[getMotorRegisterRange](clients_client.Client.md#getmotorregisterrange)

#### Defined in

[clients/client.ts:149](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L149)

___

### moveMotorInDirection

▸ **moveMotorInDirection**(`motorName`, `direction`, `velocity?`, `units?`): [`Response`](../interfaces/interfaces_response.Response.md)

Move motor to a certain direction (relative to the motor's current position)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `motorName` | `string` | `undefined` | motor name (as configured on the configurator) |
| `direction` | `string` | `undefined` | motor movement direction (left, right, stop) |
| `velocity?` | `number` | `undefined` | motor movement speed (in units / sec) |
| `units?` | [`RotationUnits`](../modules/interfaces_types.md#rotationunits) | `'radians'` | rotation units |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[moveMotorInDirection](clients_client.Client.md#movemotorindirection)

#### Defined in

[clients/client.ts:235](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L235)

___

### moveMotorInTime

▸ **moveMotorInTime**(`motorName`, `position`, `duration`, `units?`): [`Response`](../interfaces/interfaces_response.Response.md)

Move motor to a certain position (relative to the motor's zero position) in fixed duration

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `motorName` | `string` | `undefined` | motor name (as configured on the configurator) |
| `position` | `number` | `undefined` | motor final position (in units) |
| `duration` | `number` | `undefined` | motor movement duration (in milliseconds) |
| `units?` | [`RotationUnits`](../modules/interfaces_types.md#rotationunits) | `'radians'` | rotation units |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[moveMotorInTime](clients_client.Client.md#movemotorintime)

#### Defined in

[clients/client.ts:213](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L213)

___

### moveMotorToPosition

▸ **moveMotorToPosition**(`motorName`, `position`, `velocity?`, `acceleration?`, `units?`): [`Response`](../interfaces/interfaces_response.Response.md)

Move motor to a certain position (relative to the motor's zero position)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `motorName` | `string` | `undefined` | motor name (as configured on the configurator) |
| `position` | `number` | `undefined` | motor final position (in units) |
| `velocity?` | `number` | `undefined` | motor movement speed (in units / sec) |
| `acceleration?` | `number` | `undefined` | motor maximal acceleration (in units / sec * sec) |
| `units?` | [`RotationUnits`](../modules/interfaces_types.md#rotationunits) | `'radians'` | rotation units |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[moveMotorToPosition](clients_client.Client.md#movemotortoposition)

#### Defined in

[clients/client.ts:190](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L190)

___

### pauseAnimation

▸ **pauseAnimation**(): [`Response`](../interfaces/interfaces_response.Response.md)

Pause currently playing animation (if available) on the robot

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[pauseAnimation](clients_client.Client.md#pauseanimation)

#### Defined in

[clients/client.ts:301](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L301)

___

### pauseAudio

▸ **pauseAudio**(): [`Response`](../interfaces/interfaces_response.Response.md)

Pause current audio playback (if available) on the robot

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[pauseAudio](clients_client.Client.md#pauseaudio)

#### Defined in

[clients/client.ts:382](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L382)

___

### playAnimation

▸ **playAnimation**(`animationName`, `lenient?`, `relative?`): [`Response`](../interfaces/interfaces_response.Response.md)

Play animation on the robot

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animationName` | `string` | `undefined` |  |
| `lenient?` | `boolean` | `false` | wait for current playing animation (if present) to finish |
| `relative?` | `boolean` | `false` | play animation relative to the current robot position |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[playAnimation](clients_client.Client.md#playanimation)

#### Defined in

[clients/client.ts:283](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L283)

___

### playAudio

▸ **playAudio**(`fileName`): [`Response`](../interfaces/interfaces_response.Response.md)

Play audio on the robot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | audio asset name |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[playAudio](clients_client.Client.md#playaudio)

#### Defined in

[clients/client.ts:366](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L366)

___

### resumeAnimation

▸ **resumeAnimation**(): [`Response`](../interfaces/interfaces_response.Response.md)

Resume currently paused animation (if available) on the robot

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[resumeAnimation](clients_client.Client.md#resumeanimation)

#### Defined in

[clients/client.ts:317](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L317)

___

### resumeAudio

▸ **resumeAudio**(): [`Response`](../interfaces/interfaces_response.Response.md)

Resume currently paused audio playback (if available) on the robot

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[resumeAudio](clients_client.Client.md#resumeaudio)

#### Defined in

[clients/client.ts:398](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L398)

___

### setMotorRegister

▸ **setMotorRegister**(`motorName`, `registerName`, `value`): [`Response`](../interfaces/interfaces_response.Response.md)

Get motor register value (for Dynamixel motors only)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motorName` | `string` | motor name (as configured on the configurator) |
| `registerName` | `string` |  |
| `value` | `string` |  |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[setMotorRegister](clients_client.Client.md#setmotorregister)

#### Defined in

[clients/client.ts:169](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L169)

___

### stopAnimation

▸ **stopAnimation**(): [`Response`](../interfaces/interfaces_response.Response.md)

Stop currently playing animation (if available) on the robot

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[stopAnimation](clients_client.Client.md#stopanimation)

#### Defined in

[clients/client.ts:333](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L333)

___

### stopAudio

▸ **stopAudio**(): [`Response`](../interfaces/interfaces_response.Response.md)

Stop current audio playback (if available) on the robot

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[stopAudio](clients_client.Client.md#stopaudio)

#### Defined in

[clients/client.ts:414](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L414)
