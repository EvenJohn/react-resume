/**
 * reducer为一个函数，会接收到两个参数，分别是：之前的状态（preState，action）
 * 需要返回一个newState
 */
import Info from "../data/info"
import { CHANGE_INFO,CHANGE_BASEINFO, CHANGE_SKILL, CHANGE_SCHOOL_EXPERIENCE, 
    CHANGE_OTHERS, CHANGE_EDUCATION, CHANGE_PROJECT } from "./constants"

const initState = Info

function reducer(preState = initState, action) {
    const { type, data } = action

    switch (type) {
        case CHANGE_INFO:
            return data
        case CHANGE_BASEINFO:
            // Container每次调用mapStateToProps，检查函数的结果（是个对象）的每个key的value跟上一次对应的value是否一致
            // （这里也是用===来比较！）如果所有value都一致，不会渲染这个组件；如果有一个value变了，就重新渲染。
            // 对于对象而言，引用的地址不变，则不会渲染，因此此处要创建一个新对象覆盖
            // reducer必须是一个纯函数
            // 1. 不得改写参数数据
            // 2. 不会产生任何副作用，例如网络请求，输入和输出设备
            // 3. 不能调用Date.now() 或Math.random()等方法
            return {...preState,baseInfo:data}
        case CHANGE_SKILL:
            return {...preState,skills:data}
        case CHANGE_PROJECT:
            return {...preState,projects:data}
        case CHANGE_EDUCATION:
            return {...preState,educations:data}
        case CHANGE_SCHOOL_EXPERIENCE:
            return {...preState,schoolExperiences:data}
        case CHANGE_OTHERS:
            return {...preState,others:data}
        default:
            return preState
    }
}

export default reducer
