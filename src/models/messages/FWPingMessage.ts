import { FWMessage, FWMessageResult } from "../FWMessage.js";

export interface FWPingResult extends FWMessageResult {
    uptime: number,
    timestamp: string
}

export class FWPingMessage extends FWMessage<FWPingResult> {
    constructor(){
        super("cmd", { item: "ping" })
    }

    parseResult(result: object): FWPingResult {
        return result as FWPingResult
    }
}