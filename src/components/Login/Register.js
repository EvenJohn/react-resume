import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Form, Input, Button, Checkbox, message, Typography } from 'antd'
// import qs from 'querystring'
import axios from 'axios'
import styles from '../../style/less/login.less'

const { Title } = Typography

export default function Register() {
    const [username, setUsername] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    // const [username,setUsername] = useState(undefined)
    const navigate = useNavigate()

    const onLogin = () => {
        navigate('/login')
    }

    const onRegister = () => {
        // 跳转到注册页面
        // navigate('/register')
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <Layout className={styles.layout}>
            <div className={styles.login}>
                <div className={styles.title}>
                    <Title level={3}>注册</Title>
                </div>
                <div className={styles.form}>
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        initialValues={{ remember: true }}
                        // onFinish={this.onFinish}
                        // onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="用户名"
                            name="用户名"
                        // rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder='请输入用户名' value={username} onChange={onChangeUsername} />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="密码"
                        // rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder='请输入密码' value={password} autoComplete='off'
                                onChange={onChangePassword} />
                        </Form.Item>

                        {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
    <Checkbox>Remember me</Checkbox>
</Form.Item> */}

                        <Form.Item wrapperCol={{ span: 24 }}>
                            <div className={styles.text_center}>
                                <Button type="primary" htmlType="submit" onClick={onLogin}>
                                    {/* <Link to='/main'>登录</Link> */}
                                    登录
                                </Button>
                                <Button onClick={onRegister}>
                                    {/* <Link to='/main'>登录</Link> */}
                                    注册
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Layout>
    )
}
