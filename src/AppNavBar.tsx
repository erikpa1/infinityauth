import React from "react"

import * as sb from "react-pro-sidebar"

import {useTranslation} from "react-i18next";

import {useNavigate} from "react-router-dom";

import {Image} from "react-bootstrap";

import useCookie from "react-use-cookie";

import "./AppNavBar.css"


export default function AppNavBar() {

    const [t] = useTranslation()

    const [isCollapsed, setisCollapsed] = useCookie("navbar-collapsed", false as any)


    const collapse = () => {
        setisCollapsed(!isCollapsed as any)
    }

    return (

        <div style={{
            width: isCollapsed ? "79px" : "200px",
            height: "100vh",
            float: "left"
        }}>
            <sb.Sidebar
                backgroundColor={"rgba(0, 0,0, 0.5)"}
                image={"/textures/appBackgroundBlured.png"}
                width={isCollapsed ? "80px" : "201px"}
                style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    touchAction: "none",
                    position: "fixed",
                    left: "0px",
                    height: "100vh"

                }}
            >
                <sb.Menu>
                    <div
                        style={{
                            padding: '24px',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            color: "white",
                            cursor: "pointer",

                        }} onClick={() => {
                        collapse()
                    }}>
                        {"Infinity AUTH"}
                    </div>

                </sb.Menu>

                <sb.Menu>
                    <MyNavbarItem lang={"core.applications"} link={"/applications"} icon={"/icons/folders.svg"}/>
                    <MyNavbarItem lang={"core.organizations"} link={"/organizations"} icon={"/icons/folders.svg"}/>
                    <MyNavbarItem lang={"core.users"} link={"/organizations"} icon={"/icons/folders.svg"}/>
                    <MyNavbarItem lang={"core.licences"} link={"/licences"} icon={"/icons/folders.svg"}/>

                </sb.Menu>

                <sb.Menu
                    style={{
                        position: "absolute",
                        bottom: "0px",
                        width: "100%"
                    }}
                >
                    <hr style={{color: "lightgray"}}/>

                    {/*<_SettingsNavItem/>*/}

                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',

                        }}
                    >
                        <Image
                            src={isCollapsed ? "/icons/exe_short.svg" : "/icons/exe_unlock_tomorrow.svg"}
                            onClick={() => {
                                window.open("https://exe.sk", "_blank")
                            }}
                            style={{
                                cursor: "pointer",
                            }}/>
                    </div>
                </sb.Menu>
            </sb.Sidebar>
        </div>

    )
}

interface MyNavbarItemProps {
    lang: string
    icon: string
    link?: string
    onClick?: () => void
}

function MyNavbarItem({lang, icon, link, onClick}: MyNavbarItemProps) {

    const navigate = useNavigate()

    const [t] = useTranslation()

    let iconComponent = (
        <Image src={icon} style={{
            margin: "auto",
            width: "20px",
            height: "20px"
        }}/>
    )

    return (
        <sb.MenuItem
            icon={iconComponent}
            onClick={() => {
                if (onClick) {
                    onClick()
                } else if (link) {
                    navigate(link)
                }
            }}
            className={"navbaritem"}
        >
            {t(lang)}

        </sb.MenuItem>
    )
}


function MyNavbarSubItem({children, lang, icon}) {

    const navigate = useNavigate()

    const [t] = useTranslation()

    let iconComponent = (
        <Image src={icon} style={{
            margin: "auto",
            width: "20px",
            height: "20px"
        }}/>
    )

    return (
        <sb.SubMenu
            title={t(lang) as string}
            icon={iconComponent}
            color={"white"}

        >
            <div style={{backgroundColor: "rgb(10, 10, 10)"}}>
                {
                    React.Children.toArray(children)
                }
            </div>
        </sb.SubMenu>
    )
}

function _SettingsNavItem({}) {

    const [show, setShow] = React.useState(false)

    return (
        <>
            <MyNavbarItem
                icon={"/icons/settings.svg"}
                lang={"core.settings"}
                onClick={() => {
                    setShow(true)
                }}
            />
            {/*{*/}
            {/*    show &&*/}
            {/*    <SettingsOffcanvas onHide={() => setShow(false)}/>*/}
            {/*}*/}
        </>
    )
}