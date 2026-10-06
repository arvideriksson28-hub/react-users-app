import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import Navbar from "./components/NavBar";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/users" element={<UserPage></UserPage>}></Route>
            </Routes>
        </>
    );
}

export default App;
