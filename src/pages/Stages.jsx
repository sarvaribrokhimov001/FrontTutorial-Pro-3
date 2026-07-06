import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "../styles/Stages.css";
import stages from "../data/stages";
import ThemeToggle from "../components/ThemeToggle";

const Stages = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");
  const copyCode = (code) => {
    navigator.clipboard.writeText(code);

    Toastify({
      text: "Code copied ✅",
      duration: 2000,
      gravity: "top",
      position: "center",
      style: {
        background: "black",
        color: "lime",
        fontWeight: "bold",
      },
    }).showToast();
  };

  const filteredStages = stages.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="stages__page">
      <h1 className="stages__title"> 📚 FrontTutorial Stages </h1>

      <div className="search__wrapper">
        <input 
          className="app__input" 
          placeholder="Search library..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="stages__container">
        {filteredStages.length > 0 ? (
          filteredStages.map((stage, index) => (
            <div className="stage__card" key={index}>
              <h2 className="stage__card__title"> {stage.title} </h2>
              <div className="stage__steps">
                {stage.steps.map((step, i) => (
                  <div className="stage__step" key={i}>
                    <h3 className="step__title"> {i + 1}. {step.title} </h3>
                    <pre className="step__code"> <code> {step.code} </code> </pre>
                    <button className="copy__btn" onClick={() => copyCode(step.code)}> Copy </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <h2 className="not__found"> Stage is not found ❌ </h2>
        )}
      </div>
    </div>
  );
};
export default Stages;