import AppNavBar from "./AppNavBar";
import {ProSidebarProvider} from "react-pro-sidebar";

export default function LoggedContent({}) {

    console.log("Here")

    return (
        <div style={{}}>

            <ProSidebarProvider>
                <AppNavBar/>
            </ProSidebarProvider>

            <div style={{flexGrow: 1}}>
                <_Main/>
            </div>
        </div>

    )
}

function _Main() {
    return (
        <div>
            Here
        </div>
    )
}