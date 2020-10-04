import React from "react";
import "./App.css";
import LuggageItem from "./LuggageItem";

class LuggageCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  changeList = () => {
  this.props.changeList();
}

  render() {
    const content = this.props.data;
    const category = content.category;

    return (
      <>
        <div className="categoryName">{category}</div>
        {content.things.map((item, i) => (
          <li key={i}>
            <LuggageItem
            data={item}
            category={category}
            changeList={this.changeList} />
          </li>
        ))}
      </>
    );
  }
}
export default LuggageCategory;
