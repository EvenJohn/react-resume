import React from 'react'
import { EditOutlined } from '@ant-design/icons'
import styles from '../style/less/layout.less'
import ReDivider from "./common/ReDivider";
import { connect } from 'react-redux'

// 函数组件没有this
function Others(props) {
    let others = props.others
    // 相当于ComponentDidMount、ComponentDidUpdate、ComponentWillUnMount三个钩子
    // React.useEffect(() => {
    //     setOthers()
    // },[])

    return (
        <div>
            <ReDivider title="其他" type="icon-caidan" />
            <div className={styles.section_box}>
                <ul className={styles.mod_ul}>
                    {
                        others.map((item, index) => {
                            return <li key={index}><strong className={styles.font_border}>{item.label + '：'}</strong>{item.des}</li>
                        })
                    }
                </ul>
                <div className={styles.content_edit_box}>
                    <EditOutlined onClick={props.showDrawer('Others','其他')}/>
                </div>
            </div>
        </div>
    )
}

// 传递状态
const mapStateToProps = (state) => {
    return {others:state.others}
}

// 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const OthersContainer = connect(mapStateToProps,mapDispatchToProps)(Others)

export default OthersContainer


