export interface ResponseDataPacket {
    status: string,
    data: Array<ResponseDataPacket> | string,
    metadata?: MetadataDataPacket,
}

export interface RequestDataPacket {
    query?: string,
    parameters?: Array<string>,
}

export interface MetadataDataPacket {
    handler: string,
    asynchronous?: boolean
    exception?: string,
    timestamp: number,
    duration: number,
}

// *** This Type should be updated together with MAS#ResponseBuilder *** 
export interface ResponseData {
    request: RequestDataPacket,
    response: ResponseDataPacket,
    executed?: boolean,
}

export interface Response {
    data: ResponseData,
    status: number,
    statusText: string,
    headers?: any,
    config?: any,
    request?: any
}