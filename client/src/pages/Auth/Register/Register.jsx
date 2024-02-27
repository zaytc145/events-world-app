import {Button, Form, Input} from "antd";
import {useCallback, useState} from "react";
import loginRule from "../validationRules/loginRule";
import emailRule from "../validationRules/emailRule";
import passwordRule from "../validationRules/passwordRule";
import passwordConfirmRule from "../validationRules/passwordConfirmRule";
import baseApi from "../../../http/appApi";
import {EVENTS} from "../../../routes/routerLinks";
import useAuth from "../../../context/AuthContext/useAuth";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {addUser} = useAuth();
    const navigate = useNavigate();

    const onSubmit = useCallback(async (formData) => {
        setIsLoading(true);
        try {
            const response = await baseApi.post('register', formData);
            addUser(response.data);
            navigate(EVENTS);
        } catch (err) {
        }  finally {
            setIsLoading(false);
        }

    }, [addUser])


    return <Form layout="vertical" onFinish={onSubmit} validateTrigger="onBlur">
        <Form.Item label="login" name="login" rules={[
            {required: true},
            loginRule
        ]}>
            <Input />
        </Form.Item>
        <Form.Item label="email" name="email" rules={[
            {required: true},
            emailRule
        ]}>
            <Input />
        </Form.Item>
        <Form.Item label="password" name="password" rules={[
            {required: true},
            passwordRule
        ]}>
            <Input.Password/>
        </Form.Item>
        <Form.Item label="confirm password" name="passwordConfirm" rules={[
            {required: true},
            passwordConfirmRule
        ]}>
            <Input.Password/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit" style={{width: '100%'}} loading={isLoading}>register</Button>
        </Form.Item>
    </Form>
}

export default Register;