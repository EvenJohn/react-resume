/**
 * 生成action对象
 */
import { CHANGE_INFO,CHANGE_BASEINFO,CHANGE_SKILL,CHANGE_SCHOOL_EXPERIENCE, 
    CHANGE_OTHERS, CHANGE_EDUCATION, CHANGE_PROJECT } from "./constants"
    // DELETE_EDUCATION,DELETE_PROJECT,ADD_EDUCATION,ADD_PROJECT 

export const changeInfoAction = data => ({type:CHANGE_INFO,data})

export const changeBaseInfoAction = data => ({type:CHANGE_BASEINFO,data})

// 异步action，指action的值为函数，异步action中一般会调用同步action，不是必需要用
// export const changeBaseInfoAsync = (data,time) => {
//     return (dispatch) => {
//         setTimeout(() => {
//             dispatch(changeBaseInfo(data))
//         },time)
//     }
// }

export const changeSkillAction = data => ({type:CHANGE_SKILL,data})

export const changeProjectAction = data => ({type:CHANGE_PROJECT,data})

export const changeEducationAction = data => ({type:CHANGE_EDUCATION,data})

export const changeSchoolExperienceAction = data => ({type:CHANGE_SCHOOL_EXPERIENCE,data})

export const changeOthersAction = data => ({type:CHANGE_OTHERS,data})

// export const deleteEducationAction = id => ({type:DELETE_EDUCATION,id})

// export const deleteProjectAction = id => ({type:DELETE_PROJECT,id})

// export const addEducationAction = data => ({type:ADD_EDUCATION,data})

// export const addProjectAction = data => ({type:ADD_PROJECT,data})


