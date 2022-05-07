import React from 'react'
import { Input, Typography, Space } from 'antd'
import { connect } from 'react-redux'
import { changeProjectAction } from '../../redux/action'

const { Title } = Typography
const { TextArea } = Input

function ProjectEdit(props) {
    let { name, role, des, responsibilities } = props.projects[props.index]
    responsibilities = responsibilities.map(item => item.des).join('\n')

    // 改变状态
    const changeState = (key) => {
        return e => {
            const projects = props.projects
            projects[props.index][key] = e.target.value
            // 发送消息到store
            props.changeProject([...projects])
        }
    }

    const OnchangeResponsibilities = (e) => {
        responsibilities = e.target.value
        const message = responsibilities.split('\n').map(item => {
            return {des:item}
        })
        const projects = props.projects
        projects[props.index]['responsibilities'] = message
        props.changeProject([...projects])
    }

    return (
        <>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Title level={4}>项目名称</Title>
                <Input placholder="请输入" value={name} onChange={changeState('name')} />
                <Title level={4}>担任角色</Title>
                <Input placholder="请输入" value={role} onChange={changeState('role')} />
                <Title level={4}>项目简介</Title>
                <TextArea placeholder="请输入文本内容" rows={10} value={des} onChange={changeState('des')}></TextArea>
                <Title level={4}>工作职责(注意：回车代表分点)</Title>
                <TextArea placeholder="请输入文本内容" rows={20} value={responsibilities} onChange={OnchangeResponsibilities}></TextArea>
            </Space>
        </>
    )
}

// 传递状态
const mapStateToProps = (state) => {
    return { projects: state.projects }
}

// 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeProject: (data) => dispatch(changeProjectAction(data))
    }
}

const ProjectEditContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectEdit)

export default ProjectEditContainer