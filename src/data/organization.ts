import {randomUUID} from "crypto";


export class OrganizationLight {
    uid: string = randomUUID()
    name: string = ""
    image_path: string = ""


}

export class Organization extends OrganizationLight {

}