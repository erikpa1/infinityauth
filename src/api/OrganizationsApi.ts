import axios from "axios";
import {OrganizationsLight} from "../data/organizations";

export default class OrganizationsApi {
    static async getOrganizationsLight(): Promise<Array<OrganizationsLight>> {
        const value = await axios.get("/api/organizations/get-organizations")
        return value.data.values
    }


}