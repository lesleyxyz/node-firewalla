import { FWGroupApi } from "../api/index.js";
import { FWGetMessage, FWCmdMessage, FWHost } from "../models/index.js";
import { FWGroupService } from "./FWGroupService.js";


export class HostService extends FWGroupService {
    async getAll(): Promise<[FWHost]> {
        let msg = new FWGetMessage("hosts")
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    async wakeHost(mac: string): Promise<undefined>{
        let msg = new FWCmdMessage("wol:wake", {}, mac)
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }
}