import {Image, Typography } from "antd";

const About = () => {
    return <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px"
    }}>
        <Typography.Title level={2}>О сервисе</Typography.Title>
        <Image
            src="https://images.unsplash.com/photo-1707062317978-788b0cc7959d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            preview={false}
            height={500}
        />
        <Typography.Text>
            Данный сервис предназначен для прохождения промежуточной аттестации.
        </Typography.Text>
    </div>
}

export default About;