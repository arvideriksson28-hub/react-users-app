import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/users" element={<UserPage></UserPage>}></Route>
            </Routes>
        </>
    );
}

export default App;
