import React from 'react'
import { connect } from 'react-redux'
import { changeInfoAction } from '../redux/action'
import { Image } from 'antd'
import styles from '../style/less/layout.less'
import Info from '../data/info'
import Info2 from '../data/webDeveloper'

function ResumeImage(props) {
    const changeInfo = (data) => {
        return () => {
            props.changeInfo(data)
        }
    }

    return (
        <div className={styles.choose_box}>
            <div className={styles.choose_box_item} onClick={changeInfo(Info)}>
                <Image src="./logo192.png" preview={false}>简历1</Image>
            </div>
            <div className={styles.choose_box_item} onClick={changeInfo(Info2)}>
                <Image src="./logo192.png" preview={false}>简历2</Image>
            </div>
        </div>
    )
}

// 传递状态
const mapStateToProps = (state) => {
    return {}
}

// 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeInfo: (data) => dispatch(changeInfoAction(data))
    }
}

const ResumeImageContainer = connect(mapStateToProps, mapDispatchToProps)(ResumeImage)

export default ResumeImageContainer