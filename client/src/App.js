import './App.css';
import Empty from "./pages/Empty";
import About from "./pages/About/About"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import Events from "./pages/Events/Events";
import DefaultLayout from "./layouts/DefaultLayout";
import Auth from "./pages/Auth/Auth";
import MainRoutes from "./routes/MainRoutes";
import AuthContext from "./context/AuthContext/AuthContext";
import useAuth from "./context/AuthContext/useAuth";
import AuthProvider from "./providers/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <MainRoutes/>
        </AuthProvider>
    );
}

export default App;
