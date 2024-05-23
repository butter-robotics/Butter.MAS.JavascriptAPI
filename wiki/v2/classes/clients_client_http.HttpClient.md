# Class: HttpClient

[clients/client\_http](../modules/clients_client_http.md).HttpClient

Butter MAS HTTP client API

 HttpClient

## Hierarchy

- [`Client`](clients_client.Client.md)

  ↳ **`HttpClient`**

## Table of contents

### Constructors

- [constructor](clients_client_http.HttpClient.md#constructor)

### Properties

- [ip](clients_client_http.HttpClient.md#ip)
- [port](clients_client_http.HttpClient.md#port)
- [protocol](clients_client_http.HttpClient.md#protocol)

### Accessors

- [target](clients_client_http.HttpClient.md#target)
- [timeout](clients_client_http.HttpClient.md#timeout)

### Methods

- [assertLinkQuality](clients_client_http.HttpClient.md#assertlinkquality)
- [clearAnimation](clients_client_http.HttpClient.md#clearanimation)
- [getAvailableAnimations](clients_client_http.HttpClient.md#getavailableanimations)
- [getAvailableHandlers](clients_client_http.HttpClient.md#getavailablehandlers)
- [getAvailableMotorRegisters](clients_client_http.HttpClient.md#getavailablemotorregisters)
- [getAvailableSounds](clients_client_http.HttpClient.md#getavailablesounds)
- [getMotorRegister](clients_client_http.HttpClient.md#getmotorregister)
- [getMotorRegisterRange](clients_client_http.HttpClient.md#getmotorregisterrange)
- [moveMotorInDirection](clients_client_http.HttpClient.md#movemotorindirection)
- [moveMotorInTime](clients_client_http.HttpClient.md#movemotorintime)
- [moveMotorToPosition](clients_client_http.HttpClient.md#movemotortoposition)
- [observeAnimation](clients_client_http.HttpClient.md#observeanimation)
- [pauseAnimation](clients_client_http.HttpClient.md#pauseanimation)
- [pauseAudio](clients_client_http.HttpClient.md#pauseaudio)
- [playAnimation](clients_client_http.HttpClient.md#playanimation)
- [playAudio](clients_client_http.HttpClient.md#playaudio)
- [playSequence](clients_client_http.HttpClient.md#playsequence)
- [resumeAnimation](clients_client_http.HttpClient.md#resumeanimation)
- [resumeAudio](clients_client_http.HttpClient.md#resumeaudio)
- [setMotorRegister](clients_client_http.HttpClient.md#setmotorregister)
- [stopAnimation](clients_client_http.HttpClient.md#stopanimation)
- [stopAudio](clients_client_http.HttpClient.md#stopaudio)

## Constructors

### constructor

• **new HttpClient**(`ip`, `port?`): [`HttpClient`](clients_client_http.HttpClient.md)

Creates an instance of HttpClient.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ip` | `string` | `undefined` |
| `port?` | `number` | `3000` |

#### Returns

[`HttpClient`](clients_client_http.HttpClient.md)

**`Memberof`**

HttpClient

#### Overrides

[Client](clients_client.Client.md).[constructor](clients_client.Client.md#constructor)

#### Defined in

[clients/client_http.ts:16](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client_http.ts#L16)

## Properties

### ip

• **ip**: `string`

#### Inherited from

[Client](clients_client.Client.md).[ip](clients_client.Client.md#ip)

#### Defined in

[clients/client.ts:9](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L9)

___

### port

• **port**: `number`

#### Inherited from

[Client](clients_client.Client.md).[port](clients_client.Client.md#port)

#### Defined in

[clients/client.ts:10](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L10)

___

### protocol

• **protocol**: `string`

#### Inherited from

[Client](clients_client.Client.md).[protocol](clients_client.Client.md#protocol)

#### Defined in

[clients/client.ts:11](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L11)

## Accessors

### target

• `get` **target**(): `string`

Get robot character target

#### Returns

`string`

**`Memberof`**

Client

#### Inherited from

Client.target

#### Defined in

[clients/client.ts:59](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L59)

• `set` **target**(`target`): `void`

Set robot character target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `string` | robot character target |

#### Returns

`void`

**`Memberof`**

Client

#### Inherited from

Client.target

#### Defined in

[clients/client.ts:69](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L69)

___

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

[clients/client.ts:36](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L36)

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

[clients/client.ts:46](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L46)

## Methods

### assertLinkQuality

▸ **assertLinkQuality**(`clientIp`): [`Response`](../interfaces/interfaces_response.Response.md)

Validate robot connection and assert link quality
This validation assets minimal lower bound link quality, and do not take worst case scenarios into account
ICMP protocol is assumed to be supported and enabled on the machine network

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientIp` | `string` | this machine ip address |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

Response whether this machine is reachable within the defined link parameter

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[assertLinkQuality](clients_client.Client.md#assertlinkquality)

#### Defined in

[clients/client.ts:86](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L86)

___

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

[clients/client.ts:431](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L431)

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

[clients/client.ts:116](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L116)

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

[clients/client.ts:102](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L102)

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

[clients/client.ts:157](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L157)

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

[clients/client.ts:136](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L136)

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

[clients/client.ts:177](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L177)

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

[clients/client.ts:195](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L195)

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

[clients/client.ts:281](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L281)

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

[clients/client.ts:259](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L259)

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

[clients/client.ts:236](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L236)

___

### observeAnimation

▸ **observeAnimation**(`animationName?`): [`Response`](../interfaces/interfaces_response.Response.md)

observe animation status ['ANIMATING', 'QUEUED', 'STOPPED', 'PAUSED', 'IDLE']

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animationName?` | `string` | (if non provided, will check global status) |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[observeAnimation](clients_client.Client.md#observeanimation)

#### Defined in

[clients/client.ts:361](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L361)

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

[clients/client.ts:383](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L383)

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

[clients/client.ts:487](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L487)

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

[clients/client.ts:342](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L342)

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

[clients/client.ts:448](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L448)

___

### playSequence

▸ **playSequence**(`animationSequence`, `lenient?`, `relative?`): [`Response`](../interfaces/interfaces_response.Response.md)

Play animation sequence on the robot

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animationSequence` | `string`[] | `undefined` |  |
| `lenient?` | `boolean` | `false` | wait for current playing animation (if present) to finish |
| `relative?` | `boolean` | `false` | play animation relative to the current robot position |

#### Returns

[`Response`](../interfaces/interfaces_response.Response.md)

response containing execution result

**`Memberof`**

Client

#### Inherited from

[Client](clients_client.Client.md).[playSequence](clients_client.Client.md#playsequence)

#### Defined in

[clients/client.ts:328](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L328)

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

[clients/client.ts:399](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L399)

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

[clients/client.ts:503](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L503)

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

[clients/client.ts:215](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L215)

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

[clients/client.ts:415](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L415)

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

[clients/client.ts:519](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/86ab50c/butter/mas/clients/client.ts#L519)
