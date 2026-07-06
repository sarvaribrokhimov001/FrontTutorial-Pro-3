import {useState} from "react";
import ThemeToggle from "../components/ThemeToggle";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "../styles/Icons.css";
import fontAwesomeIcons from "../data/fontAwesomeIcons";
import materialIcons from "../data/materialIcons";
import ionIcons from "../data/ionIcons";
import bootstrapIcons from "../data/bootstrapIcons";
import heroIcons from "../data/heroIcons";
import remixIcons from "../data/remixIcons";
import lucideIcons from "../data/lucideIcons";
import boxIcons from "../data/boxIcons";
import phosphorIcons from "../data/phosphorIcons";
import techIcons from "../data/techIcons";

  const icons = [
  ...fontAwesomeIcons,
  ...materialIcons,
  ...ionIcons,
  ...bootstrapIcons,
  ...heroIcons,
  ...boxIcons,
  ...remixIcons,
  ...lucideIcons,
  ...phosphorIcons,
  ...techIcons
];

const Icons = ({darkMode,setDarkMode}) => {
  const [search,setSearch]=useState("");
  const filtered = icons.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  const copy = (text) => {
    navigator.clipboard.writeText(text);

    Toastify({
      text:"Copied ✅",
      duration:2000,
      gravity:"top",
      position:"center"
    }).showToast();
  }

  return (
    <div>
      <h1 className="Icons__title"> Developer Icons </h1>
      <div className="search__wrapper">
        <input 
          className="app__input" 
          placeholder="Search icon..." 
          value={search} 
          onChange={(e)=> setSearch(e.target.value)} 
        />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="install__box">
        <div className="install__left">
          <h3> Install React Icons </h3>
          <code> npm i react-icons </code>
        </div>

        <button className="copy__install" onClick={() => copy("npm i react-icons")}> Copy </button>
      </div>

    <div className="Icons__container">
      {filtered.length > 0 ? (filtered.map((item, index) => (
        <div className="Icons__card" key={index}>
          <div className="Icons__icon"> {item.icon} </div>
            <h2> {item.name} </h2>
            <p> Library: {item.package} </p>
            <code> {item.component} </code>
            <button onClick={() => copy(item.component)}> Copy Component </button>
          </div>
          ))
        ) : (
          <h2 className="icons_notfound"> 🎨 Icon is not found </h2>
        )}
      </div>
    </div>
  )
}
export default Icons;