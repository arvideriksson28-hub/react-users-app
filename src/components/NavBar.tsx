import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <Link to={"/"}>Hem</Link>
                <Link to={"/users"}>Användare</Link>
            </nav>
        </>
    );
};
