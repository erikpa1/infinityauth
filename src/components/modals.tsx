import React from "react";
import {Form, Modal} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useGlobalAppLock} from "../zustands/globalAppLockZus";

type ModalProps = {
    headerChildren?: React.ReactNode,
    bodyChildren?: React.ReactNode,
    footerChildren?: React.ReactNode,
    closeButton?: boolean,
    onHide?: void | any,
    size?: "lg" | "sm" | "xl",
}

export function InfinityModal({
                                         headerChildren,
                                         bodyChildren,
                                         footerChildren,
                                         closeButton,
                                         onHide,
                                         size
                                     }: ModalProps) {


    return (
        <Modal
            show={true}
            onHide={onHide}
            size={size ? "lg" : size}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {
                headerChildren &&
                <Modal.Header closeButton={closeButton} className={"custom-white"}>
                    {
                        headerChildren
                    }
                </Modal.Header>
            }
            {
                bodyChildren &&
                <Modal.Body className={"custom-white"}>
                    {
                        bodyChildren
                    }
                </Modal.Body>
            }
            {
                footerChildren &&
                <Modal.Footer className={"custom-white"} style={{backgroundColor: "#f4f5f7"}}>
                    {
                        footerChildren
                    }
                </Modal.Footer>
            }
        </Modal>
    )
}

interface _ModalConfirmDeleteProps {
    onHide: () => void
    closeButton?: boolean
    header?: string
    text?: string
    onDelete: () => void
}

export function RepeatNameModal({onHide, header, closeButton, onDelete, text}: _ModalConfirmDeleteProps) {

    const [t] = useTranslation()

    const [rewriteText, setRewriteText] = React.useState<string>("")

    const lock = useGlobalAppLock()

    const deletePressed = () => {
        lock.lock()
        onDelete()
        onHide()
        lock.unlock()
    }

    return (
        <InfinityModal
            onHide={onHide}
            closeButton={closeButton}
            headerChildren={<Modal.Title>{t(header ? header : "core.confirm")}</Modal.Title>}
            bodyChildren={<>
                <Form.Text>{t("core.project.repeat")}: "<b>{text}</b>" </Form.Text>
                <Form.Control
                    type={"input"}
                    onChange={(e) => {
                        setRewriteText(e.target.value)
                    }}
                />
            </>}
            footerChildren={<>
                <button
                    className={"btn btn-danger"}
                    disabled={rewriteText !== text}
                    onClick={deletePressed}
                >{t("core.submit")}</button>
            </>}
        />

    )

}