import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Row} from "antd";
import styles from "../../style/less/layout.less";
import Iconfont from "./Iconfont";

class ReDivider extends Component{
    static propTypes = {
        title: PropTypes.string,
        type: PropTypes.string
    }

    static defaultProps = {
        title: '其他',
        type: 'icon-caidan'
    }

    render(){
        const {title,type} = this.props

        return (
            <>
                <Row className={styles.divide}>
                    <div className={styles.divide_icon_box}>
                        <Iconfont type={type} theme="filled"/>
                    </div>
                    <div>
                        {title}
                    </div>
                    <div className={styles.divide_line}>
                    </div>
                </Row>
            </>
        )
    }
}

export default ReDivider