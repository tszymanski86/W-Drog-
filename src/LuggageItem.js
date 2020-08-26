import React from "react";
import "./LuggageItem.css";
import LuggageSelected from "./LuggageSelected";

class LuggageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  add(state) {
    console.log(state);

    LuggageSelected.forEach(function(item){
      if (item.name == state.name) console.log('już mam to');
    });

    LuggageSelected.push(this.state);
    //console.log(LuggageSelected);
  }

  render() {
    return (
      <div className="luggageItem">
        <div className="luggageTitle">{this.state.name}</div>
        {this.state.inputType && (
          <input
            type={this.state.inputType}
            defaultValue={this.state.value}
            onChange={this.setValue}
          />
        )}
        <button onClick={this.add(this.state)}>dodaj</button>
      </div>
    );
  }
}

export default LuggageItem;
