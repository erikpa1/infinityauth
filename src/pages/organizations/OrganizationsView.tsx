import React from "react";
import {ViewContainer} from "../../shared/containers";
import {useArrayLoadingFetch} from "../../hooks/useLoadingFetch";
import OrganizationsApi from "../../api/OrganizationsApi";
import {SpinnerLoadingSwitch} from "../../components/MiddleCenteredSpinned";
import {Col, Row} from "react-bootstrap";
import {OrganizationLight} from "../../data/organization";
import OrganizationThumbnail from "./OrganizationThumbnail";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";
import {useGlobalPopup} from "../../zustands/globalPopupZus";
import CreateOrganizationModal from "./CreateOrganizationModal";

export default function OrganizationsView() {
    const [isLoading, organizations] = useArrayLoadingFetch(OrganizationsApi.getOrganizationLight())

    return (
        <ViewContainer>
            <SpinnerLoadingSwitch isLoading={isLoading}>
                <_OrganizationsView organizations={organizations}/>
            </SpinnerLoadingSwitch>
        </ViewContainer>
    )
}


function _OrganizationsView({organizations}: { organizations: Array<OrganizationLight> }) {


    const popup = useGlobalPopup()


    const onRefresh = () => {

    }

    const addPressed = () => {
        popup.pushElement(<CreateOrganizationModal onRefresh={onRefresh}/>)
    }


    return (
        <div className={"vstack gap-3"}>

            <Button variant={"contained"} color={"success"} onClick={addPressed}>Add</Button>


            <Row md={4} className={"g-4"}>
                {
                    organizations.map((value) => {
                        return (
                            <Col key={value.uid}>
                                <Box>
                                    <OrganizationThumbnail org={value}/>
                                </Box>

                            </Col>

                        )
                    })
                }

            </Row>
        </div>
    )
}