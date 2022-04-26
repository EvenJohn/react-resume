import React from 'react'
import {Divider, Row} from 'antd'
import Info from "../data/info";
import styles from "../style/less/layout.less";
import Iconfont from "./Iconfont";

class Project extends React.Component {
    render() {
        return (
            <div>
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
                {
                    Info.projects.map((item, index) => {
                        return (
                            <>
                                <Row className={styles.font_border}>{item.name}</Row>
                                <Row>{item.role}</Row>
                                <ul className={styles.mod_ul}>
                                    <li>
                                        <span className={styles.font_border}>项目简介：</span>
                                        {item.des}
                                    </li>
                                </ul>
                                <ul className={styles.mod_ul}>
                                    <li>
                                        <span className={styles.font_border}>工作职责：</span>
                                    </li>
                                </ul>
                                {
                                    item.responsibilities.map((item1,index1) => {
                                        return (
                                            <>
                                                <Row className={styles.pj_res_des}>{(index1 + 1) + ". " + item1.des}</Row>
                                            </>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </div>
        )
    }
}

export default Project