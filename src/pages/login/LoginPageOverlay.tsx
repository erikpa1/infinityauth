import React from "react";
import {Card, Form} from "react-bootstrap";
import LoginManagerApi from "../../api/LoginManagerApi";


interface LoginPageOverlayProps {
    onLoginConfirmed: () => void
}


export default function LoginPageOverlay({onLoginConfirmed}: LoginPageOverlayProps) {

    const nameRef = React.useRef<any>()
    const passwordRef = React.useRef<any>()

    const loginPressed = () => {

        const name = nameRef.current.value
        const password = passwordRef.current.value

        LoginManagerApi.tryLogin(name, password).then((value) => {
            if (value) {
                onLoginConfirmed()
            }
        })
    }


    return (
        <div style={{
            background: "rgb(0, 0, 0)",
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%",
        }}>
            <div style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
            }}>

                <div style={{
                    backgroundColor: "#f4f5f7",
                    padding: "25px",
                    borderRadius: "15px",
                }}>

                    <div className={"vstack gap-3"}>

                        <img
                            style={{
                                width: "450px",
                                height: "50px"
                            }}
                            src={"/icons/exe_short_dark.svg"}/>

                        <div>
                            <div className={"hstack gap-1"}>
                                <label>User name:</label>
                            </div>

                            <Form.Control
                                id={"infinityauth-login"}
                                type={"input"}
                                ref={nameRef}
                            />
                        </div>

                        <div>
                            <div className={"hstack gap-1"}>
                                <label>Password:</label>
                            </div>

                            <Form.Control
                                id={"infinityauth-password"}
                                type={"password"}
                                ref={passwordRef}
                            />
                        </div>

                        <div className={"hstack"} style={{marginLeft: "auto"}}>
                            <button
                                className={"btn btn-primary"}
                                onClick={loginPressed}
                            >Login
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}