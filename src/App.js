import { Routes, Route } from "react-router-dom";

import Signin from "./pages/Signin";
import Header from "./components/Header";
// import './App.css';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Signin />} />
            </Routes>

        </>
    );
}

export default App;
