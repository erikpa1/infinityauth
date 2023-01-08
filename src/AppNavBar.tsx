import React from "react"

import * as sb from "react-pro-sidebar"

import {useTranslation} from "react-i18next";

import {useNavigate} from "react-router-dom";

import {Image} from "react-bootstrap";

import {useActiveProject} from "./project/project_zustands/activeProjectZus";

import Switch, {Case} from "react-switch-case/lib/esm";

import SettingsOffcanvas from "./settings/SettingsView";

import "./AppNavBar.css"

import {AnyEditor} from "./components/licencing/LicenceWrappers";

import useCookie from "react-use-cookie";
import DeviceDispatcher from "./devtools/DeviceDispatcher";
import TargetsLibraryApi from "./api/TargetsLibraryApi";


export default function AppNavBar() {

    const [t] = useTranslation()

    const [isCollapsed, setisCollapsed] = useCookie("navbar-collapsed", false as any)

    const activeProjectZus = useActiveProject()

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
                        {"Infinity AR"}
                    </div>

                </sb.Menu>

                <sb.Menu>
                    <MyNavbarItem lang={"core.projects"} link={"/projects"} icon={"/icons/folders.svg"}/>

                    <AnyEditor>
                        <MyNavbarItem
                            lang={"core.editor.deployment"}
                            icon={"/icons/deployment.svg"}
                            link={`/deployment`}
                        />
                    </AnyEditor>

                    {
                        DeviceDispatcher.isDesktop() && <>
                            <MyNavbarItem lang={"core.editor.search"}
                                          link={"/search"}
                                          icon={"/icons/search.svg"}/>


                            <AnyEditor>
                                <MyNavbarItem lang={"core.deployment"}
                                              link={"/deployment"}
                                              icon={"/icons/deployment.svg"}
                                />
                            </AnyEditor>
                        </>
                    }

                    <hr style={{color: "lightgray"}}/>

                    {
                        activeProjectZus.project &&
                        <Switch condition={activeProjectZus.project.type}>
                            <Case value={"360"}><Project360Content/></Case>
                            <Case value={"ar"}><ProjectArContent/></Case>
                        </Switch>
                    }

                </sb.Menu>

                <sb.Menu
                    style={{
                        position: "absolute",
                        bottom: "0px",
                        width: "100%"
                    }}
                >
                    <hr style={{color: "lightgray"}}/>

                    {
                        (activeProjectZus.project && activeProjectZus.project.type !== "ar") && (
                            <ActiveProjectFooter/>
                        )
                    }
                    <_SettingsNavItem/>

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


function ProjectArContent() {

    const project = useActiveProject()


    return (
        <>
            <MyNavbarItem
                lang={"core.editor.targets"}
                icon={"/icons/create.image.svg"}
                link={`/projectar/${project.project.uid}/targets`}
            />

            <MyNavbarItem
                lang={"core.editor.quizeditor"}
                icon={"/icons/create.quiz.svg"}
                link={`/project/${project.project.uid}/assets/quiz`}
            />

            <MyNavbarItem lang={"core.assets"}
                          link={`/project/${project.project.uid}/assets`}
                          icon={"/icons/releases.svg"}
            />

        </>
    )
}

function Project360Content() {

    const project = useActiveProject()

    return (
        <>
            <MyNavbarItem
                lang={"core.editor.area"}
                icon={"/icons/map.svg"}
                link={`/project360/${project.project.uid}/area-editor`}
            />
            <MyNavbarItem
                lang={"core.editor.spot"}
                icon={"/icons/create.mesh.svg"}
                link={`/project360/${project.project.uid}/spot-editor`}
            />
            <MyNavbarItem
                lang={"core.editor.tour"}
                icon={"/icons/preview.svg"}
                link={`/project360/${project.project.uid}/tour`}
            />
        </>
    )
}

function ActiveProjectFooter() {
    return (
        <>
            <MyNavbarItem lang={"core.save"} link={""} icon={"/icons/save.svg"}/>
        </>
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
            title={t(lang)}
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
            {
                show &&
                <SettingsOffcanvas onHide={() => setShow(false)}/>
            }
        </>
    )
}