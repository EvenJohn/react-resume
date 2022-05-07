import { createFromIconfontCN } from '@ant-design/icons'

const Iconfont = createFromIconfontCN({
    // 不能加‘./’，否则是相对路径
    scriptUrl: '/font/iconfont.js'
})

export default Iconfont