import React from 'react'
import { Layout, Menu, Breadcrumb } from "antd"
import {BrowserRouter, Link, Route} from "react-router-dom";
import PageConfig from "../common/PageConfig";
import MenuItem from "antd/es/menu/MenuItem";
import HomePage from "../view/HomePage";
import "./SiteLayout.css"

const { Header, Content, Footer } = Layout;


export default class SiteLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageIndex: "0",
        }
    }

    render() {
        return(
            <div id={"SiteLayout"}>
                <Layout>
                    <Header style={{ position: 'auto', width: '100%' }} id={"my_header"}>
                        <Menu mode="horizontal" selectedKeys={[this.state.currentPageIndex]} id={"my_menu"} style={{
                            fontSize: 18
                        }}>
                            {PageConfig.map((value, index, array) => {
                                return (
                                    <Link to={value.url} class={"navClass"} >
                                        <Menu.Item
                                            key={value.name}
                                            onClick={
                                                () => {
                                                    this.setState({currentPageIndex: value.name})
                                                }
                                            }
                                        >
                                            { value.name }
                                        </Menu.Item>
                                    </Link>
                                )
                            })}
                        </Menu>
                    </Header>
                    <Content className="site-layout" style={{ padding: '0 0px', marginTop: 0 }}>
                        <div className="site-layout-background" style={{ padding: 0, minHeight: 380 }}>
                            {PageConfig.map((value, index, array) => {
                                return <Route path={value.url} exact component={value.component} key={value.name}/>
                            })}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        )
    }
}