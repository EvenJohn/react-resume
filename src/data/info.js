/*
* @module 简历基本信息对象
* @Date: 2022/4/23
* @Author: evenly
*/
const info = {
    // 基本信息
    baseInfo: {
        logo: '',
        name: '',
        tel: '',
        email: '',
        location: '',
        record: '',
        station: '',
        avatar: ''
    },
    // 技术能力
    skills:[{
        txt:''
    }],
    // 项目经历
    projects: [{
        name: '',
        role: '',
        des: '',
        responsibilities: [{
            des: ''
        }]
    }],
    // 教育经历
    educations: [{
        school: '',
        major: '',
        record: ''
    }],
    // 校园经历
    schoolExperiences:[{
        des: ''
    }],
    // 其他
    others:[{
        label: '',
        des: ''
    }]
}

export default info