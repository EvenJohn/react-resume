import React, { Component } from 'react'
import { Layout, Button, Drawer } from 'antd'
import { PlusOutlined, LogoutOutlined } from '@ant-design/icons';
import BaseInfoContainer from './BaseInfo'
import SkillContainer from './Skill'
import ProjectContainer from './Project'
import EducationContainer from './Education'
import SchoolExperienceContainer from './SchoolExperience'
import OthersContainer from './Others'
import BaseInfoEditContainer from './drawerContent/BaseInfoEdit'
import SkillEditContainer from './drawerContent/SkillEdit'
import ProjectEditContainer from './drawerContent/ProjectEdit'
import EducationEditContainer from './drawerContent/EducationEdit'
import SchoolExperienceEditContainer from './drawerContent/SchoolExperienceEdit'
import OthersEditContainer from './drawerContent/OthersEdit'
import EducationAddContainer from './drawerContent/EducationAdd'
import ProjectAddContainer from './drawerContent/ProjectAdd'
import ResumeImageContainer from './ResumeImage'
import styles from '../style/less/layout.less'
import { Navigate } from 'react-router-dom'


const { Content } = Layout

class Container extends Component {
    state = {
        visible: false,
        name: undefined,
        title: undefined,
        index: undefined
    }

    showDrawer = (name, title, index) => {
        return () => {
            this.setState({
                visible: true,
                name: name,
                title: title,
                index: index,
            })
        }
    }

    closeDrawer = () => {
        this.setState({
            visible: false
        })
    }

    // 按条件渲染Drawer
    DrawerContent = () => {
        const { name } = this.state
        if (name === 'BaseInfo') {
            return <BaseInfoEditContainer />
        } else if (name === 'Skill') {
            return <SkillEditContainer />
        } else if (name === 'schoolExperience') {
            return <SchoolExperienceEditContainer />
        } else if (name === 'Others') {
            return <OthersEditContainer />
        } else if (name === 'Education') {
            return <EducationEditContainer index={this.state.index} />
        } else if (name === 'Project') {
            return <ProjectEditContainer index={this.state.index} />
        } else if (name === 'EducationAdd') {
            return <EducationAddContainer />
        } else if (name === 'ProjectAdd') {
            return <ProjectAddContainer />
        }
    }

    Logout = () => {
        localStorage.removeItem('token')
        // 强制刷新
        this.setState({})
    }

    render() {
        const token = localStorage.getItem('token')
        if (!token) {
            return (
                <Navigate replace to="/login" />
            )
        } else {
            return (
                <Layout className={styles.layout}>
                    <div className={styles.edit_box}>
                        <Button icon={<PlusOutlined/>} onClick={this.showDrawer('ProjectAdd', '添加项目经历')} >添加项目经历</Button>
                        <Button icon={<PlusOutlined/>} onClick={this.showDrawer('EducationAdd', '添加教育经历')}>添加教育经历</Button>
                        <Button icon={<LogoutOutlined/>} onClick={this.Logout}>退出</Button>
                    </div>
                    <ResumeImageContainer />
                    <Content className={styles.content}>
                        <BaseInfoContainer showDrawer={this.showDrawer} />
                        <SkillContainer showDrawer={this.showDrawer} />
                        <ProjectContainer showDrawer={this.showDrawer} />
                        <EducationContainer showDrawer={this.showDrawer} />
                        <SchoolExperienceContainer showDrawer={this.showDrawer} />
                        <OthersContainer showDrawer={this.showDrawer} />
                    </Content>
                    <Drawer title={this.state.title} placement="left" onClose={this.closeDrawer} visible={this.state.visible}
                        mask={false}>
                        {/* <BaseInfoEditContainer/> */}
                        {this.DrawerContent()}
                    </Drawer>
                </Layout>
            )
        }
    }
}

export default Container

