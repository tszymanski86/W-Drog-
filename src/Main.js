import React, { Component } from "react";
import "./Main.css";
import LuggageCategory from "./LuggageCategory";
import LUGGAGE_DATA from "./LuggageData";
import ChecedLuggageCategory from "./ChecedLuggageCategory";
import CHECKED_LUGGAGE from "./CheckedLuggage";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: true,
      checkedList : CHECKED_LUGGAGE
    };
  }

  showLuggageSection = () => {
    this.setState({formVisible: false});
  }

  showAddSection = () => {
    this.setState({formVisible: true});
  }

  changeList = () => {
    this.setState({checkedList : CHECKED_LUGGAGE});
  }

  render() {

    return (
      <main>
        <div id="viewButtons">
          <button id="addSectionButton" onClick={this.showAddSection}>DODAJ DO BAGAŻU</button>
          <button id="luggageSectionButton" onClick={this.showLuggageSection}>MÓJ BAGAŻ</button>
          <div style={{ clear: "both" }}></div>
        </div>
  
        <div id="things" className={`work${this.state.formVisible ? '' : ' hidden'}`}>
          <div className="sectionTitle">
            DODAJ DO BAGAŻ
          </div>
          {LUGGAGE_DATA.map((item, i) => (
            <ul key={i}>
              <LuggageCategory 
              data={item}
              changeList={this.changeList} />
            </ul>
          ))}
        </div>
  
        <div id="luggage" className={`work${this.state.formVisible ? ' hidden' : ''}`}>
          <div className="sectionTitle">
            MÓJ BAGAŻ
          </div>
            {this.state.checkedList.map((item, i) => (
              <ul key={i}>
                <ChecedLuggageCategory data = {item} />
              </ul>
            ))}
        </div>
        <div style={{ clear: "both" }}></div>
      </main>
    );
  }
}

export default Main;