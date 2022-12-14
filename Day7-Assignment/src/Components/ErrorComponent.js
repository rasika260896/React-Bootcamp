import {useRouteError} from 'react-router-dom'

const ErrorComponent = () =>{
    //useRouteError is the hook provided by react-router-dom to get the status or msg from the backend if something went wrong
    const errorData = useRouteError();
    return(
        <>
        <h1>Something wrong happened</h1>
        <p>{errorData.statusText || errorData.msg }</p>
        </>
    )
}

export default ErrorComponent;