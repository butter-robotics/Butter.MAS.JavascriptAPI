# Class: Client

[clients/client](../modules/clients_client.md).Client

## Hierarchy

- **`Client`**

  ↳ [`HttpClient`](clients_client_http.HttpClient.md)

  ↳ [`TcpClient`](clients_client_tcp.TcpClient.md)

  ↳ [`UdpClient`](clients_client_udp.UdpClient.md)

## Table of contents

### Constructors

- [constructor](clients_client.Client.md#constructor)

### Properties

- [\_timeout](clients_client.Client.md#_timeout)
- [ip](clients_client.Client.md#ip)
- [port](clients_client.Client.md#port)
- [protocol](clients_client.Client.md#protocol)

### Accessors

- [timeout](clients_client.Client.md#timeout)

### Methods

- [clearAnimation](clients_client.Client.md#clearanimation)
- [getAvailableAnimations](clients_client.Client.md#getavailableanimations)
- [getAvailableHandlers](clients_client.Client.md#getavailablehandlers)
- [getAvailableMotorRegisters](clients_client.Client.md#getavailablemotorregisters)
- [getAvailableSounds](clients_client.Client.md#getavailablesounds)
- [getMotorRegister](clients_client.Client.md#getmotorregister)
- [getMotorRegisterRange](clients_client.Client.md#getmotorregisterrange)
- [moveMotorInDirection](clients_client.Client.md#movemotorindirection)
- [moveMotorInTime](clients_client.Client.md#movemotorintime)
- [moveMotorToPosition](clients_client.Client.md#movemotortoposition)
- [pauseAnimation](clients_client.Client.md#pauseanimation)
- [pauseAudio](clients_client.Client.md#pauseaudio)
- [playAnimation](clients_client.Client.md#playanimation)
- [playAudio](clients_client.Client.md#playaudio)
- [resumeAnimation](clients_client.Client.md#resumeanimation)
- [resumeAudio](clients_client.Client.md#resumeaudio)
- [setMotorRegister](clients_client.Client.md#setmotorregister)
- [stopAnimation](clients_client.Client.md#stopanimation)
- [stopAudio](clients_client.Client.md#stopaudio)

## Constructors

### constructor

• **new Client**(`ip`, `port?`, `protocol?`): [`Client`](clients_client.Client.md)

Creates an instance of Client.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ip` | `string` | `undefined` |
| `port?` | `number` | `3000` |
| `protocol?` | `string` | `'http'` |

#### Returns

[`Client`](clients_client.Client.md)

**`Memberof`**

Client

#### Defined in

[clients/client.ts:20](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L20)

## Properties

### \_timeout

• `Private` **\_timeout**: `number`

#### Defined in

[clients/client.ts:6](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L6)

___

### ip

• **ip**: `string`

#### Defined in

[clients/client.ts:7](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L7)

___

### port

• **port**: `number`

#### Defined in

[clients/client.ts:8](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L8)

___

### protocol

• **protocol**: `string`

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

#### Defined in

[clients/client.ts:414](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/0087c54/butter/mas/clients/client.ts#L414)
