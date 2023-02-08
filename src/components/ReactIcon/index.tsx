import { createFromIconfontCN } from '@ant-design/icons';

/**
 * @description: 字体图标组件 需要进行去色
 * @prop type 图标名称
 */
const ReactIcon = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/c/font_3877432_jg5rwxui8mc.js' // 在 iconfont.cn 上生成
});
export default ReactIcon;
