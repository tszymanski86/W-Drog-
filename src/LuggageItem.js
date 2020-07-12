import React from "react";
import "./LuggageItem.css";

class LuggageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.data,
      name: props.data.name,
      inputType: props.data.inputType,
      value: props.data.value,
      category: props.category,
    };

    this.add = this.add.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  setValue(e) {
    this.setState({ value: e.target.value });
  }

  add() {
    console.log("dodaję:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="luggageItem">
        <div className="luggageTitle">{this.state.item.name}</div>
        {this.state.item.inputType && (
          <input
            type={this.state.item.inputType}
            defaultValue={this.state.item.value}
            onChange={this.setValue}
          />
        )}
        <button onClick={this.add}>dodaj</button>
      </div>
    );
  }
}

export default LuggageItem;
