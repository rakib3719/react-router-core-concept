import { useLoaderData } from "react-router-dom";
import Useritem from "./Useritem";


const User = () => {


    const users = useLoaderData()
    return (
        <div>
            <h1 className="text-3xl font-bold text-center" >Total user: {users.length}</h1>
            
        <div className="grid md: grid-cols-3 gap-8" >

        {

users.map(users => <Useritem key={users.id} users={users}> </Useritem>)

            }

        </div>
        </div>
    );
};

export default User;