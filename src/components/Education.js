import React, { Component } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import styles from '../style/less/layout.less'
import ReDivider from "./common/ReDivider";
import { connect } from 'react-redux'
import { changeEducationAction } from '../redux/action'

class Education extends Component {
    deleteEducation = (id) =>{
        return () =>{
            const educations = this.props.educations.filter(item => item.id !== id)
            this.props.changeEducation(educations)
        }
    }

    render() {
        const educations = this.props.educations

        return (
            <>
                <ReDivider title="教育经历" type="icon-jiaoyu1" />
                {
                    educations.map((item, index) => {
                        return (
                            <div key={index} className={styles.section_box}>
                                <div className={styles.ed_box}>
                                    <div className={styles.ed_box_left}><strong>{item.school}</strong></div>
                                    <div className={styles.ed_box_right}>{item.startTime + ' - ' + item.endTime}</div>
                                </div>
                                <div>
                                    <span>{item.major + ' ' + item.record}</span>
                                </div>
                                <div className={styles.content_edit_box}>
                                    <EditOutlined onClick={this.props.showDrawer('Education','教育经历',index)}/>
                                    <DeleteOutlined onClick={this.deleteEducation(item.id)}/>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

// 传递状态
const mapStateToProps = (state) => {
    // console.log(state)
    return { educations: state.educations }
}
// 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeEducation: (data) => dispatch(changeEducationAction(data))
    }
}

const EducationContainer = connect(mapStateToProps, mapDispatchToProps)(Education)

export default EducationContainer