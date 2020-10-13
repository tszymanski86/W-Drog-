import React from "react";
import "./LuggageItem.css";


class LuggageItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.item.value,
    };
  }
  
  setValue = (e) => {
    this.setState({ value: e.target.value });
    //console.log(e.target);
    //console.log(e.target.value);
    //console.log(this.state.value);
  }

  addToCheckedList = () => {
    const data = {
      category: this.props.category,
      thing: Object.assign({}, this.props.item, {value: this.state.value}),
    };
    this.props.onAddToCheckedList(data);
  };

  render() {
    const { disabled, item } = this.props;
    return (
      <div className="luggageItem">
        <div className="luggageTitle">{item.name}</div>
        {item.inputType && (
          <input
            disabled={disabled}
            type={item.inputType}
            value={this.state.value}
            onChange={this.setValue}
          />
        )}
        <button disabled={disabled} onClick={this.addToCheckedList}>dodaj</button>
      </div>
    );
  }
}

export default LuggageItem;
