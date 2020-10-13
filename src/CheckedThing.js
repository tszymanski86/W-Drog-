import React from "react";
import "./LuggageItem.css";
import CHECKED_LUGGAGE from "./CheckedLuggage";

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

  deleteThis = () => {
    const name = this.props.data.name;
    const category = this.props.category;
    const categoryIndex = CHECKED_LUGGAGE.findIndex((el) => {
      return el.category === category;
    });
    if (CHECKED_LUGGAGE[categoryIndex].things.length === 1) {
      CHECKED_LUGGAGE.splice(categoryIndex, 1);
      this.changeList();
    } else {
      const thingIndex = CHECKED_LUGGAGE[categoryIndex].things.findIndex((el) => {
        return el.name === name;
      });
      CHECKED_LUGGAGE[categoryIndex].things.splice(thingIndex, 1);
      this.changeList();
    }
  };

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
