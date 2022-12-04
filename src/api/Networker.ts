import fetch from "node-fetch";

export class Networker {
    baseUrl: string
    authToken: string
    baseHeaders: object = {}

    constructor(baseUrl: string){
        this.baseUrl = baseUrl
    }

    setAuth(token: string){
        this.authToken = token
    }

    addHeader(key: string, value: string){
        this.baseHeaders[key] = value;
    }

    async authPostRelative(endpoint: string, body: object): Promise<any> {
        return this.authPost(this.baseUrl + endpoint, body)
    }

    async authPost(url: string, body: object): Promise<any> {
        return fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.authToken}`,
                "Content-Type": "application/json",
                ...this.baseHeaders,
            },
            body: JSON.stringify(body)
        }).then(r => r.json())
    }

    async authGetRelative(endpoint: string): Promise<any> {
        return this.authGet(this.baseUrl + endpoint)
    }

    async authGet(url: string): Promise<any> {
        return fetch(url, {
            headers: {
                "Authorization": `Bearer ${this.authToken}`,
                ...this.baseHeaders,
            },
        }).then(r => r.json())
    }
}