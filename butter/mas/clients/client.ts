import { PacketBuilder } from '../packets/packet_builder'

export class Client {
    ip: string;
    port: number;
    protocol: string;


    /**
     * Creates an instance of Client.
     * 
     * @param {string} ip
     * @param {number} [port=5555]
     * @param {string} [protocol='http']
     * @memberof Client
     */
    constructor(ip: string, port: number=5555, protocol: string='http') {
        this.ip = ip;
        this.port = port;
        this.protocol = protocol;
    }

    /**
     * Get available robot handlers
     *
     * @returns response containing all the available robot handlers
     * @memberof Client
     */
    getAvailableHandlers() {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol).addCommand('list').build();

        return packet.send();
    }


    /**
     * Get available (loaded) robot animations
     *
     * @param {boolean} [reload=false]
     * @returns response containing all the available (loaded) robot animations
     * @memberof Client
     */
    getAvailableAnimations(reload: boolean=false) {
        const builder = new PacketBuilder(this.ip, this.port, this.protocol).addCommand('animate');

        if (reload)
            builder.addParameter('reload');

        const packet = builder.addParameter('list').build();

        return packet.send();
    }


    /**
     * Get available (loaded) robot sound assets
     *
     * @param {boolean} [reload=false] 
     * @returns response containing all the available (loaded) robot sound assets
     * @memberof Client
     */
    getAvailableSounds(reload: boolean=false) {
        const builder = new PacketBuilder(this.ip, this.port, this.protocol).addCommand('audio');

        if (reload)
            builder.addParameter('reload');

        const packet = builder.addParameter('list').build();

        return packet.send();
    }
    

    /**
     * Get all available motor registers (for Dynamixel motors only)
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {boolean} [readableOnly=false] get readable registers only
     * @returns response containing all the available motor registers
     * @memberof Client
     */
    getAvailableMotorRegisters(motorName: string, readableOnly: boolean=false) {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('dxl')
                    .addArguments('get', motorName)
                    .addParameter('list')
                    .addKeyValuePair('readableOnly', readableOnly)
                    .build();

        return packet.send();
    }


    /**
     * Get motor register value (for Dynamixel motors only)
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {string} registerName
     * @returns response containing register value
     * @memberof Client
     */
    getMotorRegister(motorName: string, registerName: string) {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('dxl')
                    .addArguments('get', motorName, registerName)
                    .build();

        return packet.send();
    }


    /**
     * Get motor register value range (for Dynamixel motors only)
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {string} registerName
     * @returns response containing register range value
     * @memberof Client
     */
    getMotorRegisterRange(motorName: string, registerName: string) {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('dxl')
                    .addArguments('get', motorName, registerName)
                    .addParameter('range')
                    .build();

        return packet.send();
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
    setMotorRegister(motorName: string, registerName: string, value: string) {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('dxl')
                    .addArguments('set', motorName, registerName, value)
                    .build(); 

        return packet.send();
            }


    /**
     * Move motor to a certian position (relative to the motor's zero position)
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {number} position motor final position (in radians)
     * @param {number} [velocity] motor movement speed (in radians / sec)
     * @param {number} [acceleration] motor maximal acceleration (in radians / sec * sec)
     * @returns response containing execution result
     * @memberof Client
     */
    moveMotorToPosition(motorName: string, position: number, velocity?: number, acceleration?: number) {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('move')
                    .addArguments(motorName, position)
                    .addKeyValuePair('velocity', velocity)
                    .addKeyValuePair('acceleration', acceleration)
                    .build();

        return packet.send();
            }

    
    /**
     * Move motor to a certian position (relative to the motor's zero position) in fixed duration
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {number} position motor final position (in radians)
     * @param {number} duration motor movement duration (in milliseconds)
     * @returns response containing execution result
     * @memberof Client
     */
    moveMotorInTime(motorName: string, position: number, duration: number) {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('move')
                    .addArguments(motorName, position)
                    .addKeyValuePair('duration', duration)
                    .build();      

        return packet.send();
    }

    
    /**
     * Move motor to a certian direction (relative to the motor's current position)
     *
     * @param {string} motorName  motor name (as configured on the configurator)
     * @param {string} direction motor movement direction (left, right, stop)
     * @param {number} [velocity] motor movement speed (in radians / sec)
     * @returns response containing execution result
     * @memberof Client
     */
    moveMotorInDirection(motorName: string, direction: string, velocity?: number) {
        const direction_code = direction.toLowerCase() == 'right' ? 1 : direction.toLowerCase() == 'left' ? -1 : 0
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('move')
                    .addArguments(motorName, direction_code)
                    .addKeyValuePair('velocity', velocity)
                    .addParameter('continuously')
                    .build();       

        return packet.send();
    }

    
    /**
     * Move motor a certian amount of steps (relative to the motor's current position)
     *
     * @param {string} motorName motor name (as configured on the configurator)
     * @param {string} direction motor movement direction (left, right, stop)
     * @param {number} steps amount of steps to move
     * @param {number} [velocity] motor movement speed (in radians / sec)
     * @param {string} [interpolator] interpolation function
     * @returns response containing execution result
     * @memberof Client
     */
    // moveMotorInSteps(motorName: string, direction: string, steps: number, velocity?: number, interpolator?: string) {
    //     const direction_code = direction.toLowerCase() == 'right' ? 1 : direction.toLowerCase() == 'left' ? -1 : 0
    //     const packet = new PacketBuilder(this.ip, this.port, this.protocol).addCommand('move').addArguments(motorName, direction_code)
    //                 .addKeyValuePair('steps', steps).addKeyValuePair('velocity', velocity) 
    //                 .addKeyValuePair('interpolator', interpolator).build();       
    //     return packet.send();
    // }


    /**
     * Play animation on the robot
     *
     * @param {string} animationName
     * @returns response containing execution result
     * @memberof Client
     */
    playAnimation(animationName: string) {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('animate')
                    .addArgument(animationName)
                    .build();

        return packet.send();
    }


    /**
     * Pause currently playing animation (if available) on the robot
     *
     * @returns response containing execution result
     * @memberof Client
     */
    pauseAnimation() {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('animate')
                    .addParameter('pause')
                    .build();        

        return packet.send();
    }

    /**
     * Resume currently paused animation (if available) on the robot
     *
     * @returns response containing execution result
     * @memberof Client
     */
    resumeAnimation() {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('animate')
                    .addParameter('resume')
                    .build();  

        return packet.send();
    }


    /**
     * Stop currently playing animation (if available) on the robot
     *
     * @returns response containing execution result
     * @memberof Client
     */
    stopAnimation() {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('animate')
                    .addParameter('stop')
                    .build();

        return packet.send();
    }


    /**
     * Play audio on the robot
     *
     * @param {string} fileName audio asset name
     * @returns response containing execution result
     * @memberof Client
     */
    playAudio(fileName: string) {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('audio')
                    .addArgument(fileName)
                    .build();

        return packet.send();
    }

        
    /**
     * Pause current audio playback (if available) on the robot
     *
     * @returns response containing execution result
     * @memberof Client
     */
    pauseAudio() {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('audio')
                    .addParameter('pause')
                    .build();

        return packet.send();
    }


    /**
     * Resume currently paused audio playback (if available) on the robot
     *
     * @returns response containing execution result
     * @memberof Client
     */
    resumeAudio() {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('audio')
                    .addParameter('resume')
                    .build();

        return packet.send();
    }


    /**
     * Stop current audio playback (if available) on the robot
     *
     * @returns response containing execution result
     * @memberof Client
     */
    stopAudio() {
        const packet = new PacketBuilder(this.ip, this.port, this.protocol)
                    .addCommand('audio')
                    .addParameter('stop')
                    .build();

        return packet.send();
    }
}