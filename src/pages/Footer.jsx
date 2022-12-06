import React from "react";
import "../styles/amazon.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
export default function Footer() {
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Layout
      style={{
        background: "red !important",
      }}
    >
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a
              href="https://instagram.com/a.bautomotive?igshid=YmMyMTA2M2Y="
              target="_blank"
              className="nav-link px-4 text-muted"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.facebook.com/profile.php?id=100086369228107"
              target="_blank"
              className="nav-link px-4 text-muted"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4 text-muted" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4 text-muted" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
        Auto Care ©2018 Created by Ahmed Ashraf
      </Footer>
    </Layout>
  );
}
