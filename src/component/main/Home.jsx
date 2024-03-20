import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Banner from "../banner/Banner";

const Home = () => {


    const navigation = useNavigation()
    return (
        <div>
            
<Header></Header>


<Banner></Banner>
{

    navigation.state === 'loading' ? <p>loading...</p> : <Outlet></Outlet>
}


<Footer></Footer>

        </div>
    );
};

export default Home;