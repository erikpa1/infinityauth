import React from "react"
import {Card} from "react-bootstrap";
import {OrganizationLight} from "../../data/organization";
import {useNavigate} from "react-router-dom";


interface OrganizationThumbnailProps {
    org: OrganizationLight
}


const IMAGE_STYLE: React.CSSProperties = {
    objectFit: "contain",
    height: "150px",
    marginTop: "5px",

    marginLeft: "auto",
    marginRight: "auto",

}


export default function OrganizationThumbnail({org}: OrganizationThumbnailProps) {

    const navigate = useNavigate()


    return (
        <Card>
            <Card.Body>
                <Card.Img src={org.image_path} style={{
                    ...IMAGE_STYLE,
                    cursor: "pointer"
                }} loading={"lazy"}
                          onClick={() => {
                              navigate(`/organization/${org.uid}`)
                          }}
                />

            </Card.Body>


            <Card.Footer>
                <div style={{
                    textAlign: "center",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                }}>
                    {org.name}
                </div>
            </Card.Footer>
        </Card>
    )
}