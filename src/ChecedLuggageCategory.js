import React from "react";
import "./App.css";
import CheckedThing from "./CheckedThing";


class ChecedLuggageCategory extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const category = this.props.data.category;
    const things = this.props.data.things;
    return (
      <>
        <div className="categoryName">{category}</div>
        {things.map((item, i) => (
        <li key={i}>
          <CheckedThing data={item} category={category} />
        </li>
        ))}
      </>
    );
  }
}

export default ChecedLuggageCategory;