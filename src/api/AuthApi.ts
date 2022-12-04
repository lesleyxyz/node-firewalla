import { Networker } from "./Networker.js"

export class AuthApi {
    apiNetworker: Networker

    getApiNetworker(): Networker{
        return this.apiNetworker
	}

    setApiNetworker(apiNetworker: Networker){
        this.apiNetworker = apiNetworker
    }

    setAuth(token: string){
        this.getApiNetworker().setAuth(token)
    }
}