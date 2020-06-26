import React from "react";
import "./LuggageItem.css";

function LuggageItem(props) {
  const item = props.data;

  function dzialaj(){
    console.log('działam');
  }

  return (
    <div className="luggageItem">
      <div className="luggageTitle">
        {item.name}
      </div>
      {item.inputType && <input type={item.inputType} defaultValue={item.value}/>}
    </div>
  );
}

export default LuggageItem;
