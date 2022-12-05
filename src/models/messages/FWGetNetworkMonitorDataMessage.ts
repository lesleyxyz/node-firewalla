import { FWMessage, FWMessageResult } from "../FWMessage.js";

export interface FWGetNetworkMonitorDataResult extends FWMessageResult {
    [metric: string]: {
        [timestamp: string]: {
            stat: {
                median: number,
                min: number,
                max: number,
                mean: number,
                lossrate: number
            }
        }
    }
}

export class FWGetNetworkMonitorDataMessage extends FWMessage<FWGetNetworkMonitorDataResult> {
    constructor(){
        super("get", { item: "networkMonitorData", value: {} })
    }

    parseResult(result: object): FWGetNetworkMonitorDataResult {
        return result as FWGetNetworkMonitorDataResult
    }
}