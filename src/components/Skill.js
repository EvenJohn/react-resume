import React, { Component } from 'react'
import { EditOutlined} from '@ant-design/icons'
import ReDivider from './common/ReDivider'
import styles from '../style/less/layout.less'
import { connect } from 'react-redux'

class Skill extends Component {
    render() {
        const skills = this.props.skills

        return (
            <>
                <ReDivider title="技术能力" type="icon-gongju-tool" />
                <div className={styles.section_box}>
                    <ul className={styles.mod_ul}>
                        {
                            skills.map((item, index) => {
                                return <li key={index}>{item.txt}</li>
                            })
                        }
                    </ul>
                    <div className={styles.content_edit_box}>
                        <EditOutlined onClick={this.props.showDrawer('Skill','技术能力')}/>
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {skills:state.skills}
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SkillContainer = connect(mapStateToProps,mapDispatchToProps)(Skill)

export default SkillContainer