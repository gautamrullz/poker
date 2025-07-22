import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "head" }, [
  React.createElement("h1", { key: 1 }, "Hello I am in love with React"),
  React.createElement("h2", { key: 2 }, "lets start the learning"),
]);

console.log(parent);

//JSX => Babel transepiles it to React.creatElement => ReactElement - JS object =>HTMLElement(render)

//React Element
const heading = (
  <h1 className="love" tabIndex="1">
    Hello I am in love with React
  </h1>
);

//React Component - function returning a react element(JSX)
const HeadingContent = () => {
  return <h1>Hello I am Gautam</h1>;
};

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

root.render(<HeadingContent />);
