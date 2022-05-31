[Butter MAS Javascript API Documentation](../README.md) / [Exports](../modules.md) / HttpClient

# Class: HttpClient

Butter MAS HTTP client API

## Hierarchy

- `Client`

  ↳ **`HttpClient`**

## Table of contents

### Constructors

- [constructor](HttpClient.md#constructor)

### Properties

- [ip](HttpClient.md#ip)
- [port](HttpClient.md#port)
- [protocol](HttpClient.md#protocol)

### Accessors

- [timeout](HttpClient.md#timeout)

### Methods

- [clearAnimation](HttpClient.md#clearanimation)
- [getAvailableAnimations](HttpClient.md#getavailableanimations)
- [getAvailableHandlers](HttpClient.md#getavailablehandlers)
- [getAvailableMotorRegisters](HttpClient.md#getavailablemotorregisters)
- [getAvailableSounds](HttpClient.md#getavailablesounds)
- [getMotorRegister](HttpClient.md#getmotorregister)
- [getMotorRegisterRange](HttpClient.md#getmotorregisterrange)
- [moveMotorInDirection](HttpClient.md#movemotorindirection)
- [moveMotorInTime](HttpClient.md#movemotorintime)
- [moveMotorToPosition](HttpClient.md#movemotortoposition)
- [pauseAnimation](HttpClient.md#pauseanimation)
- [pauseAudio](HttpClient.md#pauseaudio)
- [playAnimation](HttpClient.md#playanimation)
- [playAudio](HttpClient.md#playaudio)
- [resumeAnimation](HttpClient.md#resumeanimation)
- [resumeAudio](HttpClient.md#resumeaudio)
- [setMotorRegister](HttpClient.md#setmotorregister)
- [stopAnimation](HttpClient.md#stopanimation)
- [stopAudio](HttpClient.md#stopaudio)

## Constructors

### constructor

• **new HttpClient**(`ip`, `port?`, `protocol?`)

Creates an instance of HttpClient.

**`memberof`** HttpClient

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ip` | `string` | `undefined` |
| `port` | `number` | `3000` |
| `protocol` | `string` | `'http'` |

#### Overrides

Client.constructor

#### Defined in

[clients/client_http.ts:17](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client_http.ts#L17)

## Properties

### ip

• **ip**: `string`

#### Inherited from

Client.ip

#### Defined in

[clients/client.ts:7](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L7)

___

### port

• **port**: `number`

#### Inherited from

Client.port

#### Defined in

[clients/client.ts:8](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L8)

___

### protocol

• **protocol**: `string`

#### Inherited from

Client.protocol

#### Defined in

[clients/client.ts:9](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L9)

## Accessors

### timeout

• `get` **timeout**(): `number`

Get command execution timeout (in milliseconds)

**`memberof`** Client

#### Returns

`number`

#### Inherited from

Client.timeout

#### Defined in

[clients/client.ts:32](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L32)

• `set` **timeout**(`timeout`): `void`

Set time for the command execution

**`memberof`** Client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeout` | `number` | command execution timeout in milliseconds |

#### Returns

`void`

#### Inherited from

Client.timeout

#### Defined in

[clients/client.ts:42](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L42)

## Methods

### clearAnimation

▸ **clearAnimation**(): [`Response`](../interfaces/Response.md)

Clear animation queue (if present)

**`memberof`** Client

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.clearAnimation

#### Defined in

[clients/client.ts:346](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L346)

___

### getAvailableAnimations

▸ **getAvailableAnimations**(`reload?`): [`Response`](../interfaces/Response.md)

Get available (loaded) robot animations

**`memberof`** Client

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reload` | `boolean` | `false` |

#### Returns

[`Response`](../interfaces/Response.md)

response containing all the available (loaded) robot animations

#### Inherited from

Client.getAvailableAnimations

#### Defined in

[clients/client.ts:70](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L70)

___

### getAvailableHandlers

▸ **getAvailableHandlers**(): [`Response`](../interfaces/Response.md)

Get available robot handlers

**`memberof`** Client

#### Returns

[`Response`](../interfaces/Response.md)

response containing all the available robot handlers

#### Inherited from

Client.getAvailableHandlers

#### Defined in

[clients/client.ts:56](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L56)

___

### getAvailableMotorRegisters

▸ **getAvailableMotorRegisters**(`motorName`, `readableOnly?`): [`Response`](../interfaces/Response.md)

Get all available motor registers (for Dynamixel motors only)

**`memberof`** Client

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `motorName` | `string` | `undefined` | motor name (as configured on the configurator) |
| `readableOnly` | `boolean` | `false` | - |

#### Returns

[`Response`](../interfaces/Response.md)

response containing all the available motor registers

#### Inherited from

Client.getAvailableMotorRegisters

#### Defined in

[clients/client.ts:109](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L109)

___

### getAvailableSounds

▸ **getAvailableSounds**(`reload?`): [`Response`](../interfaces/Response.md)

Get available (loaded) robot sound assets

**`memberof`** Client

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reload` | `boolean` | `false` |

#### Returns

[`Response`](../interfaces/Response.md)

response containing all the available (loaded) robot sound assets

#### Inherited from

Client.getAvailableSounds

#### Defined in

[clients/client.ts:89](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L89)

___

### getMotorRegister

▸ **getMotorRegister**(`motorName`, `registerName`): [`Response`](../interfaces/Response.md)

Get motor register value (for Dynamixel motors only)

**`memberof`** Client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motorName` | `string` | motor name (as configured on the configurator) |
| `registerName` | `string` |  |

#### Returns

[`Response`](../interfaces/Response.md)

response containing register value

#### Inherited from

Client.getMotorRegister

#### Defined in

[clients/client.ts:129](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L129)

___

### getMotorRegisterRange

▸ **getMotorRegisterRange**(`motorName`, `registerName`): [`Response`](../interfaces/Response.md)

Get motor register value range (for Dynamixel motors only)

**`memberof`** Client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motorName` | `string` | motor name (as configured on the configurator) |
| `registerName` | `string` |  |

#### Returns

[`Response`](../interfaces/Response.md)

response containing register range value

#### Inherited from

Client.getMotorRegisterRange

#### Defined in

[clients/client.ts:147](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L147)

___

### moveMotorInDirection

▸ **moveMotorInDirection**(`motorName`, `direction`, `velocity?`, `units?`): [`Response`](../interfaces/Response.md)

Move motor to a certain direction (relative to the motor's current position)

**`memberof`** Client

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `motorName` | `string` | `undefined` | motor name (as configured on the configurator) |
| `direction` | `string` | `undefined` | motor movement direction (left, right, stop) |
| `velocity?` | `number` | `undefined` | - |
| `units` | `RotationUnits` | `'radians'` | - |

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.moveMotorInDirection

#### Defined in

[clients/client.ts:233](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L233)

___

### moveMotorInTime

▸ **moveMotorInTime**(`motorName`, `position`, `duration`, `units?`): [`Response`](../interfaces/Response.md)

Move motor to a certain position (relative to the motor's zero position) in fixed duration

**`memberof`** Client

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `motorName` | `string` | `undefined` | motor name (as configured on the configurator) |
| `position` | `number` | `undefined` | motor final position (in units) |
| `duration` | `number` | `undefined` | motor movement duration (in milliseconds) |
| `units` | `RotationUnits` | `'radians'` | - |

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.moveMotorInTime

#### Defined in

[clients/client.ts:211](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L211)

___

### moveMotorToPosition

▸ **moveMotorToPosition**(`motorName`, `position`, `velocity?`, `acceleration?`, `units?`): [`Response`](../interfaces/Response.md)

Move motor to a certain position (relative to the motor's zero position)

**`memberof`** Client

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `motorName` | `string` | `undefined` | motor name (as configured on the configurator) |
| `position` | `number` | `undefined` | motor final position (in units) |
| `velocity?` | `number` | `undefined` | - |
| `acceleration?` | `number` | `undefined` | - |
| `units` | `RotationUnits` | `'radians'` | - |

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.moveMotorToPosition

#### Defined in

[clients/client.ts:188](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L188)

___

### pauseAnimation

▸ **pauseAnimation**(): [`Response`](../interfaces/Response.md)

Pause currently playing animation (if available) on the robot

**`memberof`** Client

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.pauseAnimation

#### Defined in

[clients/client.ts:298](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L298)

___

### pauseAudio

▸ **pauseAudio**(): [`Response`](../interfaces/Response.md)

Pause current audio playback (if available) on the robot

**`memberof`** Client

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.pauseAudio

#### Defined in

[clients/client.ts:379](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L379)

___

### playAnimation

▸ **playAnimation**(`animationName`, `lenient?`, `relative?`): [`Response`](../interfaces/Response.md)

Play animation on the robot

**`memberof`** Client

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `animationName` | `string` | `undefined` |
| `lenient` | `boolean` | `false` |
| `relative` | `boolean` | `false` |

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.playAnimation

#### Defined in

[clients/client.ts:280](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L280)

___

### playAudio

▸ **playAudio**(`fileName`): [`Response`](../interfaces/Response.md)

Play audio on the robot

**`memberof`** Client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | audio asset name |

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.playAudio

#### Defined in

[clients/client.ts:363](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L363)

___

### resumeAnimation

▸ **resumeAnimation**(): [`Response`](../interfaces/Response.md)

Resume currently paused animation (if available) on the robot

**`memberof`** Client

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.resumeAnimation

#### Defined in

[clients/client.ts:314](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L314)

___

### resumeAudio

▸ **resumeAudio**(): [`Response`](../interfaces/Response.md)

Resume currently paused audio playback (if available) on the robot

**`memberof`** Client

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.resumeAudio

#### Defined in

[clients/client.ts:395](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L395)

___

### setMotorRegister

▸ **setMotorRegister**(`motorName`, `registerName`, `value`): [`Response`](../interfaces/Response.md)

Get motor register value (for Dynamixel motors only)

**`memberof`** Client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `motorName` | `string` | motor name (as configured on the configurator) |
| `registerName` | `string` |  |
| `value` | `string` |  |

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.setMotorRegister

#### Defined in

[clients/client.ts:167](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L167)

___

### stopAnimation

▸ **stopAnimation**(): [`Response`](../interfaces/Response.md)

Stop currently playing animation (if available) on the robot

**`memberof`** Client

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.stopAnimation

#### Defined in

[clients/client.ts:330](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L330)

___

### stopAudio

▸ **stopAudio**(): [`Response`](../interfaces/Response.md)

Stop current audio playback (if available) on the robot

**`memberof`** Client

#### Returns

[`Response`](../interfaces/Response.md)

response containing execution result

#### Inherited from

Client.stopAudio

#### Defined in

[clients/client.ts:411](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0d4a361/butter/mas/clients/client.ts#L411)
