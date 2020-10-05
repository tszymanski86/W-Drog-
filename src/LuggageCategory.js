import React from "react";
import "./App.css";
import LuggageItem from "./LuggageItem";


const LuggageCategory = (props) => {
  const content = props.data;
  const category = content.category;

  return (
    <>
      <div className="categoryName">{category}</div>
      {content.things.map((item, i) => (
        <li key={i}>
          <LuggageItem data={item} category={category} />
        </li>
      ))}
    </>
  );
}

export default LuggageCategory;
