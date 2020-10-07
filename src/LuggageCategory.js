import React from "react";
import LuggageItem from "./LuggageItem";
import "./App.css";


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

    const checkedCategory = this.props.checkedCategory;
    let usedThings = [];
    if (checkedCategory) {
      usedThings = checkedCategory.things.map(thing => thing.name);
    }

    return (
      <>
        <div className="categoryName">{category}</div>
        {content.things.map((item, i) => (
          <li key={i}>
            <LuggageItem
              item={item}
              disabled={usedThings.includes(item.name)}
              category={category}
              changeList={this.changeList}
              onAddToCheckedList={this.props.onAddToCheckedList} />
          </li>
        ))}
      </>
    );
  }
}
export default LuggageCategory;
