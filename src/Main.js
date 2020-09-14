import React from "react";
import "./Main.css";
import LuggageCategory from "./LuggageCategory";
import LuggageData from "./LuggageData";

function Main() {
  function showLuggageSection(){
    document.getElementById("things").classList.add("hidden");
    document.getElementById("luggage").classList.remove("hidden");
  }

  function showAddSection(){
    document.getElementById("things").classList.remove("hidden");
    document.getElementById("luggage").classList.add("hidden");
  }

  return (
    <main>
      <div id="viewButtons">
        <button id="addSectionButton" onClick={showAddSection}>DODAJ DO BAGAŻU</button>
        <button id="luggageSectionButton" onClick={showLuggageSection}>MÓJ BAGAŻ</button>
        <div style={{ clear: "both" }}></div>
      </div>

      <div id="things" className="work">
        <div className="sectionTitle">
          DODAJ DO BAGAŻ
        </div>
        {LuggageData.map((item, i) => (
          <ul key={i}>
            <LuggageCategory data={item} />
          </ul>
        ))}
      </div>

      <div id="luggage" className="work hidden">
        <div className="sectionTitle">
          MÓJ BAGAŻ
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
    </main>
  );
}

export default Main;