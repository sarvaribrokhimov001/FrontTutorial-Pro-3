import { useState } from "react";
import contents from "../data/contents";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/Contents.css";

  const Contents = ({ darkMode, setDarkMode }) => {
    const [search , setSearch] = useState("");
    const filtered = contents.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

    return(
        <div className="contents">
          <h1 className="contents__title"> 🎥 FrontTutorial Contents </h1>
            <div className="search__wrapper">
              <input 
                className="app__input"  
                placeholder="Search content..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
              />
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>

            <div className="contents__container">
                {filtered.length > 0 ?
                  filtered.map(item => (
                    <div className="content__card" key={item.id}>
                      <iframe src={`https://www.youtube.com/embed/${item.youtubeId}`} title={item.title} allowFullScreen />
                      <h2> {item.title} </h2>
                      <p> {item.description} </p>
                    </div>
                  )):
                    <h2 className="not__found contents__not__found"> Content is not found ❌ </h2>
                }
            </div>
        </div>
    )
}
export default Contents;