import React from "react";
import CheckedThing from "./CheckedThing";
import "./App.css";


class CheckedLuggageCategory extends React.Component {
 
  render() {
    const content = this.props.data;
    const category = content.category;

    return (
      <>
        <div className="categoryName">{category}</div>
        {content.things.map(item => (
          <li key={item.name}>
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
