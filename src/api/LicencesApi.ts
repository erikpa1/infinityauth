import axios from "axios";

import {LicenceLight} from "../data/licences";

export default class LicencesApi {
    static async getLicencesLight(): Promise<Array<LicenceLight>> {
        const value = await axios.get("/api/licences/get-licences")
        return value.data.values
    }


}