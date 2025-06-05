import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<Welcome />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
