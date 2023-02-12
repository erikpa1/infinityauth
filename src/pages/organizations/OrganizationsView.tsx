import React from "react";
import {ViewContainer} from "../../shared/containers";
import {useArrayLoadingFetch} from "../../hooks/useLoadingFetch";
import OrganizationsApi from "../../api/OrganizationsApi";
import {SpinnerLoadingSwitch} from "../../components/MiddleCenteredSpinned";

export default function OrganizationsView() {

    const [isLoading, organizations] = useArrayLoadingFetch(OrganizationsApi.getOrganizationsLight())

    console.log(organizations)


    return (
        <ViewContainer>
            Organizations
            <SpinnerLoadingSwitch isLoading={isLoading}>
                {
                    organizations.map((value) => {
                        return (
                            <div key={value.uid}>{value.name}</div>
                        )
                    })
                }
            </SpinnerLoadingSwitch>


        </ViewContainer>
    )
}