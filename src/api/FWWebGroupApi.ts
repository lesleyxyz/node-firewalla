import { Networker } from "./Networker.js"
import { AuthApi } from "./AuthApi.js"

export class FWWebGroupApi extends AuthApi {
    gid: string

    constructor(gid){
        super()
        this.gid = gid
        this.setApiNetworker(new Networker(`https://my.firewalla.com`))
        this.getApiNetworker().addHeader("x-firewalla-id", gid)
    }

    async getDevices(){
        return this.getApiNetworker().authGetRelative("/v1/device/list")
    }

    async getBoxInfo(){
        return this.getApiNetworker().authGetRelative("/v1/box/info")
    }

    async getBoxSummaryInfo(){
        return this.getApiNetworker().authGetRelative("/v1/dashboard/summaryInfo")
    }

    async getAlarms() {
        return this.getApiNetworker().authGetRelative("/v1/alarm/info")
    }

    async getDeviceInfo(mac) {
        return this.getApiNetworker().authGetRelative(`/v1/device/${mac}`)
    }

    async getRules() {
        return this.getApiNetworker().authGetRelative(`/v1/rule/list`)
    }

    async getDataUsage(){
        return this.getApiNetworker().authGetRelative(`/v1/dashboard/dataUsage`)
    }
}
