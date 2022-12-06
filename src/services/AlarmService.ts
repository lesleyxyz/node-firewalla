import { FWGroupApi } from "../api/index.js";
import { FWGetMessage, FWCmdMessage } from "../models/index.js";
import { FWGroupService } from "./FWGroupService.js";


// This alarm has a lot more fields depending on the type
// https://github.com/firewalla/firewalla/blob/master/alarm/Alarm.js
export interface FWAlarm {
    aid: string,
    type: string,
    device: string,
    timestamp: string,
    alarmTimestamp: string,
    message: string,
}

export class AlarmService extends FWGroupService {
    async getAll(): Promise<{count: number, alarms: [FWAlarm]}>{
        let msg = new FWGetMessage("alarms")
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    async getById(alarmID: string) {
        let msg = new FWGetMessage("alarm", { alarmID })
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    async getDetailsById(alarmID: string) {
        let msg = new FWGetMessage("alarmDetail", { alarmID })
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    async ignoreAll(): Promise<{}>  {
        let msg = new FWCmdMessage("alarm:ignoreAll")
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    async ignoreById(alarmID: string): Promise<{ignoreIds: [string]}> {
        let msg = new FWCmdMessage("alarm:ignore", { alarmID })
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }
}