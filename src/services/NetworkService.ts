import { FWGroupApi } from "../api/index.js";
import { FWCmdMessage, FWDataPlan, FWGetMessage } from "../models/index.js";
import { FWGroupService } from "./FWGroupService.js";

export interface FWSpeedResult {
    timestamp: number,
    client: {
        publicIp: string,
        isp: string
    },
    server: {
        location: string,
        country: string,
        sponsor: string,
        id: string,
        host: string
    },
    result: {
        upload: number,
        download: number,
        latency: number,
        jitter: number,
        ploss: number,
        dlMbytes: number,
        ulMbytes: number
    },
    success: boolean,
    vendor: string,
    manual?: boolean
}

export interface FWGetMonthlyDataUsageResult {
    monthlyBeginTs: number,
    monthlyEndTs: number,
    totalUpload: number,
    totalDownload: number,
    upload: [number, number],
    download: [number, number],
}

export interface FWGetMonthlyDateUsageResult {
    ts: number,
    stats: {
        totalUpload: number,
        totalDownload: number,
        upload: [number, number],
        download: [number, number],
    }
}

export interface FWGetNetworkMonitorDataResult {
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

export class NetworkService extends FWGroupService {
    async ping(): Promise<{uptime: number, timestamp: string}>{
        let msg = new FWCmdMessage("ping")
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    /**
     * @param {string} wanUUID - the UUID of the WAN interface to run the speedtest on
     * @param {string} serverId - the ID of the remote server to run the speedtest on
     * @param {boolean} noUpload - whether to skip upload for the speedtest
     * @param {boolean} noDownload - whether to skip download for the speedtest
     */
    async runSpeedtest(wanUUID = "", serverId = "", noUpload = false, noDownload = false): Promise<{result: FWSpeedResult}> {
        let msg = new FWCmdMessage("runInternetSpeedtest", { wanUUID, serverId, noUpload, noDownload })
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    /**
     * @param {Date} begin - Only return speedtests after this date
     */
    async getSpeedtestResults(begin: Date = new Date(0)): Promise<{results: [FWSpeedResult]}>{
        let msg = new FWGetMessage("internetSpeedtestResults", { begin: (Number(begin) / 1000) })
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    async getMonthlyDataUsage(): Promise<FWGetMonthlyDataUsageResult>{
        let msg = new FWGetMessage("monthlyDataUsage")
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    /**
     * @param {Date} acl - ?? unknown parameter
     */
    async getLast12MonthlyDateUsage(acl = true): Promise<[FWGetMonthlyDateUsageResult]>{
        let msg = new FWGetMessage("last12monthlyDataUsage", { acl })
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }
    
    async getNetworkMonitorData(): Promise<[FWGetNetworkMonitorDataResult]>{
        let msg = new FWGetMessage("networkMonitorData")
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    async getDataPlan(): Promise<{enable: boolean, dataPlan: FWDataPlan}>{
        let msg = new FWGetMessage("dataPlan")
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }

    async getMyPublicKey(): Promise<{key: string}>{
        let msg = new FWGetMessage("mypubkey")
        return FWGroupApi.sendMessageToBox(this.fwGroup, msg)
    }
}