import img1 from "../images/3.jpeg";
import img2 from "../images/liqui-moly-engine-oils slider22.jpg";
import img3 from "../images/LIQUIMOLYENINOIL.JPEG";
import img4 from "../images/OIL FILTER.jpg";
import img5 from "../images/OIL FILTER.jpg";
import img6 from "../images/oilfilerSlider11.png";
import img7 from "../images/BRAKE PADS.jpg";
import img8 from "../images/oilfilerSlider11.png";
import img9 from "../images/oilfilerSlider11.png";
import img10 from "../images/ACCESSORIES.jpg";
import img11 from "../images/ACCESSORIES.jpg";

const products = [
  {
    title: "Engine Oil",
    ProductName: "Helix Ultra",
    path: "/engine-oil",
    amount: 1,
    details:
      "Why do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n\nWhere does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n\nWhere can I get some?\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    image: img1,
    price: 500,
    id: 1,
  },
  {
    title: "Engine Oil",
    ProductName: "Liqui Moly",
    path: "/engine-oil",
    amount: 1,

    details:
      "Why do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n\nWhere does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n\nWhere can I get some?\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    image: img2,
    price: 500,
    id: 2,
  },
  {
    title: "Engine Oil",
    ProductName: "LM 2 Molygen",
    path: "/engine-oil",
    amount: 1,
    details:
      'import { useState } from "react";\n\nconst Create = () => {\n  const [title, setTitle] = useState(\'\');\n  const [details, setdetails] = useState(\'\');\n  const [author, setAuthor] = useState(\'mario\');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    const blog = { title, details, author };\n\n    fetch(\'http://localhost:8000/blogs/\', {\n      method: \'POST\',\n      headers: { "Content-Type": "application/json" },\n      details: JSON.stringify(blog)\n    }).then(() => {\n      console.log(\'new blog added\');\n    })\n  }\n\n  return (\n    <div className="create">\n      <h2>Add a New Blog</h2>\n      <form onSubmit={handleSubmit}>\n        <label>Blog title:</label>\n        <input \n          type="text" \n          required \n          value={title}\n          onChange={(e) => setTitle(e.target.value)}\n        />\n        <label>Blog details:</label>\n        <textarea\n          required\n          value={details}\n          onChange={(e) => setdetails(e.target.value)}\n        ></textarea>\n        <label>Blog author:</label>\n        <select\n          value={author}\n          onChange={(e) => setAuthor(e.target.value)}\n        >\n          <option value="mario">mario</option>\n          <option value="yoshi">yoshi</option>\n        </select>\n        <button>Add Blog</button>\n      </form>\n    </div>\n  );\n}\n \nexport default Create;',
    image: img3,
    price: 500,
    id: 3,
  },
  {
    title: "Oil Filter",
    ProductName: "unique 70",
    path: "/oil-filter",
    amount: 1,
    details: "hellofdffffffffffffffffffffffffffffffffsaafaf",
    image: img4,
    price: 500,
    id: 4,
  },
  {
    title: "Oil Filter",
    ProductName: "suzuki 150",
    path: "/oil-filter",
    amount: 1,
    details: "hellofdffffffffffffffffffffffffffffffffsaafaf",
    image: img5,
    price: 500,
    id: 5,
  },
  {
    title: "Air Filter",
    ProductName: "honda 110",
    path: "/oil-filter",
    amount: 1,
    details: "hellofdffffffffffffffffffffffffffffffffsaafaf",
    image: img6,
    price: 500,
    id: 6,
  },
  {
    title: "Brake Pads",
    ProductName: "Bike",
    path: "/brake-pads",
    amount: 1,
    details: "hellofdffffffffffffffffffffffffffffffffsaafaf",
    image: img7,
    price: 500,
    id: 7,
  },
  {
    title: "Spark Plug",
    ProductName: "Bike 70",
    path: "/spark-plug",
    amount: 1,
    details: "hellofdffffffffffffffffffffffffffffffffsaafaf",
    image: img8,
    price: 500,
    id: 8,
  },
  {
    title: "Spark Plug",
    ProductName: "Bike 150",
    path: "/spark-plug",
    amount: 1,
    details: "hellofdffffffffffffffffffffffffffffffffsaafaf",
    image: img9,
    price: 50000,
    id: 9,
  },
  {
    title: "Accessories",
    ProductName: "Bike 150 cover",
    path: "/accessories",
    amount: 1,
    details: "hellofdffffffffffffffffffffffffffffffffsaafaf",
    image: img10,
    price: 500,
    id: 10,
  },
  {
    title: "Accessories",
    ProductName: "Bike 70 cover",
    path: "/accessories",
    amount: 1,
    details: "hellofdffffffffffffffffffffffffffffffffsaafaf",
    image: img11,
    price: 500,
    id: 11,
  },
];

export default products;
