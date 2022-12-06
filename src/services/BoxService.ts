import { FWGroupApi } from "../api/index.js";
import { FWGetMessage, FWCmdMessage } from "../models/index.js";
import { FWGroupService } from "./FWGroupService.js";


export class BoxService extends FWGroupService {
    async shutdown(): Promise<{}>{
        let msg = new FWGetMessage("shutdown")
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    async shutdownCancel(): Promise<{}>{
        let msg = new FWGetMessage("shutdownCancel")
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    async reboot(): Promise<{}>{
        let msg = new FWGetMessage("shutdownCancel")
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    async upgrade(): Promise<{}>{
        let msg = new FWGetMessage("shutdownCancel")
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }
}