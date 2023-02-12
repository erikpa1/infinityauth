import React from "react";
import {ViewContainer} from "../../shared/containers";

import {useArrayLoadingFetch} from "../../hooks/useLoadingFetch";
import {LicenceLight} from "../../data/licences";
import LicencesApi from "../../api/LicencesApi";
import {SpinnerLoadingSwitch} from "../../components/MiddleCenteredSpinned";
import BasicSearchInput from "../../components/searchInput";

export default function LicencesView() {

    const [isLoading, licences] = useArrayLoadingFetch(LicencesApi.getLicencesLight())

    console.log(licences)

    return (
        <ViewContainer>
            Licences
            <SpinnerLoadingSwitch isLoading={isLoading}>
                <_LicencesView licences={licences}/>
            </SpinnerLoadingSwitch>

        </ViewContainer>
    )
}


function _LicencesView({licences}: { licences: Array<LicenceLight> }) {

    const searchTyping = (value) => {
        console.log(value)
    }

    return (
        <div className={"vstack gap-3"}>
            <BasicSearchInput onSearchTyping={searchTyping}/>

            {
                licences.map((value) => {
                    return (
                        <div key={value.uid}>{value.organization}</div>
                    )
                })
            }
        </div>

    )
}