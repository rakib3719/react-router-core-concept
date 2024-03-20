import { useNavigate, useRouteError } from "react-router-dom";


const Error = () => {


    const error = useRouteError();
    console.log(error);
    const navigate = useNavigate()

    const backHandle = ()=> {
navigate('/')

    }
    return (
    <div className="flex min-h-svh items-center " >

<div className="shadow text-center w-[50%] m-auto p-12 bg-emerald-500 rounded-3xl  " >
           
<i>{error.statusText || error.message}</i>

<h1> {error.data} </h1>

<h1>{error.status && `Page not found ` || ''}</h1>

<button onClick={backHandle} className="btn bg-orange-600 border-0" >Go Back</button>
        </div>

    </div>
    );
};

export default Error;