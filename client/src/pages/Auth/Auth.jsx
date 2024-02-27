import {Outlet, useNavigate} from "react-router-dom";
import {Card, Tabs} from "antd";
import {useCallback} from "react";

const Auth = () => {

    const navigate = useNavigate();

    const goToRoute = useCallback((key) => {
        navigate(key)
    }, [navigate])

    return (
        <div style={{justifyContent: 'center'}}>
            <Card style={{ maxWidth: '400px', margin: '0 auto'}}>
                <Tabs onTabClick={goToRoute} centered>
                    <Tabs.TabPane tab="Login" key="/auth/login" />
                    <Tabs.TabPane tab={"Register"} key="/auth/register" />
                </Tabs>
                <Outlet/>
            </Card>
        </div>
    )
}

export default Auth