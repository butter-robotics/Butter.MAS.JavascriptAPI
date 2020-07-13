export declare class Client {
    ip: string;
    port: number;
    protocol: string;
    constructor(ip: string, port?: number, protocol?: string);
    getAvailableHandlers(): any;
    getAvailableAnimations(reload?: boolean): any;
    getAvailableSounds(reload?: boolean): any;
    getAvailableMotorRegisters(motorName: string, readableOnly?: boolean): any;
    getMotorRegister(motorName: string, registerName: string): any;
    getMotorRegisterRange(motorName: string, registerName: string): any;
    setMotorRegister(motorName: string, registerName: string, value: string): any;
    moveMotorToPosition(motorName: string, position: number, velocity?: number, acceleration?: number): any;
    moveMotorInTime(motorName: string, position: number, duration: number): any;
    moveMotorInDirection(motorName: string, direction: string, velocity?: number): any;
    playAnimation(animationName: string): any;
    pauseAnimation(): any;
    resumeAnimation(): any;
    stopAnimation(): any;
    playAudio(fileName: string): any;
    pauseAudio(): any;
    resumeAudio(): any;
    stopAudio(): any;
}
