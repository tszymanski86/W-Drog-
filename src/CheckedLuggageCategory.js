import React from "react";
import "./App.css";
import CheckedThing from "./CheckedThing";


class CheckedLuggageCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  changeList = () => {
    this.props.changeList();
  }
  
  render() {
    const category = this.props.data.category;
    const things = this.props.data.things;
    return (
      <>
        <div className="categoryName">{category}</div>
        {things.map((item, i) => (
        <li key={i}>
          <CheckedThing
            data={item}
             category={category}
             changeList={this.changeList} />
        </li>
        ))}
      </>
    );
  }
}

export default CheckedLuggageCategory;
