import React from "react";
import {ViewContainer} from "../../shared/containers";
import ApplicationsApi from "../../api/ApplicationsApi";
import {SpinnerLoadingSwitch} from "../../components/MiddleCenteredSpinned";
import {useArrayLoadingFetch} from "../../hooks/useLoadingFetch";
import {Application, ApplicationLight} from "../../data/application";
import BasicSearchInput from "../../components/searchInput";


export default function ApplicationsView() {

    const [isLoading, applications] = useArrayLoadingFetch(ApplicationsApi.getApplicationsLight())

    return (
        <ViewContainer>
            Applications
            <SpinnerLoadingSwitch isLoading={isLoading}>
                <_ApplicationsView applications={applications}/>
            </SpinnerLoadingSwitch>
        </ViewContainer>
    )
}

function _ApplicationsView({applications}: { applications: Array<ApplicationLight> }) {

    const searchTyping = (e) => {

    }


    return (
        <div className={"vstack gap-3"}>
            <BasicSearchInput onSearchTyping={searchTyping}/>
            {
                applications.map((value) => {
                    return (
                        <div key={value.uid}>{value.name}</div>
                    )
                })
            }
        </div>

    )
}