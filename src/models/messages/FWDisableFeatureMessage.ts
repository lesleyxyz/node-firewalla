import { FWMessage, FWMessageResult } from "../FWMessage.js";

export interface FWDisableFeatureResult extends FWMessageResult {}
export class FWDisableFeatureMessage extends FWMessage<FWDisableFeatureResult> {
    /**
     * @param {string} featureName - Which feature to disable (adblock, family_protect, safe_search, unbound, ...)
     */
    constructor(featureName){
        super("cmd", { item: "disableFeature", value: { featureName }})
    }

    parseResult(result: object): FWDisableFeatureResult {
        return result as FWDisableFeatureResult
    }
}