import {Alert, Button, Form, Input} from "antd";
import {useCallback, useState} from "react";
import useAuth from "../../../context/AuthContext/useAuth";
import {EVENTS} from "../../../routes/routerLinks";
import {useNavigate} from "react-router-dom";
import baseApi from "../../../http/appApi";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const {addUser} = useAuth()
    const navigate = useNavigate();

    const onSubmit = useCallback(async (formData) => {
        setIsLoading(true);
        try {
            const response = await baseApi.post('login', formData);
            addUser(response.data);
            navigate(EVENTS);
        } catch (err) {
            setError(err.response.data);
        }  finally {
            setIsLoading(false);
        }

    }, [addUser])


    return <Form layout="vertical" onFinish={onSubmit} validateTrigger="onBlur">
        {error && <Alert message={error} type="error" showIcon style={{marginBottom: 10}}/>}

        <Form.Item label="login" name="login" rules={[
            {required: true}
        ]}>
            <Input/>
        </Form.Item>
        <Form.Item label="password" name="password" rules={[
            {required: true}
        ]}>
            <Input.Password/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit" style={{width: '100%'}} loading={isLoading}>login</Button>
        </Form.Item>
    </Form>
}

export default Login;