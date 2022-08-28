// 引入组件
import TdsLink from './src';

// 提供 install 安装方法，供按需引入
TdsLink.install = function (Vue) {
    // 注册组件
    Vue.component(TdsLink.name, TdsLink)
}
// 暴露组件
export default TdsLink