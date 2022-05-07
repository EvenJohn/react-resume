import React, { Component } from 'react'
import { Row, Image} from 'antd'
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, UserOutlined, FolderOutlined, EditOutlined } from '@ant-design/icons'
import {connect} from 'react-redux'
import styles from '../style/less/baseInfo.less'
import styles1 from '../style/less/layout.less'
import commonStyles from '../style/less/common.less'


class BaseInfo extends Component {
    render() {
        const {logo,name,tel,email,location,record,station,avatar} = this.props.baseInfo

        return (
            <Row className={styles.baseInfo_box}>
                <div className={styles.left}>
                    <Image src={logo} height={50} width={100} />
                </div>
                <div className={styles.center}>
                    <Row className={styles.row}>
                        <span>{name}</span>
                    </Row>
                    <Row className={styles.row}>
                        <div><PhoneOutlined className={commonStyles.icon} />{tel}</div>
                        <div><MailOutlined className={commonStyles.icon} />{email}</div>
                        <div><EnvironmentOutlined className={commonStyles.icon} />{location}</div>
                    </Row>
                    <Row className={styles.row}>
                        <div><UserOutlined className={commonStyles.icon} />{record}</div>
                        <div><FolderOutlined className={commonStyles.icon} />{station}</div>
                    </Row>
                </div>
                <div className={styles.right}>
                    <Image src={avatar} height={100} width={75} />
                </div>
                <div className={styles1.info_edit_box}>
                    <EditOutlined onClick={this.props.showDrawer('BaseInfo','基本信息')} />
                </div>
            </Row>
        )
    }
}



// 传递状态
const mapStateToProps = (state) => {
    return {baseInfo:state.baseInfo}
}
// 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {}
}

const BaseInfoContainer = connect(mapStateToProps,mapDispatchToProps)(BaseInfo)

export default BaseInfoContainer