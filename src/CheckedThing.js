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
  };

  changeList() {
    this.props.changeList();
  }

  removeFromCheckedList = () => {
    const category = this.props.category;
    const name = this.props.data.name;
    this.props.removeFromCheckedList({category, name});
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
        <button onClick={this.removeFromCheckedList}>usuń</button>
      </div>
    );
  }
}

export default CheckedThing;
