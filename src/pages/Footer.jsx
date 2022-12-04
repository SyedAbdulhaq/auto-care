import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
export default function Footer() {
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Layout>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
