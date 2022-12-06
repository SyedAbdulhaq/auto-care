import React, { useContext } from "react";
import { Tabs } from "antd";
import products from "../data/data";
import { useNavigate, Link } from "react-router-dom";
// import Cards from "../components/card";
import Card from "react-bootstrap/Card";
import FeedbackContext from "../context/FeedbackContext";
const TabsDisplay = () => {
  const { ProductDetails } = useContext(FeedbackContext);
  const navigate = useNavigate();
  let itemForDisplay = ["Engine Oil", "Oil Filter", "Brake Pads"];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Engine Oil" key="1">
          {products
            .filter((post) => {
              if ("Engine Oil" === post.title) {
                return post;
              }
            })
            .slice(0, 2)
            .map((post, index) => (
              <Card style={{ width: "10rem", height: "10rem" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "100%", height: "6rem" }}
                  src={post.image}
                  onClick={() => {
                    ProductDetails(post.id);
                    navigate("/product-details");
                  }}
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                </Card.Body>
              </Card>
            ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Oil Filter" key="2">
          {products
            .filter((post) => {
              if ("Oil Filter" === post.title) {
                return post;
              }
            })
            .slice(0, 2)
            .map((post, index) => (
              <Card style={{ width: "10rem", height: "10rem" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "100%", height: "6rem" }}
                  src={post.image}
                  onClick={() => {
                    ProductDetails(post.id);
                    navigate("/product-details");
                  }}
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                </Card.Body>
              </Card>
            ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Brake Pads" key="3">
          {products
            .filter((post) => {
              if ("Brake Pads" === post.title) {
                return post;
              }
            })
            .slice(0, 2)
            .map((post, index) => (
              <Card style={{ width: "10rem", height: "10rem" }}>
                <Card.Img
                  style={{ width: "100%", height: "6rem" }}
                  variant="top"
                  src={post.image}
                  onClick={() => {
                    ProductDetails(post.id);
                    navigate("/product-details");
                  }}
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                </Card.Body>
              </Card>
            ))}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
export default TabsDisplay;
