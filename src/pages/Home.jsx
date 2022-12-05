import { Carousel } from "antd";
import { Card } from "antd";
import Amazon from "../components/amazon";
import products from "../data/data";
import { Link } from "react-router-dom";
import backgroundImg from "../images/OfficialCover.jpeg";

const { Meta } = Card;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};
export default function Home() {
  return (
    <div style={{ backgroundImage: "url(../images/OfficialCover.jpeg)" }}>
      <div className="img-slider">
        <Carousel autoplay>
          {products.slice(0, 3).map((item) => {
            return (
              <Link to={item.path}>
                <div>
                  <img src={item.image} alt="" style={contentStyle} />
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
      <div className="cards">
        {/* <Card
          hoverable
          style={{
            width: 140,
          }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card> */}
        <Amazon />
      </div>
    </div>
  );
}
