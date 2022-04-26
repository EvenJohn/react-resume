import React from 'react'
import {Row,Col} from 'antd'
import {PhoneOutlined,MailOutlined,EnvironmentOutlined,UserOutlined,FolderOutlined} from '@ant-design/icons'
import Info from '../data/info'
import styles from '../style/less/baseInfo.less'
import commonStyles from '../style/less/common.less'

class BaseInfo extends React.Component{

    render() {
        return (
            <>
                <Row className={styles.row}>
                    <span>{Info.baseInfo.name}</span>
                </Row>
                <Row className={styles.row}>
                    <div><PhoneOutlined className={commonStyles.icon}/>{Info.baseInfo.tel}</div>
                    <div><MailOutlined className={commonStyles.icon}/>{Info.baseInfo.email}</div>
                    <div><EnvironmentOutlined className={commonStyles.icon}/>{Info.baseInfo.location}</div>
                </Row>
                <Row className={styles.row}>
                    <div><UserOutlined className={commonStyles.icon}/>{Info.baseInfo.record}</div>
                    <div><FolderOutlined className={commonStyles.icon}/>{Info.baseInfo.station}</div>
                </Row>
            </>
        )
    }
}

export default BaseInfo