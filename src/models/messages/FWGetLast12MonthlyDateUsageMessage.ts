import { FWMessage, FWMessageResult } from "../FWMessage.js";

export interface FWGetMonthlyDateUsageResult extends FWMessageResult {
    ts: number,
    stats: {
        totalUpload: number,
        totalDownload: number,
        upload: [number, number],
        download: [number, number],
    }
}

export interface FWGetLast12MonthlyDateUsageResult extends Array<FWGetMonthlyDateUsageResult> {}

export class FWGetLast12MonthlyDateUsageMessage extends FWMessage<FWGetLast12MonthlyDateUsageResult> {

    /**
     * @param {Date} acl - ?? unknown parameter
     */
    constructor(acl = true){
        super("get", { item: "last12monthlyDataUsage", value: { acl }})
    }

    parseResult(result: object): FWGetLast12MonthlyDateUsageResult {
        return result as FWGetLast12MonthlyDateUsageResult
    }
}