import React from "react";
import CHECKED_LUGGAGE from "./CheckedLuggage";
import "./LuggageItem.css";


class LuggageItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.item.value,
    };
    this.setValue = this.setValue.bind(this);
  }

  changeList(){
    this.props.changeList();
  }

  setValue(e) {
    this.setState({ value: e.target.value });
    console.log(e.target);
    console.log(e.target.value);
    console.log(this.state.value);
  }

  addToCheckedList = () => {
    const data = {
      category: this.props.category,
      thing: Object.assign({}, this.props.item, {value: this.state.value}),
    };
    this.props.onAddToCheckedList(data);

//    const newItem = {
//      category: this.props.category,
//      things: [this.props.item],
//    };
//
//    if (this.state.value !== undefined) newItem.things[0].value = this.state.value;
//
//    const itemIndex = CHECKED_LUGGAGE.findIndex((el) => {
//      return el.category === newItem.category;
//    });
//
//    if (itemIndex !== -1) {
//      console.log("jest kategoria");
//      const thingIndex = CHECKED_LUGGAGE[itemIndex].things.findIndex((el) => {
//        return el.name === newItem.things[0].name;
//      });
//
//      if (thingIndex === -1) {
//        console.log("dodaję przedmiot");
//        CHECKED_LUGGAGE[itemIndex].things.push(newItem.things[0]);
//        this.changeList();
//      } else {
//        console.log("przedmiot już jest");
//        console.log(newItem.things[0].value);
//        console.log(CHECKED_LUGGAGE[itemIndex].things[thingIndex].value);
//        if (
//          newItem.things[0].value !==
//          CHECKED_LUGGAGE[itemIndex].things[thingIndex].value
//        ) {
//          console.log("aktualizuję wartość");//nie działa,
//          CHECKED_LUGGAGE[itemIndex].things[thingIndex].value =
//            Number(newItem.things[0].value);
//          this.changeList(); //czemu nie działa?????????????????????
//        }
//      }
//    } else {
//      console.log("nie ma kategorii, dodaję przedmiot");
//      CHECKED_LUGGAGE.push(newItem);
//      this.changeList();
//    }
//    console.log(CHECKED_LUGGAGE);
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
