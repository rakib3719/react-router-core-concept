
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Useritem = ({users}) => {
    console.log(users);
    const {name, id, email,
    } = users;
const navigate = useNavigate()

    const showDetailsHandle = ()=> {

navigate(`/user/${id}`)


    }
    return (
        <div>
            <div className="card mt-8  bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{email}</p>
    <div className="card-actions justify-end">
      <button onClick={showDetailsHandle} className="btn">Show Details</button>
   
    </div>
  </div>
</div>
        </div>
    );
};

Useritem.propTypes = {
    users: PropTypes.array.isRequired
};

export default Useritem;