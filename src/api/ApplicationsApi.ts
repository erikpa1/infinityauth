import {ApplicationLight} from "../data/application";
import axios from "axios";

export default class ApplicationsApi {
    static async getApplicationsLight(): Promise<Array<ApplicationLight>> {
        const value = await axios.get("/api/applications/get-applications")
        return value.data.values
    }



}