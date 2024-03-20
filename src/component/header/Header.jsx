import { Link, NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div>


           <nav className="md:flex justify-center gap-36 bg-orange-500 text-white" >


<NavLink to='/'> Home </NavLink>

<NavLink to='/user' > User </NavLink>
<NavLink to='/about' > About </NavLink>
<NavLink  to='/forom' > Forom </NavLink>

           </nav>

        </div>
    );
};

export default Header;