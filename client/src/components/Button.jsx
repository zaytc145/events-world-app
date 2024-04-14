import {Button as AButton} from "antd";

const Button = ({children, ...rest}) => {
    return <AButton {...rest}>{children}</AButton>
}

export default Button;
