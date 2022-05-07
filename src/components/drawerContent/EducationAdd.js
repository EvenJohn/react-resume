import React from 'react'
import { nanoid } from 'nanoid'
import { Input, Typography, Space, DatePicker, Button } from 'antd'
import { connect } from 'react-redux'
import { changeEducationAction } from '../../redux/action'
import 'moment/locale/zh-cn';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/zh_CN';

const { Title } = Typography
const { RangePicker } = DatePicker

const { useState } = React

function EducationAdd(props) {
    let [school, setSchool] = useState('')
    let [major, setMajor] = useState('')
    let [record, setRecord] = useState('')
    let [startTime, setStartTime] = useState('2016年9月')
    let [endTime, setEndTime] = useState('2020年6月')
    const dateFormat = 'YYYY年MM月';

    const OnChangeSchool = e => {
        setSchool(e.target.value)
    }

    const OnChangeMajor = e => {
        setMajor(e.target.value)
    }

    const OnChangeRecord = e => {
        setRecord(e.target.value)
    }

    const OnChangeDate = (dates, dateStrings) => {
        setStartTime(dateStrings[0])
        setEndTime(dateStrings[1])
    }

    const addEducation = () => {
        const educations = props.educations
        const obj = {
            id: nanoid(),
            school: school,
            major: major,
            record: record,
            startTime: startTime,
            endTime: endTime
        }
        educations.push(obj)
        // 发送消息到store
        props.changeEducation([...educations])
    }

    return (
        <>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Title level={4}>学校</Title>
                <Input placholder="请输入" value={school} onChange={OnChangeSchool} />
                <Title level={4}>专业</Title>
                <Input placholder="请输入" value={major} onChange={OnChangeMajor} />
                <Title level={4}>学历</Title>
                <Input placholder="请输入" value={record} onChange={OnChangeRecord} />
                <Title level={4}>入学时间 - 毕业时间</Title>
                <RangePicker locale={locale}
                    value={[moment(startTime, dateFormat), moment(endTime, dateFormat)]}
                    format={dateFormat}
                    picker="month"
                    onChange={OnChangeDate} />
                <div style={{marginTop:'30px'}}>
                    <Button onClick={addEducation}>确认添加</Button>
                </div>
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

const EducationAddContainer = connect(mapStateToProps, mapDispatchToProps)(EducationAdd)

export default EducationAddContainer