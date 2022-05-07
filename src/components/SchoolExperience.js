import React, { Component } from 'react'
import { EditOutlined } from '@ant-design/icons'
import styles from '../style/less/layout.less'
import ReDivider from "./common/ReDivider";
import {connect} from 'react-redux'

class SchoolExperience extends Component {
    render() {
        const experiences = this.props.experiences
        // console.log(this.props)

        return (
            <>
                <ReDivider title="校园经历" type="icon-qizhi-" />
                <div className={styles.section_box}>
                    <ul className={styles.mod_ul}>
                        {
                            experiences.map((item, index) => {
                                return <li key={index} className={styles.font_border}>{item.des}</li>
                            })
                        }
                    </ul>
                    <div className={styles.content_edit_box}>
                        <EditOutlined onClick={this.props.showDrawer('schoolExperience','校园经历')}/>
                    </div>
                </div>
            </>
        )
    }
}

// 传递状态
const mapStateToProps = (state) => {
    return {experiences:state.schoolExperiences}
}

// 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SchoolExperienceContainer = connect(mapStateToProps,mapDispatchToProps)(SchoolExperience)

export default SchoolExperienceContainer