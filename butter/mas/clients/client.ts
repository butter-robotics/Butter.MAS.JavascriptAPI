import { PacketBuilder } from '../packets/packet_builder'
import { RotationUnits } from '../interfaces/types'
import { Response } from '../api';

export class Client {
    private _timeout: number;
    private _target: string;

    ip: string;
    port: number;
    protocol: string;


    /**
     * Creates an instance of Client.
     *
     * @param {string} ip
     * @param {number} [port=3000]
     * @param {string} [protocol='http']
     * @memberof Client
     */
    constructor(ip: string, port: number = 3000, protocol: string = 'http') {
        this._timeout = 40;
        this._target = PacketBuilder.ANY_TARGET;

        this.ip = ip;
        this.port = port;
        this.protocol = protocol;
    }

    /**
     * Get command execution timeout (in milliseconds)
     *
     * @memberof Client
     */
    get timeout() {
        return this._timeout;
    }

    /**
     * Set time for the command execution
     *
     * @param {number} timeout command execution timeout in milliseconds
     * @memberof Client
     */
    set timeout(timeout: number) {
        if (timeout < 20 || timeout > 2000) {
            throw new Error('Timeout most be an integer number in the range [20, 2000]');
        }

        this._timeout = timeout;
    }

    /**
     * Get robot character target
     *
     * @memberof Client
     */
    get target() {
        return this._target;
    }

    /**
     * Set robot character target
     *
     * @param {string} target robot character target
     * @memberof Client
     */
    set target(target: string) {
        if (typeof target !== 'string' || target.length === 0) {
            throw new Error('Robot character target most be a non empty string');
        }

        this._target = target;
    }

