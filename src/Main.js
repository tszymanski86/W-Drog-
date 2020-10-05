import React, { Component } from "react";
import "./Main.css";
import LuggageCategory from "./LuggageCategory";
import LUGGAGE_DATA from "./LuggageData";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: true,
    };
  }

  showLuggageSection = () => {
    this.setState({formVisible: false});
  }

  showAddSection = () => {
    this.setState({formVisible: true});
  }

  render() {
    return (
      <main>
        <div id="viewButtons">
          <button id="addSectionButton" onClick={this.showAddSection}>DODAJ DO BAGAŻU</button>
          <button id="luggageSectionButton" onClick={this.showLuggageSection}>MÓJ BAGAŻ</button>
          <div style={{ clear: "both" }}></div>
        </div>
  
        <div className={`work${this.state.formVisible ? '' : ' hidden'}`}>
          <div className="sectionTitle">
            DODAJ DO BAGAŻ
          </div>
          {LUGGAGE_DATA.map((item, i) => (
            <ul key={i}>
              <LuggageCategory data={item} />
            </ul>
          ))}
        </div>
  
        <div className={`work${this.state.formVisible ? ' hidden' : ''}`}>
          <div className="sectionTitle">
            MÓJ BAGAŻ
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
      </main>
    );
  }
}

export default Main;