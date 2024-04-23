// 导入模块
import useLoginStore from './modules/login'
// 集中处理
const useStore = () => ({
    login: useLoginStore(),
})

// 暴露
export default useStore
