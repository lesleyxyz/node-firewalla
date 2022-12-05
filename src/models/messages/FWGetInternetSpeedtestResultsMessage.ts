import { FWMessage, FWMessageResult } from "../FWMessage.js";


export interface FWSpeedResult {
    timestamp: number,
    client: {
        publicIp: string,
        isp: string
    },
    server: {
        location: string,
        country: string,
        sponsor: string,
        id: string,
        host: string
    },
    result: {
        upload: number,
        download: number,
        latency: number,
        jitter: number,
        ploss: number,
        dlMbytes: number,
        ulMbytes: number
    },
    success: boolean,
    vendor: string,
    manual?: boolean
}

interface FWGetInternetSpeedtestResultsResult extends FWMessageResult {
    results: [FWSpeedResult]
}

export class FWGetInternetSpeedtestResultsMessage extends FWMessage<FWGetInternetSpeedtestResultsResult> {

    /**
     * @param {Date} begin - Only return speedtests after this date
     */
    constructor(begin: Date = new Date(0)){
        super("get", { item: "internetSpeedtestResults", value: {
            begin: (Number(begin) / 1000)
        }})
    }

    parseResult(result: object): FWGetInternetSpeedtestResultsResult {
        return result as FWGetInternetSpeedtestResultsResult
    }
}