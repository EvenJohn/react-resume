import { Spin } from 'antd';
import styles from '../../style/less/common.less'

// 路由未加载完成显示组件
export default () => (
  <div className={styles.loading}>
    <Spin />
  </div>
);
