import { FWMessage } from './FWMessage.js';


export class FWGetMessage extends FWMessage {
	item: string
	value: object
    
    /**
     * @param {string} item - which item to get
     * @param {object} value - modifiers
     * @param {string} target - the host that needs to receive the message
     */
    constructor(item: string, value: object = {}, target: string = "0.0.0.0"){
        super("get", { item, value }, target)
        this.item = item
        this.value = value
    }
}
