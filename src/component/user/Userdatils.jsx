import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const Userdatils = () => {


    const userDatials = useLoaderData();
    const {name, phone, website
    } = userDatials;
    const navigate = useNavigate()
const backHandle = ()=>{
navigate(-1)

}

const {id} = useParams()
    return (
        <div className="flex justify-center mt-8">
 
    <div className="card w-96  bg-base-100 shadow-xl">
  <div className="card-body">
    <h1 className="card-title" > ID NO : {id} </h1>
    <h2 className="card-title">{name}</h2>
    <h2 className="text-lg font-semibold" >Phone: {phone}</h2>
   <h2 className="text-lg font-semibold" >Phone: {phone}</h2>
   <h2 className="text-lg font-semibold" >website: {website
} {phone}</h2>

    <div className="card-actions ">
      <button onClick={backHandle} className="btn w-full bg-orange-700 text-white mt-4">Go Back</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Userdatils;