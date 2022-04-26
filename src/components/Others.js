import React from 'react'
import {Divider, Row} from 'antd'
import Info from "../data/info";
import styles from '../style/less/layout.less'
import Iconfont from "./Iconfont";

class Others extends React.Component {
    render() {
        return (
            <>
                <Row className={styles.divide}>
                    <div className={styles.divide_icon_box}>
                        <Iconfont type="icon-caidan" theme="filled"/>
                    </div>
                    <div>
                        教育经历
                    </div>
                    <div className={styles.divide_line}>
                    </div>
                </Row>
                <ul className={styles.mod_ul}>
                    {
                        Info.others.map((item, index) => {
                            return <li key={index}><span className={styles.font_border}>{item.label + '：'}</span>{item.des}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}

export default Others