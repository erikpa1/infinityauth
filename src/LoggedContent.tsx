import AppNavBar from "./AppNavBar";

export default function LoggedContent({}) {
    return (
        <div style={{}}>

            <AppNavBar/>

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