    /**
     * Validate robot connection and assert link quality
     * This validation assets minimal lower bound link quality, and do not take worst case scenarios into account
     * ICMP protocol is assumed to be supported and enabled on the machine network
     *
     * @param clientIp this machine ip address
     * @return Response whether this machine is reachable within the defined link parameter
     * @memberof Client
     */
    assertLinkQuality(clientIp: string): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                .addCommand('network')
                .addArgument('ping')
                .addKeyValuePair('ip', clientIp)
                .addKeyValuePair('timeout', this._timeout)
                .build();
        return packet.send(this._timeout);
    }

    /**
     * Get available robot handlers
     *
     * @returns response containing all the available robot handlers
     * @memberof Client
     */
    getAvailableHandlers(): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol).addCommand('list').build();

        return packet.send(this._timeout);
    }


    /**
     * Get available (loaded) robot animations
     *
     * @param {boolean} [reload=false]
     * @returns response containing all the available (loaded) robot animations
     * @memberof Client
     */
    getAvailableAnimations(reload: boolean = false): Response {
        const builder = new PacketBuilder(this.ip, this.port, this.target, this.protocol).addCommand('animate');

        if (reload) {
            builder.addParameter('reload');
        }

        const packet = builder.addParameter('list').build();

        return packet.send(this._timeout);
    }


    /**
     * Get available (loaded) robot sound assets
     *
     * @param {boolean} [reload=false]
     * @returns response containing all the available (loaded) robot sound assets
     * @memberof Client
     */
    getAvailableSounds(reload: boolean = false): Response {
        const builder = new PacketBuilder(this.ip, this.port, this.target, this.protocol).addCommand('audio');

        if (reload) {
            builder.addParameter('reload');
        }

        const packet = builder.addParameter('list').build();

        return packet.send(this._timeout);
    }


    /**
     * Get all available motor registers (for Dynamixel motors only)
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {boolean} [readableOnly=false] get readable registers only
     * @returns response containing all the available motor registers
     * @memberof Client
     */
    getAvailableMotorRegisters(motorName: string, readableOnly: boolean = false): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('dxl')
                    .addArguments('get', motorName)
                    .addParameter('list')
                    .addKeyValuePair('readableOnly', readableOnly)
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Get motor register value (for Dynamixel motors only)
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {string} registerName
     * @returns response containing register value
     * @memberof Client
     */
    getMotorRegister(motorName: string, registerName: string): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('dxl')
                    .addArguments('get', motorName, registerName)
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Get motor register value range (for Dynamixel motors only)
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {string} registerName
     * @returns response containing register range value
     * @memberof Client
     */
    getMotorRegisterRange(motorName: string, registerName: string): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('dxl')
                    .addArguments('get', motorName, registerName)
                    .addParameter('range')
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Get motor register value (for Dynamixel motors only)
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {string} registerName
     * @param {string} value
     * @returns response containing execution result
     * @memberof Client
     */
    setMotorRegister(motorName: string, registerName: string, value: string): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('dxl')
                    .addArguments('set', motorName, registerName, value)
                    .build();

        return packet.send(this._timeout);
            }


    /**
     * Move motor to a certain position (relative to the motor's zero position)
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {number} position motor final position (in units)
     * @param {number} [velocity] motor movement speed (in units / sec)
     * @param {number} [acceleration] motor maximal acceleration (in units / sec * sec)
     * @param {RotationUnits} [units='radians'] rotation units
     * @returns response containing execution result
     * @memberof Client
     */
    moveMotorToPosition(motorName: string, position: number, velocity?: number, acceleration?: number, units: RotationUnits = 'radians'): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('move')
                    .addArguments(motorName, position)
                    .addKeyValuePair('velocity', velocity)
                    .addKeyValuePair('acceleration', acceleration)
                    .addKeyValuePair('units', units)
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Move motor to a certain position (relative to the motor's zero position) in fixed duration
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {number} position motor final position (in units)
     * @param {number} duration motor movement duration (in milliseconds)
     * @param {RotationUnits} [units='radians'] rotation units
     * @returns response containing execution result
     * @memberof Client
     */
    moveMotorInTime(motorName: string, position: number, duration: number, units: RotationUnits = 'radians'): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('move')
                    .addArguments(motorName, position)
                    .addKeyValuePair('duration', duration)
                    .addKeyValuePair('units', units)
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Move motor to a certain direction (relative to the motor's current position)
     *
     * @param {string} motorName  motor name (as configured on the configurator)
     * @param {string} direction motor movement direction (left, right, stop)
     * @param {number} [velocity] motor movement speed (in units / sec)
     * @param {RotationUnits} [units='radians'] rotation units
     * @returns response containing execution result
     * @memberof Client
     */
    moveMotorInDirection(motorName: string, direction: string, velocity?: number, units: RotationUnits = 'radians'): Response {
        // eslint-disable-next-line camelcase
        const direction_code = direction.toLowerCase() === 'right' ? 1 : direction.toLowerCase() === 'left' ? -1 : 0
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('move')
                    .addArguments(motorName, direction_code)
                    .addKeyValuePair('velocity', velocity)
                    .addKeyValuePair('units', units)
                    .addParameter('continuously')
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Move motor a certain amount of steps (relative to the motor's current position)
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {string} direction motor movement direction (left, right, stop)
     * @param {number} steps amount of steps to move
     * @param {number} [velocity] motor movement speed (in radians / sec)
     * @param {string} [interpolator] interpolation function
     * @param {RotationUnits} [units='radians'] rotation units
     * @returns response containing execution result
     * @memberof Client
     */
    // moveMotorInSteps(motorName: string, direction: string, steps: number, velocity?: number, interpolator?: string, units: RotationUnits = 'radians'): Response {
    //     const direction_code = direction.toLowerCase() == 'right' ? 1 : direction.toLowerCase() == 'left' ? -1 : 0
    //     const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol).addCommand('move').addArguments(motorName, direction_code)
    //                 .addKeyValuePair('steps', steps)
    //                 .addKeyValuePair('velocity', velocity)
    //                 .addKeyValuePair('interpolator', interpolator)
    //                 .addKeyValuePair('units', units)
    //                 .build();
    //     return packet.send(this._timeout);
    // }

    /**
     * Play animation sequence on the robot
     *
     * @param {Array<string>} animationSequence
     * @param {boolean} [lenient=false] wait for current playing animation (if present) to finish
     * @param {boolean} [relative=false] play animation relative to the current robot position
     * @returns response containing execution result
     * @memberof Client
     */
    playSequence(animationSequence: Array<string>, lenient: boolean = false, relative: boolean = false): Response {
        return this.playAnimation(animationSequence.join().replace(/\s+/g, ''), lenient, relative);
    }


    /**
     * Play animation on the robot
     *
     * @param {string} animationName
     * @param {boolean} [lenient=false] wait for current playing animation (if present) to finish
     * @param {boolean} [relative=false] play animation relative to the current robot position
     * @returns response containing execution result
     * @memberof Client
     */
     playAnimation(animationName: string, lenient: boolean = false, relative: boolean = false): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('animate')
                    .addArgument(animationName)
                    .addKeyValuePair('lenient', lenient)
                    .addKeyValuePair('relative', relative)
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * observe animation status ['ANIMATING', 'QUEUED', 'STOPPED', 'PAUSED', 'IDLE']
     *
     * @param {string} animationName (if non provided, will check global status)
     * @returns response containing execution result
     * @memberof Client
     */
    observeAnimation(animationName?: string): Response {
        const packet = animationName
                    ? new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('animate')
                    .addArgument(animationName)
                    .addParameter('status')
                    .build()
                    : new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('animate')
                    .addParameter('status')
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Pause currently playing animation (if available) on the robot
     *
     * @returns response containing execution result
     * @memberof Client
     */
    pauseAnimation(): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('animate')
                    .addParameter('pause')
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Resume currently paused animation (if available) on the robot
     *
     * @returns response containing execution result
     * @memberof Client
     */
    resumeAnimation(): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('animate')
                    .addParameter('resume')
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Stop currently playing animation (if available) on the robot
     *
     * @returns response containing execution result
     * @memberof Client
     */
    stopAnimation(): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('animate')
                    .addParameter('stop')
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Clear animation queue (if present)
     *
     * @returns response containing execution result
     * @memberof Client
     */
    clearAnimation(): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('animate')
                    .addParameter('clear')
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Play audio on the robot
     *
     * @param {string} fileName audio asset name
     * @returns response containing execution result
     * @memberof Client
     */
    playAudio(fileName: string): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('audio')
                    .addArgument(fileName)
                    .build();

        return packet.send(this._timeout);
    }


    // /**
    //  * observe playback status
    //  *
    //  * @param {string} fileName (if non provided, will check global status)
    //  * @returns response containing execution result
    //  * @memberof Client
    //  */
    // observeAudio(fileName?: string): Response {
    //     const packet = fileName
    //                 ? new PacketBuilder(this.ip, this.port, this.target, this.protocol)
    //                 .addCommand('audio')
    //                 .addArgument(fileName)
    //                 .addParameter('status')
    //                 .build()
    //                 : new PacketBuilder(this.ip, this.port, this.target, this.protocol)
    //                 .addCommand('audio')
    //                 .addParameter('status')
    //                 .build();

    //     return packet.send(this._timeout);
    // }


    /**
     * Pause current audio playback (if available) on the robot
     *
     * @returns response containing execution result
     * @memberof Client
     */
    pauseAudio(): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('audio')
                    .addParameter('pause')
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Resume currently paused audio playback (if available) on the robot
     *
     * @returns response containing execution result
     * @memberof Client
     */
    resumeAudio(): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('audio')
                    .addParameter('resume')
                    .build();

        return packet.send(this._timeout);
    }


    /**
     * Stop current audio playback (if available) on the robot
     *
     * @returns response containing execution result
     * @memberof Client
     */
    stopAudio(): Response {
        const packet = new PacketBuilder(this.ip, this.port, this.target, this.protocol)
                    .addCommand('audio')
                    .addParameter('stop')
                    .build();

        return packet.send(this._timeout);
    }
}
