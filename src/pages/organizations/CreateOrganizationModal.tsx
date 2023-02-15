import React from "react"
import {InfinityModal} from "../../components/modals";
import {useGlobalPopup} from "../../zustands/globalPopupZus";

import {useTranslation} from "react-i18next";
import {Modal} from "react-bootstrap";

interface CreateOrganizationModalProps {
    onRefresh: () => void
}

export default function CreateOrganizationModal({onRefresh}: CreateOrganizationModalProps) {
    const [t] = useTranslation()

    const popupZus = useGlobalPopup()

    return (
        <InfinityModal
            onHide={popupZus.popElement}
            headerChildren={<Modal.Title>{t("core.create.organization")}</Modal.Title>}
            bodyChildren={
                <>
                    <div className={"vstack gap-3"}>

                    </div>
                </>
            }
            footerChildren={<>
                <button className={"btn btn-primary"}>Save</button>
            </>}


        />

    )
}