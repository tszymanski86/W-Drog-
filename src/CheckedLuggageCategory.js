import React from "react";
import CheckedThing from "./CheckedThing";
import "./App.css";


class CheckedLuggageCategory extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const content = this.props.data;
    const category = content.category;

    return (
      <>
        <div className="categoryName">{category}</div>
        {content.things.map((item, i) => (
          <li key={`${item.name}_${i}`}>
            <CheckedThing
              data={item}
              category={category}
              removeFromCheckedList={this.props.removeFromCheckedList} />
          </li>
        ))}
      </>
    );
  }
}

export default CheckedLuggageCategory;
