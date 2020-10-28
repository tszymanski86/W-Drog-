import React from "react";
import LuggageItem from "./LuggageItem";
import "./App.css";


const LuggageCategory = (props) => {

  const content = props.data;
  const category = content.category;

  const checkedCategory = props.checkedCategory;
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
            onAddToCheckedList={props.onAddToCheckedList} />
        </li>
      ))}
    </>
  );
}
export default LuggageCategory;
