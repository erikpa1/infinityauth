import {randomUUID} from "crypto";

export class LicenceLight {
    organization: string = ""
    application: string = ""
    uid: string = randomUUID()
    type: string = "spa"
    valid_to: number = 0


}


export class Licence extends LicenceLight {

}