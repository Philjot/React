import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

const Navigation = () => {
    // const {count} = useContext(AppContext);
    const {dispatch} = useContext(AppContext)

    const logout = () => {
        const leave = confirm("Are  you sure you want to log out?")

        if(leave){
            dispatch({type: "LOGOUT"})
            localStorage.removeItem("user")
        }
    }
    return ( 
        <header className="flex justify-between px-10 py-7 shadow-md sticky top-0 backdrop-blur-md items-center z-20">
            <div className="flex space-x-3 items-center">
                <img src="/assets/logo.svg" alt='logo' width={75}/>
                <h2 className="text-3xl font-grapey font-bold">Philjot 
                    <span className="text-lime-600"> Institute</span>
                    </h2>
            </div>
            <nav>
                <ul className="flex space-x-5 items-center">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/SignUp">Create Student</NavLink>
                    </li>
                    <li>
                        <NavLink>Academics</NavLink></li>
                    <li>
                        {/* <NavLink>Student: {count}</NavLink></li> */}
                        <button>onClick={logout}</button>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Navigation;