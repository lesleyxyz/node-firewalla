import { FWMessage } from './FWMessage.js';


export class FWSetMessage extends FWMessage {
	item: string
	value: object
    
    /**
     * @param {string} item - which item to set
     * @param {object} value - the values to set
     * @param {string} target - the host that needs to receive the message
     */
    constructor(item: string, value: object = {}, target: string = "0.0.0.0"){
        super("cmd", { item, value }, target)
        this.item = item
        this.value = value
    }
}
