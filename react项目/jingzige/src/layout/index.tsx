import styles from './index.less'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Button } from 'antd'
export default function IndexPage(props: any) {
  const toHome = () => {
    window.location.href = '/home'
  }
  return (
    <div>
      <Button onClick={() => toHome()}>首页</Button>
      <div>{props.children}</div>
    </div>
  )
}