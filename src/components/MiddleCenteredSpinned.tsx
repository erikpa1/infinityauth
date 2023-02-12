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


interface SpinnerLoadingSwitchProps {
    isLoading: boolean,
    children: any
}

export function SpinnerLoadingSwitch({isLoading, children}: SpinnerLoadingSwitchProps) {

    if (isLoading) {
        return (
            <MiddleCenteredSpinned/>
        )
    } else {
        return children
    }
}