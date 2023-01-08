import React from 'react';

import './App.css';
import LoginManagerApi from "./api/LoginManagerApi";
import MiddleCenteredSpinned from "./components/MiddleCenteredSpinned";
import LoginPageOverlay from "./pages/login/LoginPageOverlay";


const LoggedContent = React.lazy(() => import("./LoggedContent"))

export default function App() {

    const [isLoading, setIsLoading] = React.useState(true)

    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const onLoginConfirmed = () => {
        setIsLoggedIn(true)
    }

    React.useEffect(() => {

        LoginManagerApi.isLoggedIn().then((isLoggedIn) => {
            setIsLoading(false)
            setIsLoggedIn(isLoggedIn)
        })

    }, [])


    return (
        <div className="App">
            {
                isLoading ? <_LoadingView/> : <>
                    {
                        isLoggedIn ?
                            <_LoggedContent/> :
                            <_NotLoggedContent onLoginConfirmed={onLoginConfirmed}/>
                    }
                </>


            }

        </div>
    );
}

function _LoadingView() {
    return (
        <header className="App-header">
            <img
                style={{
                    width: "450px"
                }}
                src={"/icons/exe_unlock_tomorrow.svg"}/>
            <MiddleCenteredSpinned/>
        </header>
    )
}


interface _NotLoggedContentProps {
    onLoginConfirmed: () => void
}


function _NotLoggedContent({onLoginConfirmed}: _NotLoggedContentProps) {
    return (
        <LoginPageOverlay onLoginConfirmed={onLoginConfirmed}/>
    )
}

function _LoggedContent() {
    return (
        <React.Suspense fallback={<_LoadingView/>}>
            <LoggedContent/>
        </React.Suspense>
    )
}



