import styles from './index.less';
import { Link, BrowserRouter } from 'react-router-dom'
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { history } from 'umi'
const { Header, Content, Footer, Sider } = Layout;
const menus = [{
  key: '/qk-toy-react',
  label: 'toy-React'
}, {
  key: '/qk-toy-vue',
  label: 'toy-Vue'
}]


export default function IndexPage() {
  const changeNav = (e) => {
    console.log(18, e)
    history.push(e.key)
  }
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className={styles.main_title}>Demo 项目</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={menus} onClick={changeNav} />
      </Header>

      <h3>
        <Link to="/qk-toy-react">toy-React</Link>
      </h3>
      <h3>
        <Link to="/qk-toy-vue">toy-Vue</Link>
      </h3>
    </Layout>
  );
}
