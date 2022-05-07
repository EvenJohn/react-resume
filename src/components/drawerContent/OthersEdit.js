import React from 'react'
import { Input, Typography, Space } from 'antd'
import { connect } from 'react-redux'
import { changeOthersAction } from '../../redux/action'

const { Title } = Typography
const { TextArea } = Input

function OthersEdit(props) {
    let others = props.others.map(item => item.label + '：' + item.des).join('\n')

    const changeOthers = (e) => {
        others = e.target.value
        const message = others.split('\n').map(item => {
            const arr = item.split('：')
            console.log(arr)
            const label = arr[0] ? arr[0] : ''
            const des = arr[1] ? arr[1] : ''
            return {label:label,des:des}
        })
        props.changeOthers(message)
    }

    return (
        <>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Title level={3}>注意：回车代表分点，用'：'分隔标签与描述</Title>
                <TextArea placeholder="请输入文本内容" rows={20} value={others} onChange={changeOthers}></TextArea>
            </Space>
        </>
    )
}

// 传递状态
const mapStateToProps = (state) => {
    return { others: state.others }
}

// 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeOthers: (data) => dispatch(changeOthersAction(data))
    }
}

const OthersEditContainer = connect(mapStateToProps, mapDispatchToProps)(OthersEdit)

export default OthersEditContainer
