import React from 'react'
import {Input, Button} from 'antd'

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
            <div>
                <Input type="text" ref={this.txtRef}/>
                <Button onClick={this.handleClick}>123</Button>
                <span>{this.state.count}</span>
            </div>
        )
    }
}

export default Container

