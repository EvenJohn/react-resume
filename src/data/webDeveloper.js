/*
* @module 前端简历
* @Date: 2022/4/23
* @Author: evenly
*/
const Info2 = {
    // 基本信息
    baseInfo: {
        logo: './logo192.png',
        name: 'xxxx',
        tel: 'xxxxxxxxxx',
        email: 'xxxxxxxxxxxxx',
        location: '武汉',
        record: '2023届硕士',
        station: 'Web前端开发工程师',
        avatar: './logo192.png'
    },
    // 技术能力
    skills:[{
        txt:'熟练掌握JS、HTML(5)、CSS(3)等WEB前端开发技术'
    },{
        txt:'熟悉前端地图数据可视化，并有实际的前后端分离开发项目经验'
    },{
        txt:'熟悉Vue框架，了解React框架，了解前端工程化'
    },{
        txt:'熟练使用git管理项目，熟练使用VSCode和WebStorm等开发工具'
    },{
        txt:'熟悉链表、栈、二叉树等常见数据结构算法'
    }],
    // 项目经历
    projects: [{
        id: '1',
        name: 'xxxxxxxxxxxxxxxxxx系统',
        role: '项目负责人',
        des: '受xxxxxxxxxxxxx所托，基于xxxxxxxxxxxxxx建设需求，使用 React + Redux + Ant Design + Less 开发xxxxxxxxxxx平台。',
        responsibilities: [{
            des: '负责整个项目的对接工作，项目整体功能、进度把握'
        },{
            des: '使用 xxxxxxxxxxxxxxxxxxxxxxxxxxx 等功能'
        },{
            des: '使用 xxxxxxxxxxxxxxxxxxxxxxxxxx 等功能'
        },{
            des: '使用 xxxxxxxxxxxxxxxxxxx 等功能'
        },{
            des: '使用 Ant Design + Less  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ）、' +
                'xxxxxxxxxxxxxxxxxxxxxxxxxxxx 等功能'
        },{
            des: '使用 xxxxxxxxxxxxxxxxxxxxxxxx 渲染性能'
        }]
    },{
        id: '3',
        name: 'xxxxxxxxxxxxxxxxxxxxxxx',
        role: '项目负责人',
        des: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        responsibilities: [{
            des: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },{
            des: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },{
            des: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },{
            des: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },{
            des: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        }]
    }],
    // 教育经历
    educations: [{
        id: '1',
        school: 'xx大学',
        major: 'xxxxxxxxxxxxxx',
        record: '硕士',
        startTime: '2020年09月',
        endTime: '2023年06月'
    },{
        id: '2',
        school: 'xx大学',
        major: 'xxxxxxxxxx',
        record: '本科',
        startTime: '2016年09月',
        endTime: '2020年06月'
    }],
    // 校园经历
    schoolExperiences:[{
        des: 'xxxxxxxxxxxxxxxxxxxx'
    },{
        des: 'xxxxxxxxxxxxxxxxxxxx'
    },{
        des: 'xxxxxxxxxxxxxxxxxxxxxxxxx'
    }],
    // 其他
    others:[{
        label: '技能',
        des: '熟练使用Word、Excel、Visio、PowerPoint，xxxxxxxxxxxxxxx'
    },{
        label: '证书/执照',
        des: '计算机二级'
    },{
        label: '语言',
        des: '英语（CET-6）'
    },{
        label: '兴趣爱好',
        des: '跑步、篮球'
    }]
}

export default Info2