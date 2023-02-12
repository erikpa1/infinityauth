import {Form} from "react-bootstrap";
import React from "react";
import {useTranslation} from "react-i18next";


export default function BasicSearchInput({onSearchTyping}) {

    const [t] = useTranslation()

    const [searchText, setSearchText] = React.useState("")

    const typing = (e) => {
        const text = e.target.value.toLowerCase().replace("\\", "/")

        setSearchText(text)
        onSearchTyping(text)
    }


    return (
        <Form.Control
            type={"search"}
            value={searchText}
            onChange={typing}
            placeholder={t("core.placeholder.search") ?? ""}
        />
    )
}