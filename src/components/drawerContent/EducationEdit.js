import React from 'react'
import { Input, Typography, Space, DatePicker } from 'antd'
import { connect } from 'react-redux'
import { changeEducationAction } from '../../redux/action'
import 'moment/locale/zh-cn';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/zh_CN';

const { Title } = Typography
const {RangePicker} = DatePicker

function EducationEdit(props) {
    const { school, major, record, startTime, endTime } = props.educations[props.index]
    const dateFormat = 'YYYY年MM月';

    // 改变状态
    const changeState = (key) => {
        return e => {
            const educations = props.educations
            educations[props.index][key] = e.target.value 
            // 发送消息到store
            props.changeEducation([...educations])
        }
    }

    const OnChangeDate = (dates,dateStrings) => {
        const educations = props.educations
        educations[props.index]['startTime'] = dateStrings[0]
        educations[props.index]['endTime'] = dateStrings[1]
        // 发送消息到store
        props.changeEducation([...educations])
    }

    return (
        <>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Title level={4}>学校</Title>
                <Input placholder="请输入" value={school} onChange={changeState('school')} />
                <Title level={4}>专业</Title>
                <Input placholder="请输入" value={major} onChange={changeState('major')} />
                <Title level={4}>学历</Title>
                <Input placholder="请输入" value={record} onChange={changeState('record')} />
                <Title level={4}>入学时间 - 毕业时间</Title>
                <RangePicker locale={locale}
                      value={[moment(startTime, dateFormat), moment(endTime, dateFormat)]}
                      format={dateFormat}
                      picker="month"
                      onChange={OnChangeDate}/>
            </Space>
        </>
    )
}

// 传递状态
const mapStateToProps = (state) => {
    // console.log(state)
    return { educations: state.educations }
}
// 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeEducation: (data) => dispatch(changeEducationAction(data))
    }
}

const EducationEditContainer = connect(mapStateToProps, mapDispatchToProps)(EducationEdit)

export default EducationEditContainer