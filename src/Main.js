import React from "react";
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
      const categories = prevState.checkedList.map(item => item.category);
      if (!categories.includes(data.category)) {
        return {
          checkedList: [...prevState.checkedList, {category: data.category, things: [data.thing, ]}],
        }
      }

      return {
        checkedList: prevState.checkedList.map(item => {
          if (data.category === item.category) {
            const checkedThings = item.things.map(thing => thing.name);
            if (!checkedThings.includes(data.thing.name)) {
              item.things = [...item.things, data.thing];
            }
          }
          return item
        }),
      }
    });
  }

  deleteFromCheckedList = (data) => {
    this.setState(prevState => ({
      checkedList: prevState.checkedList.filter(item => {
        if (item.category === data.category) {
          item.things = item.things.filter(thing => thing.name !== data.name);
          if (item.things.length) {
            return item
          } else {
            return null
          }
        } else {
          return item
        }
      })
    }));
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
            <ul key={`${item.category}_${i}`}>
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
