import React from 'react'
import {Divider, Row} from 'antd'
import Info from "../data/info";
import styles from '../style/less/layout.less'
import Iconfont from "./Iconfont";

class Education extends React.Component {
    render() {
        return (
            <>
                <Row className={styles.divide}>
                    <div className={styles.divide_icon_box}>
                        <Iconfont type="icon-jiaoyu1" theme="filled"/>
                    </div>
                    <div>
                        教育经历
                    </div>
                    <div className={styles.divide_line}>
                    </div>
                </Row>
                {
                    Info.educations.map((item,index) => {
                        return (
                            <div key={index}>
                                <div className={styles.ed_box}>
                                    <div className={styles.ed_box_left}>{item.school}</div>
                                    <div className={styles.ed_box_right}>{item.startTime + ' - ' + item.endTime}</div>
                                </div>
                                <div>
                                    <span>{item.major + ' ' + item.record}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default Education