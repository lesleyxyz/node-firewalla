import { FWMessage, FWMessageResult } from "../FWMessage.js";

export interface FWGetMonthlyDataUsageResult extends FWMessageResult {
    monthlyBeginTs: number,
    monthlyEndTs: number,
    totalUpload: number,
    totalDownload: number,
    upload: [number, number],
    download: [number, number],
}

export class FWGetMonthlyDataUsageMessage extends FWMessage<FWGetMonthlyDataUsageResult> {
    constructor(){
        super("get", { item: "monthlyDataUsage", value: {} })
    }

    parseResult(result: object): FWGetMonthlyDataUsageResult {
        return result as FWGetMonthlyDataUsageResult
    }
}