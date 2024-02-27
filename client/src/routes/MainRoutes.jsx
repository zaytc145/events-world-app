import {BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import About from "../pages/About/About";
import Events from "../pages/Events/Events";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Empty from "../pages/Empty";
import {ABOUT, AUTH, AUTH_LOGIN, AUTH_REGISTER, EVENTS} from "./routerLinks";

const MainRoutes = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<DefaultLayout/>}>
                <Route path={ABOUT} element={<About/>}/>
                <Route path={EVENTS} element={<Events/>}/>
                <Route path={AUTH} element={<Auth/>}>
                    <Route path={AUTH_LOGIN} element={<Login/>}/>
                    <Route path={AUTH_REGISTER} element={<Register/>}/>
                </Route>
                <Route path="*" element={<Empty/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default MainRoutes