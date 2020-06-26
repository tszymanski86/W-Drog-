import React from "react";
import "./App.css";
import LuggageItem from "./LuggageItem"

function LuggageCategory(props) {
  const content = props.data;

  return (
    <div>
      <div className="categoryName">
        {content.category}
      </div>
      {content.things.map((item, i) => (
        <li key={i}>
          <LuggageItem data={item} />
        </li>
        ))}
    </div>
  );
}

export default LuggageCategory;

/*
{LuggageData.map((item, i) => (
  <li key={i}>
    <LuggageCategory data={item} />
  </li>
))}*/