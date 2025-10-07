import "./navbar.css"
import { signInBtn as SignInBtn } from "./signInButton"
const Navbar = () => {
    return (
        <>
        <div className="navbarDiv">
            <div className="logoDiv">
                <h2 className="logo">Faizan</h2>
            </div>
            <div className="navigatonDiv">
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact us</li>
                    <SignInBtn />
                </ul>
            </div>
            
        </div>
        </>
    )
}


export default Navbar