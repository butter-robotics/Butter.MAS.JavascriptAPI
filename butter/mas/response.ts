export interface ResponseDataPacket {
    status: string,
    data: Array<ResponseDataPacket> | string,
    metadata?: string,
    async?: boolean
}

export interface ResponseData {
    command?: string,
    parameters?: Array<string>,
    executed?: boolean,
    response: ResponseDataPacket,
}

export interface Response {
    data: ResponseData,
    status: number,
    statusText: string,
    headers?: any,
    config?: any,
    request?: any
}