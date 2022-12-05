import { FWMessage, FWMessageResult } from "../FWMessage.js";

export interface FWEnableFeatureResult extends FWMessageResult {}
export class FWEnableFeatureMessage extends FWMessage<FWEnableFeatureResult> {
    /**
     * @param {string} featureName - Which feature to enable (adblock, family_protect, safe_search, unbound, ...)
     */
    constructor(featureName){
        super("cmd", { item: "enableFeature", value: { featureName }})
    }

    parseResult(result: object): FWEnableFeatureResult {
        return result as FWEnableFeatureResult
    }
}