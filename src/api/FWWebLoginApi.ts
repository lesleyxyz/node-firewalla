import { Networker } from "./Networker.js"
import { AuthApi } from "./AuthApi.js"
import { FWWebGroupApi } from "./FWWebGroupApi.js"

class FWWebLoginApi extends AuthApi {
    static _instance: FWWebLoginApi

    constructor(){
        if (FWWebLoginApi._instance) {
			return FWWebLoginApi._instance
		}
        super()
		FWWebLoginApi._instance = this

        this.setApiNetworker(new Networker(`https://my.firewalla.com`))
    }

    async getBoxes(): Promise<[FWWebGroupApi]> {
        let boxes = await this.getApiNetworker().authGetRelative("/v1/box/list")

        return boxes.map(box => {
            let api = new FWWebGroupApi(box.gid)
            api.setAuth(this.getApiNetworker().authToken)
            return api
        })
    }

    async getBoxById(gid): Promise<FWWebGroupApi> {
        let boxes = await this.getBoxes()
        return boxes.filter(b => b.gid == gid)[0]
    }
}

export default new FWWebLoginApi()