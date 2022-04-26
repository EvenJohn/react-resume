import React from 'react'
import {Row, Col, Divider} from 'antd'
import Info from '../data/info'
import Iconfont from './Iconfont'
import styles from '../style/less/layout.less'

class Skill extends React.Component {
    render() {
        return (
            <>
                <Row className={styles.divide}>
                    <div className={styles.divide_icon_box}>
                        <Iconfont type="icon-gongju-tool"  theme="filled"/>
                    </div>
                    <div>
                        教育经历
                    </div>
                    <div className={styles.divide_line}>
                    </div>
                </Row>
                <ul className={styles.mod_ul}>
                    {
                        Info.skills.map((item, index) => {
                            return <li key={index}>{item.txt}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}


export default Skill