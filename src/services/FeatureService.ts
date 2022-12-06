import { FWGroupApi } from "../api/index.js";
import { FWCmdMessage } from "../models/index.js";
import { FWGroupService } from "./FWGroupService.js";

export enum FWFeature {
    ADBLOCK = "adblock",
    UNBOUND = "unbound",
    SAFE_SEARCH = "safe_search",
    FAMILY_PROTECT = "family_protect",
    DATA_PLAN = "data_plan",
}

export class FeatureService extends FWGroupService {
    /**
     * @param {string} featureName - Which feature to enable
     */
    async enableFeature(featureName: FWFeature): Promise<{}>{
        let msg = new FWCmdMessage("enableFeature", { featureName })
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    /**
     * @param {string} featureName - Which feature to disable
     */
     async disableFeature(featureName: FWFeature): Promise<{}>{
        let msg = new FWCmdMessage("disableFeature", { featureName })
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }
}