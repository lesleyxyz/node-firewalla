import fetch from "node-fetch";

export class Networker {
    baseUrl: string
    authToken: string

    constructor(baseUrl: string){
        this.baseUrl = baseUrl
    }

    setAuth(token: string){
        this.authToken = token
    }

    async authPostRelative(endpoint: string, body: object){
        return this.authPost(this.baseUrl + endpoint, body)
    }

    async authPost(url: string, body: object){
        return fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.authToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(r => r.json())
    }

    async authGetRelative(endpoint: string){
        return this.authGet(this.baseUrl + endpoint)
    }

    async authGet(url: string){
        return fetch(url, {
            headers: {
                "Authorization": `Bearer ${this.authToken}`,
            },
        }).then(r => r.json())
    }
}