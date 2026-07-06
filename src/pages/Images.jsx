import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "../styles/Images.css";

const Images = ({darkMode,setDarkMode}) => {
  const [search, setSearch] = useState("");
  
  const images = [
    {name:"Coding Setup", url:"https://images.unsplash.com/photo-1498050108023-c5249f4df085"},
    {name:"Laptop Developer", url:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97"},
    {name:"Dark Code", url:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4"},
    {name:"Office Setup", url:"https://images.unsplash.com/photo-1497366811353-6870744d04b2"},
    {name:"Technology", url:"https://images.unsplash.com/photo-1518770660439-4636190af475"},
    {name: "Frontend Workspace", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"},
    {name: "UI UX Design", url: "https://images.unsplash.com/photo-1559028012-481c04fa702d"},
    {name: "Developer Desk", url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"},
    {name: "JavaScript Code", url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"},
    {name: "React Development", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"},
    {name: "Programming Monitor", url: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"},
    {name: "MacBook Coding", url: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931"},
    {name: "Modern Office", url: "https://images.unsplash.com/photo-1497215842964-222b430dc094"},
    {name: "Software Engineer", url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"},
    {name: "Responsive Design", url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f"},
    {name: "Git Version Control", url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"},
    {name: "Open Source Project", url: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3"},
    {name: "Cloud Computing", url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"},
    {name: "Cyber Security", url: "https://images.unsplash.com/photo-1563986768609-322da13575f3"},
    {name: "Artificial Intelligence", url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"},
    {name: "Database Server", url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d"},
    {name: "Team Collaboration", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"},
    {name: "Startup Office", url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72"},
    {name: "Web Development", url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd"},
    {name: "JavaScript Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {name: "React Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {name: "HTML5 Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {name: "CSS3 Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
    {name: "Node.js Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
    {name: "TypeScript Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
    {name: "Git Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
    {name: "GitHub Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
    {name: "Redux Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"},
    {name: "Bootstrap Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"},
    {name: "Next.js Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
    {name: "Vite Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"},
    {name: "Vue.js Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},
    {name: "Angular Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},
    {name: "Sass Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"},
    {name: "MongoDB Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
    {name: "MySQL Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
    {name: "Firebase Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"},
    {name: "Docker Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},
    {name: "Express Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
    {name: "Figma Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
    {name: "Linux Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"},
    {name: "Python Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
    {name: "Java Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
    {name: "Facebook Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"},
    {name: "Instagram Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"},
    {name: "Telegram Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg"},
    {name: "YouTube Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"},
    {name: "TikTok Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"},
    {name: "Twitter Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"},
    {name: "X Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"},
    {name: "LinkedIn Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"},
    {name: "Discord Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg"},
    {name: "WhatsApp Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"},
    {name: "Snapchat Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/snapchat.svg"},
    {name: "Pinterest Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pinterest.svg"},
    {name: "Reddit Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/reddit.svg"},
    {name: "GitLab Logo", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"},
    {name: "Slack Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg"},
    {name: "Medium Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/medium.svg"},
    {name: "Twitch Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitch.svg"},
    {name: "Spotify Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg"},
    {name: "Dribbble Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dribbble.svg"},
    {name: "Behance Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/behance.svg"},
    {name: "Figma Community Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg"},
    {name: "Stack Overflow Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stackoverflow.svg"},
    {name: "CodePen Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codepen.svg"},
    {name: "Dev.to Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/devdotto.svg"},
    {name: "Netlify Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netlify.svg"},
    {name: "Vercel Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg"},
    {name: "Render Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/render.svg"},
    {name: "Cloudflare Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cloudflare.svg"},
    {name: "Supabase Logo", url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/supabase.svg"},
    {name: "Instagram Logo", url: "https://cdn.simpleicons.org/instagram/E4405F"},
    {name: "Telegram Logo", url: "https://cdn.simpleicons.org/telegram/26A5E4"},
    {name: "YouTube Logo", url: "https://cdn.simpleicons.org/youtube/FF0000"},
    {name: "TikTok Logo", url: "https://cdn.simpleicons.org/tiktok/25F4EE"},
    {name: "Discord Logo", url: "https://cdn.simpleicons.org/discord/5865F2"},
    {name: "WhatsApp Logo", url: "https://cdn.simpleicons.org/whatsapp/25D366"},
    {name: "Snapchat Logo", url: "https://cdn.simpleicons.org/snapchat/FFFC00"},
    {name: "Pinterest Logo", url: "https://cdn.simpleicons.org/pinterest/BD081C"},
    {name: "Reddit Logo", url: "https://cdn.simpleicons.org/reddit/FF4500"},
    {name: "Medium Logo", url: "https://cdn.simpleicons.org/medium/00AB6C"},
    {name: "Twitch Logo", url: "https://cdn.simpleicons.org/twitch/9146FF"},
    {name: "Spotify Logo", url: "https://cdn.simpleicons.org/spotify/1DB954"},
    {name: "Dribbble Logo", url: "https://cdn.simpleicons.org/dribbble/EA4C89"},
    {name: "Behance Logo", url: "https://cdn.simpleicons.org/behance/1769FF"},
    {name: "Figma Community Logo", url: "https://cdn.simpleicons.org/figma/F24E1E"},
    {name: "Stack Overflow Logo", url: "https://cdn.simpleicons.org/stackoverflow/F58025"},
    {name: "Netlify Logo", url: "https://cdn.simpleicons.org/netlify/00C7B7"},
    {name: "Render Logo", url: "https://cdn.simpleicons.org/render/46E3B7"},
    {name: "Cloudflare Logo", url: "https://cdn.simpleicons.org/cloudflare/F38020"},
    {name: "Supabase Logo", url: "https://cdn.simpleicons.org/supabase/3ECF8E"}
  ];

    const filtered = images.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    const copyImage = (url) => {
      navigator.clipboard.writeText(url);

     Toastify({
       text:"Image link copied ✅",
       duration:2000,
       gravity:"top",
       position:"center",
       style:{
        background:"black",
        color:"lime"
       }
     }).showToast();
    }

    return (
      <div>
        <h1 className="Images__title"> Developer Images </h1>
        <div className="search__wrapper">
          <input 
            className="app__input" 
            placeholder="Search image..." 
            value={search} 
            onChange = {(e) => setSearch(e.target.value)} 
          />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className="Images__container">
          {filtered.length > 0 ? (filtered.map((item, index) => (
            <div className="Images__card" key={index}>
              <img src={item.url} alt={item.name} />
              <h2> {item.name} </h2>

              <div className="Images__box">
                <code> {item.url} </code>
                <button onClick={()=> copyImage(item.url)}> Copy </button>
              </div>
            </div>
            ))
          ) : (
            <h2 className="not__found"> 🖼 Image is not found </h2>
          )}
        </div>
      </div>
    )
  }
export default Images;