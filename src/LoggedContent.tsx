import AppNavBar from "./AppNavBar";
import {ProSidebarProvider} from "react-pro-sidebar";
import {Route, Routes} from "react-router-dom";
import React from "react";
import ApplicationsView from "./pages/applications/ApplicationsView";
import OrganizationsView from "./pages/organizations/OrganizationsView";
import UsersView from "./pages/users/UsersView";
import LicencesView from "./pages/licences/LicencesView";

export default function LoggedContent({}) {

    console.log("Here")

    return (
        <div style={{}}>

            <ProSidebarProvider>
                <AppNavBar/>
            </ProSidebarProvider>

            <div style={{flexGrow: 1}}>
                <main>
                    <_Main/>
                </main>
            </div>
        </div>

    )
}

function _Main() {
    return (
        <Routes>
            <Route path={"/applications"} element={<ApplicationsView/>}/>
            <Route path={"/organizations"} element={<OrganizationsView/>}/>
            <Route path={"/users"} element={<UsersView/>}/>
            <Route path={"/licences"} element={<LicencesView/>}/>
        </Routes>
    )
}