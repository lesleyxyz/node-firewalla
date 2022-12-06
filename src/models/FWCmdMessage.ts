import { FWMessage } from './FWMessage.js';


export class FWCmdMessage extends FWMessage {
	item: string
	value: object
    
    /**
     * @param {string} item - what to execute
     * @param {object} value - modifiers
     * @param {string} target - the host that needs to receive the message
     */
    constructor(item: string, value: object = {}, target: string = "0.0.0.0"){
        super("cmd", { item, value }, target)
        this.item = item
        this.value = value
    }
}
