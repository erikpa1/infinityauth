import {Spinner} from "react-bootstrap";


export default function MiddleCenteredSpinned() {
    return (
        <div style={{
            marginLeft: "auto",
            marginRight: "auto",
        }}>
            <Spinner variant={"danger"}/>
        </div>
    )
}