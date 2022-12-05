import { FWMessage } from "../FWMessage.js";


export class FWGetInternetSpeedtestResultsMessage extends FWMessage {

    /**
     * @param {Date} begin - Only return speedtests after this date
     */
    constructor(begin: Date = new Date(0)){
        super("get", { item: "internetSpeedtestResults", value: {
            begin: (Number(begin) / 1000)
        }})
    }
}