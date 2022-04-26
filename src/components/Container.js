import React from 'react'
import {Input, Button,Layout} from 'antd'
import BaseInfo from './BaseInfo'
import Skill from './Skill'
import Project from './Project'
import Education from './Education'
import SchoolExperience from './SchoolExperience'
import Others from './Others'
import layout from '../style/less/layout.less'


const {Content} = Layout

class Container extends React.Component {
    state = {
        count: 1
    }

    constructor() {
        super()
        this.txtRef = React.createRef()
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.txtRef.current.input.value)
    }


    render() {
        return (
            <Layout className={layout.layout}>
                <Content className={layout.content}>
                    <BaseInfo/>
                    <Skill/>
                    <Project/>
                    <Education/>
                    <SchoolExperience/>
                    <Others/>
                </Content>
            </Layout>
        )
        // return (
        //     <div>
        //         <Input type="text" ref={this.txtRef}/>
        //         <Button onClick={this.handleClick}>123</Button>
        //         <span>{this.state.count}</span>
        //     </div>
        // )
    }
}

export default Container

