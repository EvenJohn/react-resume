/*
* @module 简历基本信息对象
* @Date: 2022/4/23
* @Author: evenly
*/
const Info = {
    // 基本信息
    baseInfo: {
        logo: '',
        name: '李毅文',
        tel: '13147120841',
        email: '987508679@qq.com',
        location: '武汉',
        record: '2023届硕士',
        station: 'Web前端开发工程师',
        avatar: ''
    },
    // 技术能力
    skills:[{
        txt:'熟练掌握JAVA基础'
    },{
        txt:'熟悉springboot、mybatis、postgresql、redis、linux、nginx，有实际的前后端分离开发项目经验'
    },{
        txt:'了解微服务（SpringCloud技术栈）'
    },{
        txt:'了解JS、HTML5、CSS3等WEB前端开发技术，能使用Vue开发基本页面'
    },{
        txt:'熟悉链表、栈、二叉树等常见数据结构算法'
    },{
        txt:'熟练使用git、maven管理项目和依赖，熟练使用IDEA等开发工具'
    }],
    // 项目经历
    projects: [{
        name: '某省测绘科学技术研究院动态专题制图系统',
        role: '项目负责人',
        des: '受某省测绘科学技术研究院所托，基于某市地理公共服务平台建设需求，使用SpringBoot + mybatis + redis' +
            'postgresql + vue + leaflet + linux，开发在线地图制图平台。',
        responsibilities: [{
            des: '负责整个项目的对接工作，项目整体功能、进度把握'
        },{
            des: '使用springboot + mybatis + postgresql实现实现地图制图数据、地图服务数据、地图图标数据的增删改查，以及' +
                '实现了用户上传表格生成统计图表等功能'
        },{
            des: '使用shiro和jwt实现了用户权限管理'
        },{
            des: '使用redis实现了数据缓存，以及用户验证，用户账号锁定等功能'
        },{
            des: '使用vue +ElementUI + leaflet实现了用户空间（个人信息、访问收藏统计）、地图制作（统计地图、分级地图）、' +
                '地图附图（Echarts图表、文字、图片等）、地图打印等功能'
        },{
            des: '使用以linux为核心的国产化系统 + tomcat + nginx部署项目服务'
        }]
    }],
    // 教育经历
    educations: [{
        school: '武汉大学',
        major: '地图学与地理信息系统',
        record: ' 硕士',
        startTime: '2020年09月',
        endTime: '2023年06月'
    },{
        school: '武汉大学',
        major: '地理信息科学',
        record: '本科',
        startTime: '2016年09月',
        endTime: '2020年06月'
    }],
    // 校园经历
    schoolExperiences:[{
        des: '资源与环境科学学院研究生会心理权益部负责人'
    },{
        des: '研究生学业奖学金一等奖、优秀学生干部、优秀研究生、优秀本科毕业生、社会活动积极分子、优秀团员'
    },{
        des: '2021年研究生数学建模竞赛三等奖'
    }],
    // 其他
    others:[{
        label: '技能',
        des: '熟练使用Word、Excel、Visio、PowerPoint，熟练使用ArcGIS系列软件\n'
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

export default Info