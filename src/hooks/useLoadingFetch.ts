import React from "react";
import axios from "axios";


export function useArrayLoadingFetch<TYPE>(promise: Promise<Array<TYPE>>): [boolean, Array<TYPE>] {

    const [isLoading, setIsLoading] = React.useState(false)
    const [data, setData] = React.useState<Array<TYPE>>(new Array())

    React.useEffect(() => {
        setIsLoading(true)

        promise.then((response) => {
            setData(response)
            setIsLoading(false)
        })


    }, [])


    return [isLoading, data]
}
