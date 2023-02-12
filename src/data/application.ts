import {randomUUID} from "crypto";


export class ApplicationLight {
    uid: string = randomUUID()
    name: string = ""
    type: string = "spa"


}


export class Application extends ApplicationLight {

}