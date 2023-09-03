/**
 * @file:	App.tsx
 * @author:	Jacob Xie
 * @date:	2023/09/03 08:14:14 Sunday
 * @brief:
 **/

import {useRoutes, useNavigate} from "react-router-dom"

import {Layout, Menu} from "antd"
import {useLocalStorageState} from "ahooks"
import {pageGenerator, AppProps} from "./menu"
import "./App.css"

const {Header, Content, Footer} = Layout

const menuDefaultSelected = {
  defaultValue: ["0"]
}

function App(param: AppProps) {
  const [defaultMenuSelected, setMenuSelected] = useLocalStorageState<string[]>("menu-default-selected", menuDefaultSelected)

  const menu = pageGenerator(param)
  const navigate = useNavigate()


  return (
    <div className="app">
      <Layout className="layout">
        <Header className="header">
          <div className="logo" />
          <Menu
            className="menu"
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
