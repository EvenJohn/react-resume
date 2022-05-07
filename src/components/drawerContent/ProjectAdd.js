import React from 'react'
import { nanoid } from 'nanoid'
import { Input, Typography, Space, Button } from 'antd'
import { connect } from 'react-redux'
import { changeProjectAction } from '../../redux/action'

const { Title } = Typography
const { TextArea } = Input

const { useState } = React

function ProjectAdd(props) {
    let [name, setName] = useState('')
    let [role, setRole] = useState('')
    let [des, setDes] = useState('')
    let [responsibilities, setResponsibilities] = useState('')

    const OnChangeName = e => {
        setName(e.target.value)
    }

    const OnChangeRole = e => {
        setRole(e.target.value)
    }

    const OnChangeDes = e => {
        setDes(e.target.value)
    }

    const OnchangeResponsibilities = (e) => {
        setResponsibilities(e.target.value)
    }

    const addProject = () => {
        const projects = props.projects

        const arr = responsibilities.split('\n').map(item => {
            return {des:item}
        })

        const obj = {
            id: nanoid(),
            name: name,
            role: role,
            des: des,
            responsibilities: arr
        }

        projects.push(obj)
        // 发送消息到store
        props.changeProject([...projects])
    }

    return (
        <>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Title level={4}>项目名称</Title>
                <Input placholder="请输入" value={name} onChange={OnChangeName} />
                <Title level={4}>担任角色</Title>
                <Input placholder="请输入" value={role} onChange={OnChangeRole} />
                <Title level={4}>项目简介</Title>
                <TextArea placeholder="请输入文本内容" rows={10} value={des} onChange={OnChangeDes}></TextArea>
                <Title level={4}>工作职责(注意：回车代表分点)</Title>
                <TextArea placeholder="请输入文本内容" rows={20} value={responsibilities} onChange={OnchangeResponsibilities}></TextArea>
                <div style={{marginTop:'30px'}}>
                    <Button onClick={addProject}>确认添加</Button>
                </div>
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

const ProjectAddContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectAdd)

export default ProjectAddContainer