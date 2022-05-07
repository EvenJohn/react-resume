import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeBaseInfoAction } from '../../redux/action';
import { Divider, Input, Space, Upload, Typography } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

const { Title } = Typography

function BaseInfoEdit(props) {
    let [loading, setLoading] = useState(false)
    const { logo, name, tel, email, location, record, station, avatar } = props.baseInfo

    // 改变状态
    const changeState = (key) => {
        return e => {
            const infoObj = { ...props.baseInfo, [key]: e.target.value }
            // 发送消息到store
            props.changeBaseInfo(infoObj)
        }
    }

    // 改变状态
    const changePic = (key, value) => {
        const infoObj = { ...props.baseInfo, [key]: value }
        // 发送消息到store
        props.changeBaseInfo(infoObj)
    }

    const beforeUpload = (name) => {
        return (file, fileList) => {
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function (e) {
                console.log(this)
                if (this.result) {
                    changePic(name, this.result)
                }
            }
            return false
        }
    }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    )

    return (
        <>
            <Title level={3}>学校图标</Title>
            <div style={{ textAlign: "center" }}>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload('logo')}
                // onChange={this.handleChange}
                >
                    {logo ? <img src={logo} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </div>
            <Divider />
            <Title level={3}>个人图片</Title>
            <div style={{ textAlign: "center" }}>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload('avatar')}
                // onChange={this.handleChange}
                >
                    {avatar ? <img src={avatar} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </div>
            <Divider />
            <Title level={3}>具体描述</Title>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Title level={4}>姓名</Title>
                <Input placholder="请输入" value={name} onChange={changeState('name')} />
                <Title level={4}>电话</Title>
                <Input placholder="请输入" value={tel} onChange={changeState('tel')} />
                <Title level={4}>邮箱</Title>
                <Input placholder="请输入" value={email} onChange={changeState('email')} />
                <Title level={4}>地点</Title>
                <Input placholder="请输入" value={location} onChange={changeState('location')} />
                <Title level={4}>学历</Title>
                <Input placholder="请输入" value={record} onChange={changeState('record')} />
                <Title level={4}>意向职位</Title>
                <Input placholder="请输入" value={station} onChange={changeState('station')} />
            </Space>
        </>
    )
}

// 传递状态
const mapStateToProps = (state) => {
    // console.log(state)
    return { baseInfo: state.baseInfo }
}
// 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeBaseInfo: (data) => dispatch(changeBaseInfoAction(data))
    }
}

const BaseInfoEditContainer = connect(mapStateToProps, mapDispatchToProps)(BaseInfoEdit)

export default BaseInfoEditContainer