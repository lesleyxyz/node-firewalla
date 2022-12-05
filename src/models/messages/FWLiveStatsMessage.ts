import { FWMessage, FWMessageResult } from "../FWMessage.js";

export interface FWLiveStatsResult extends FWMessageResult {

}

export class FWLiveStatsMessage extends FWMessage<FWLiveStatsResult> {
    constructor(){
        super("get", { item: "liveStats", value: {
            type: "system",
            target: "",
            queries: {
                throughput: {},
                activeConn: {}
            }
        }})
    }

    parseResult(result: object): FWLiveStatsResult {
        return result as FWLiveStatsResult
    }
}