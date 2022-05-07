import React from 'react'
import { Input, Typography, Space } from 'antd'
import { connect } from 'react-redux'
import { changeSkillAction } from '../../redux/action'

const { Title } = Typography
const { TextArea } = Input

function SkillEdit(props) {
    let skills = props.skills.map(item => item.txt).join('\n')

    const OnchangeSkill = (e) => {
        skills = e.target.value
        const message = skills.split('\n').map(item => {
            return {txt:item}
        })
        props.changeSkill(message)
    }

    return (
        <>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Title level={3}>注意：回车代表分点</Title>
                <TextArea placeholder="请输入文本内容" rows={20} value={skills} onChange={OnchangeSkill}></TextArea>
            </Space>
        </>
    )
}

// 传递状态
const mapStateToProps = (state) => {
    // console.log(state)
    return {skills:state.skills}
}
// 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeSkill:(data) => dispatch(changeSkillAction(data))
    }
}

const SkillEditContainer = connect(mapStateToProps,mapDispatchToProps)(SkillEdit)

export default SkillEditContainer