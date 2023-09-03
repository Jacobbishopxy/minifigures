/**
 * @file:	App.tsx
 * @author:	Jacob Xie
 * @date:	2023/09/03 08:14:14 Sunday
 * @brief:
 **/

import {useRoutes, useNavigate} from "react-router-dom"

import {Layout, Menu} from "antd"
import {useLocalStorageState} from "ahooks"
import "./App.css"


const {Header, Content, Footer} = Layout

interface AppProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  routes: any
}

const menuMapping = new Map([
  ["/", {index: 0, name: "Home"}],
  ["kbar", {index: 1, name: "KBar"}],
])

type PageInfo = [number, string, string]

const pageGenerator = (param: AppProps): Array<PageInfo> => {
  return param.routes.map((obj: {path: string}) => {
    const value = menuMapping.get(obj.path)
    const index = value?.index
    const name = value?.name

    return [index, obj.path, name]
  }).sort((a: PageInfo, b: PageInfo) => a[0] - b[0])
}


const menuDefaultSelected = {
  defaultValue: ["0"]
}

function App(param: AppProps) {
  const [defaultMenuSelected, setMenuSelected] = useLocalStorageState<string[]>("menu-default-selected", menuDefaultSelected)

  const menu = pageGenerator(param)
  const navigate = useNavigate()


  return (
    <div className="App">
      <Layout className="layout">
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={defaultMenuSelected}
            items={menu.map(res => ({key: `${res[1]}`, label: res[2]}))}
            onClick={(e) => {
              setMenuSelected(e.keyPath)
              navigate(e.key)
            }}
          />
        </Header>
        <Content className="content">
          {useRoutes(param.routes)}
        </Content>
        <Footer className="footer">jacobbishopxy@gmail.com</Footer>
      </Layout>
    </div>
  )
}

export default App
