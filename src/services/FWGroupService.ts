import { FWGroup } from "../models/FWGroup.js";

export class FWGroupService {
    fwGroup: FWGroup

    constructor(fwGroup: FWGroup){
        this.fwGroup = fwGroup
    }
}