import React, { Component } from 'react'
import { Row } from 'antd'
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import styles from '../style/less/layout.less';
import ReDivider from './common/ReDivider'
import { connect } from 'react-redux'
import { changeProjectAction } from '../redux/action'

class Project extends Component {
    deleteProject = (id) =>{
        return () =>{
            const projects = this.props.projects.filter(item => item.id !== id)
            this.props.changeProject(projects)
        }
    }

    render() {
        const projects = this.props.projects
        return (
            <div>
                <ReDivider title="项目经历" type="icon-xiangmujingli-04" />
                {
                    projects.map((item, index) => {
                        return (
                            <div key={index} className={styles.section_box}>
                                <Row><strong>{item.name}</strong></Row>
                                <Row>{item.role}</Row>
                                <ul className={styles.mod_ul}>
                                    <li>
                                        <strong>项目简介：</strong>
                                        {item.des}
                                    </li>
                                </ul>
                                <ul className={styles.mod_ul}>
                                    <li>
                                        <strong>工作职责：</strong>
                                    </li>
                                </ul>
                                {
                                    item.responsibilities.map((item1, index1) => {
                                        return (
                                            <Row key={index1}
                                                className={styles.pj_res_des}>{(index1 + 1) + ". " + item1.des}
                                            </Row>
                                        )
                                    })
                                }
                                <div className={styles.content_edit_box}>
                                    <EditOutlined  onClick={this.props.showDrawer('Project','项目经历',index)}/>
                                    <DeleteOutlined onClick={this.deleteProject(item.id)}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

// 传递状态
const mapStateToProps = (state) => {
    return { projects: state.projects }
}

// 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeProject: (data) => dispatch(changeProjectAction(data))
    }
}

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project)

export default ProjectContainer