import React, { Component } from "react";
import CHECKED_LUGGAGE from "./CheckedLuggage";
import CheckedLuggageCategory from "./CheckedLuggageCategory";
import LuggageCategory from "./LuggageCategory";
import LUGGAGE_DATA from "./LuggageData";
import "./Main.css";


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addSectionVisible: true,
      checkedList : CHECKED_LUGGAGE.slice(),
    };
  }

  showLuggageSection = () => {
    this.setState({addSectionVisible: false});
  }

  showAddSection = () => {
    this.setState({addSectionVisible: true});
  }

  handleAddToCheckedList = (data) => {
    this.setState(prevState => {
      const categories = prevState.checkedList.map(category => category.category);
      if (!categories.includes(data.category)) {
        return {
          checkedList: [...prevState.checkedList, {category: data.category, things: [data.thing, ]}],
        }
      }

      return {
        checkedList: prevState.checkedList.map(category => {
          if (data.category === category.category) {
            const checkedThings = category.things.map(thing => thing.name);
            if (!checkedThings.includes(data.thing.name)) {
              category.things = [...category.things, data.thing];
            }
          }
          return category
        }),
      }
    });
  }

  deleteFromCheckedList = (data) => {
    const categoryToFind = data.category;
    const thingToFind = data.name;
    const newState = this.state.checkedList;
    const categoryIndex = newState.findIndex((catItem) => {
      return catItem.category === categoryToFind;
    });

    if (newState[categoryIndex].things.length === 1) {
      newState.splice(categoryIndex, 1);
    } else {
      const thingIndex = newState[categoryIndex].things.findIndex((thing) => {
        return thing.name === thingToFind;
      });
      newState[categoryIndex].things.splice(thingIndex, 1);
    }

    this.setState(
      {checkedList : newState}
    );
  }


  render() {
    return (
      <main>
        <div id="viewButtons">
          <button id="addSectionButton" onClick={this.showAddSection}>DODAJ DO BAGAŻU</button>
          <button id="luggageSectionButton" onClick={this.showLuggageSection}>MÓJ BAGAŻ</button>
          <div style={{ clear: "both" }}></div>
        </div>
        {this.renderAddSection()}
        {this.renderCheckedSection()}
        <div style={{ clear: "both" }}></div>
      </main>
    );
  }

  renderAddSection() {
    return (
      <div id="things" className={`work${this.state.addSectionVisible ? '' : ' hidden'}`}>
        <div className="sectionTitle">DODAJ DO BAGAŻU</div>
        {LUGGAGE_DATA.map((item, i) => (
          <ul key={i}>
            <LuggageCategory
              checkedCategory={this.state.checkedList.filter(category => category.category === item.category)[0] || null}
              data={item}
              onAddToCheckedList={this.handleAddToCheckedList} />
          </ul>
        ))}
      </div>
    )
  }

  renderCheckedSection() {
    return (
      <div id="luggage" className={`work${this.state.addSectionVisible ? ' hidden' : ''}`}>
        <div className="sectionTitle">
          MÓJ BAGAŻ
        </div>
          {this.state.checkedList.map((item, i) => (
            <ul key={i}>
              <CheckedLuggageCategory 
              data={item}
              removeFromCheckedList={this.deleteFromCheckedList} />
            </ul>
          ))}
      </div>
    )
  }
}

export default Main;
