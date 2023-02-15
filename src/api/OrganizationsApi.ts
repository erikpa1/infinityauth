import axios from "axios";
import {OrganizationLight} from "../data/organization";

export default class OrganizationsApi {
    static async getOrganizationLight(): Promise<Array<OrganizationLight>> {
        const value = await axios.get("/api/organizations/get-organizations")
        return value.data.values
    }


}