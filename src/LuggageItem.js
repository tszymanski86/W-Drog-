import React from "react";
import "./LuggageItem.css";
import LuggageSelected from "./LuggageSelected";

class LuggageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.data.value,
    };

    this.add = this.add.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  setValue(e) {
    this.setState({ value: e.target.value });
  }

  add() {
    console.log('działam');
  }

  render() {
    const item = this.props.data;
    return (
      <div className="luggageItem">
        <div className="luggageTitle">{item.name}</div>
        {item.inputType && (
          <input
            type={item.inputType}
            value={this.state.value}
            onChange={this.setValue}
          />
        )}
        <button onClick={this.add}>dodaj</button>
      </div>
    );
  }
}

export default LuggageItem;
