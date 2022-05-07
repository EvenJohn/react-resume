import React from 'react'
import { Input, Typography, Space } from 'antd'
import { connect } from 'react-redux'
import { changeSchoolExperienceAction } from '../../redux/action'

const { Title } = Typography
const { TextArea } = Input

function SchoolExperienceEdit(props) {
    let experiences = props.experiences.map(item => item.des).join('\n')

    const changeExperiences = (e) => {
        experiences = e.target.value
        const message = experiences.split('\n').map(item => {
            return {des:item}
        })
        props.changeSchoolExperience(message)
    }

    return (
        <>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Title level={3}>注意：回车代表分点</Title>
                <TextArea placeholder="请输入文本内容" rows={20} value={experiences} onChange={changeExperiences}></TextArea>
            </Space>
        </>
    )
}

// 传递状态
const mapStateToProps = (state) => {
    return {experiences:state.schoolExperiences}
}

// 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeSchoolExperience:(data) => dispatch(changeSchoolExperienceAction(data))
    }
}

const SchoolExperienceEditContainer = connect(mapStateToProps,mapDispatchToProps)(SchoolExperienceEdit)

export default SchoolExperienceEditContainer
