import React from 'react'
import {Divider, Row} from 'antd'
import Info from "../data/info";
import styles from '../style/less/layout.less'
import Iconfont from "./Iconfont";

class SchoolExperience extends React.Component {
    render() {
        return (
            <>
                <Row className={styles.divide}>
                    <div className={styles.divide_icon_box}>
                        <Iconfont type="icon-qizhi-" theme="filled"/>
                    </div>
                    <div>
                        校园经历
                    </div>
                    <div className={styles.divide_line}>
                    </div>
                </Row>
                <ul className={styles.mod_ul}>
                    {
                        Info.schoolExperiences.map((item, index) => {
                            return <li key={index} className={styles.font_border}>{item.des}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}

export default SchoolExperience