import {Link, Outlet, useNavigate} from "react-router-dom";
import {Layout, Menu} from 'antd';
import useAuth from "../context/AuthContext/useAuth";
import {useCallback} from "react";

const {Header, Content} = Layout;

const DefaultLayout = () => {
    const {user, removeUser} = useAuth();
    const navigate = useNavigate();

    const logout = useCallback(() => {
        removeUser();
        navigate("/auth/login");
    }, [user, navigate]);

    return (
        <Layout style={{height: '100%'}}>
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                >
                    <Menu.Item key="1">
                        <Link to="/">О сервисе</Link>
                    </Menu.Item>
                    {user && <Menu.Item key="2">
                        <Link to="/events">События</Link>
                    </Menu.Item>}
                    {!user && <Menu.Item key="3">
                        <Link to="/auth/login">Войти</Link>
                    </Menu.Item>}
                    {user && <Menu.Item key="4">
                        <Link to={""} onClick={logout} className={"logout-btn"}>Выйти</Link>
                    </Menu.Item>}
                </Menu>
            </Header>
            <Content style={{flex: 1, padding: '24px 48px', flexDirection: 'column', display: 'flex', overflow: "auto"}}>
                <Outlet/>
            </Content>
        </Layout>
    )
}

export default DefaultLayout;
