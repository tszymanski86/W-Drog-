import React from "react";
import "./LuggageItem.css";

class CheckedThing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.data.value,
    };
  }

  setValue = (e) => {
    this.setState({ value: e.target.value });
  }

  add = () => {};

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
        <button onClick={this.add}>guzik</button>
      </div>
    );
  }
}

export default CheckedThing;
