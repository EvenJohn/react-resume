import React from 'react'
import {Divider, Row} from 'antd'
import styles from "../style/less/layout.less";
import Iconfont from "./Iconfont";

class Project extends React.Component {
    render() {
        return (
            <>
                <Row className={styles.divide}>
                    <div className={styles.divide_icon_box}>
                        <Iconfont type="icon-xiangmujingli-04" theme="filled"/>
                    </div>
                    <div>
                        项目经历
                    </div>
                    <div className={styles.divide_line}>
                    </div>
                </Row>
            </>
        )
    }
}

export default Project