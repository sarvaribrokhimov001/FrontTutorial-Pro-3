const stages = [
  {
    title: "Tailwind CSS",
    search: "tailwindcss vite css",
    steps: [
      {
        title: "Install",
        code: "npm install tailwindcss @tailwindcss/vite"
      },
      {
        title: "vite.config.js",
        code: `import { defineConfig } from "vite";
  import tailwindcss from "@tailwindcss/vite";
  export default defineConfig({
    plugins:[
      tailwindcss()
    ]
  });`
      },
      {
        title: "index.css",
        code: `@import "tailwindcss";`
      },
      {
        title: "Run",
        code: "npm run dev"
      }
    ]
  },


  {
    title: "React Router DOM",
    search: "router navigation react route",
    steps: [
      { title: "Install", code: "npm install react-router-dom" },
      { title: "Main Setup", 
        code: `import { BrowserRouter } from "react-router-dom";
    <BrowserRouter>
      <App />
    </BrowserRouter>`
      },
      { title: "Routes Example", 
        code: `import { Routes, Route } from "react-router-dom";
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>`
      }
    ]
  },


  {
    title: "Toastify JS",
    search: "toast notification js react",
    steps: [
      { title: "Install", code: "npm install toastify-js" },
      { title: "Import",
        code: `import Toastify from "toastify-js";
  import "toastify-js/src/toastify.css";`
      },
      { title: "Usage",
        code: `Toastify({
    text: "Success!",
    duration: 2000,
    gravity: "top",
    position: "center",
    style: {
      background: "black",
      color: "lime"
    }
  }).showToast();`
      }
    ]
  },


  {
    title: "React Toastify",
    search: "react toastify notification react",
    steps: [
      { title: "Install", code: "npm install react-toastify" },
      { title: "Setup (App.jsx)",
        code: `import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
    function App() {
      return (
        <>
          <ToastContainer />
        </>
      );
    }
    export default App;`
      },
      { title: "Usage",
        code: `import { toast } from "react-toastify";
    toast.success("Success message!");
    toast.error("Error message!");`
      }
    ]
  },


  {
    title: "React Hot Toast",
    search: "react hot toast notification",
    steps: [
      { title: "Install", code: "npm install react-hot-toast" },
      { title: "Setup", 
        code: `import { Toaster, toast } from "react-hot-toast";
    <Toaster />`
      },
      { title: "Usage", 
        code: `toast.success("Success message");
  toast.error("Error message");`
      }
    ]
  },


  {
    title: "Axios API Requests",
    search: "axios fetch api react",
    steps: [
      { title: "Install", code: "npm install axios" },
      { title: "GET Request", 
        code: `import axios from "axios";
  axios.get("https://api.example.com")
  .then(res => console.log(res.data));`
      },
      { title: "POST Request", 
        code: `axios.post("/api/data", {
    name: "John"
  });`
      }
    ]
  },


  {
    title: "React Icons",
    search: "react icons ai md fi",
    steps: [
      { title: "Install", code: "npm install react-icons" },
      { title: "Usage", 
        code: `import { AiFillHome } from "react-icons/ai";
    <AiFillHome />`
      }
    ]
  },


  {
    title: "Framer Motion",
    search: "animation react framer motion",
    steps: [
      { title: "Install", code: "npm install framer-motion" },
      { title: "Basic Animation", 
        code: `import { motion } from "framer-motion";
    <motion.div animate={{ x: 100 }} />`
      }
    ]
  },


  {
    title: "Redux Toolkit",
    search: "redux state management toolkit",
    steps: [
      { title: "Install", code: "npm install @reduxjs/toolkit react-redux" },
      { title: "Store Setup", 
        code: `import { configureStore } from "@reduxjs/toolkit";
    export const store = configureStore({
      reducer: {}
    });`
      }
    ]
  },


  {
    title: "Firebase Setup",
    search: "firebase auth database",
    steps: [
      { title: "Install", code: "npm install firebase" },
      { title: "Init", 
        code: `import { initializeApp } from "firebase/app";
    const app = initializeApp({
      apiKey: "xxx",
      authDomain: "xxx"
    });`
      }
    ]
  },


  {
    title: "Vite Project Setup",
    search: "react vite setup project create react vite",
    steps: [
      { title: "Create Project", code: "npm create vite@latest my-app" },
      { title: "Select Options", code: `✔ Framework: React 
  ✔ Variant: JavaScript`},
      { title: "Install Dependencies", code: "cd my-app && npm install" },
      { title: "Run Project", code: "npm run dev" }
    ]
  },


  {
    title: "React Project Setup",
    search: "create react app setup npx create-react-app",
    steps: [
      { title: "Create Project", code: "npx create-react-app my-app" },
      { title: "Go to Folder", code: "cd my-app" },
      { title: "Start Project", code: "npm start" }
    ]
  },


  {
    title: "Next.js Project Setup",
    search: "nextjs setup create next app app router",
    steps: [
      { title: "Create Project", code: "npx create-next-app@latest my-app" },
      { title: "Setup Options", 
        code: `✔ TypeScript: Yes/No
  ✔ ESLint: Yes
  ✔ Tailwind CSS: Optional
  ✔ App Router: Yes`
      },
      { title: "Go to Folder", code: "cd my-app" },
      { title: "Run Dev Server", code: "npm run dev" }
    ]
  },


  {
    title: "Next.js Page Example",
    search: "nextjs page example app router component",
    steps: [
      { title: "Create Page",
        code: `export default function Home() {
    return <h1> Hello Next.js 🚀 </h1>;
  }`
      }
    ]
  },


  {
    title: "Next.js API Route",
    search: "nextjs api route example app router",
    steps: [
      { title: "Create API Route",
        code: `export async function GET() {
    return Response.json({message: "Hello API"});
  }`
      }
    ]
  },


  {
    title: "Git Basic Commands",
    search: "git commands push commit clone",
    steps: [
      { title: "Init repo", code: "git init" },
      { title: "Add files", code: "git add ." },
      { title: "Commit", code: "git commit -m 'init'" },
      { title: "Push", code: "git push origin main" }
    ]
  },


  {
    title: "TypeScript Setup",
    search: "typescript react setup tsconfig",
    steps: [
      { title: "Install", code: "npm install typescript --save-dev" },
      { title: "Init", code: "npx tsc --init" },
      { title: "Example",
        code: `let name: string = "Developer";
  let age: number = 20;`
      }
    ]
  },


  {
    title: "React Query (TanStack)",
    search: "react query api cache tanstack",
    steps: [
      { title: "Install", code: "npm install @tanstack/react-query" },
      { title: "Setup",
        code: `import { QueryClient, QueryClientProvider } 
      from "@tanstack/react-query";
    const client = new QueryClient();
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>`
      },
      { title: "Fetch Example",
        code: `import { useQuery } from "@tanstack/react-query";
    const { data } = useQuery({
      queryKey: ["users"],
      queryFn: () => fetch("/api").then(res => res.json())
    });`
      }
    ]
  },

  
  {
    title: "React Hook Form",
    search: "form validation react hook form",
    steps: [
      { title: "Install", code: "npm install react-hook-form" },
      { title: "Basic Form",
        code: `import { useForm } from "react-hook-form";
    const { register, handleSubmit } = useForm();
      function onSubmit(data) {
        console.log(data);
      }`
      },
      { title: "Input Example", code: `<input {...register("name")} />` }
    ]
  },


  {
    title: "Zod Validation",
    search: "zod schema validation react",
    steps: [
      { title: "Install", code: "npm install zod" },
      { title: "Schema",
        code: `import { z } from "zod";
    const schema = z.object({
        name: z.string().min(3),
        age: z.number().min(18)
    });`
      }
    ]
  },


  {
    title: "Socket.io (Realtime)",
    search: "socket io chat realtime react",
    steps: [
      { title: "Install", code: "npm install socket.io-client" },
      { title: "Connect",
        code: `import { io } from "socket.io-client";
    const socket = io("http://localhost:5000");`
      },
      { title: "Send message", code: `socket.emit("message", "Hello")` }
    ]
  },


  {
    title: "LocalStorage",
    search: "browser storage react localstorage",
    steps: [
      { title: "Save Data", code: `localStorage.setItem("user", "John");` },
      { title: "Get Data", code: `const user = localStorage.getItem("user");` },
      { title: "Remove Data", code: `localStorage.removeItem("user");` }
    ]
  },


  {
    title: "Deploy (Vercel)",
    search: "deploy react app vercel",
    steps: [
      { title: "Install CLI", code: "npm install -g vercel" },
      { title: "Login", code: "vercel login" },
      { title: "Deploy", code: "vercel" }
    ]
  },


  {
    title: "Env Security Best Practice",
    search: "env secure react vite",
    steps: [
      { title: "Create .env", code: "VITE_API_KEY=123456" },
      { title: "Use safely", code: `console.log(import.meta.env.VITE_API_KEY);` },
      { title: "Never do this", code: `// ❌ Do NOT hardcode API keys in code` }
    ]
  },


  {
    title: "React Env Variables",
    search: "env environment variables vite react",
    steps: [
      { title: "Create file", code: ".env" },
      { title: "Add variable", code: "VITE_API_URL=https://api.example.com" },
      { title: "Use in code", code: `console.log(import.meta.env.VITE_API_URL);` },
      { title: "Important", code: "// Only VITE_ prefixed vars work in Vite" }
    ]
  },


  {
    title: "CORS Fix (Backend)",
    search: "cors error fix api backend express",
    steps: [
      { title: "Install", code: "npm install cors" },
      { title: "Setup Express",
        code: `import cors from "cors";
    app.use(cors());`
      },
      { title: "Specific origin",
        code: `app.use(cors({
    origin: "http://localhost:3000"
  }));`
      }
    ]
  },


  {
    title: "Express Server",
    search: "express server node api backend",
    steps: [
      { title: "Install", code: "npm install express" },
      { title: "Basic server",
        code: `import express from "express";
    const app = express();
      app.get("/", (req,res) => {
        res.send("Hello Server");
      });
      app.listen(5000);`
      }
    ]
  },


  {
    title: "JWT Auth",
    search: "jwt authentication login token node",
    steps: [
      { title: "Install", code: "npm install jsonwebtoken" },
      { title: "Create token",
        code: `import jwt from "jsonwebtoken";
    const token = jwt.sign(
      { id: 1 },
      "secretKey",
      { expiresIn: "1h" }
    );`
      },
      { title: "Verify token", code: `jwt.verify(token, "secretKey");` }
    ]
  },


  {
    title: "Password Hashing",
    search: "bcrypt hash password node auth",
    steps: [
      { title: "Install", code: "npm install bcryptjs" },
      { title: "Hash password",
        code: `import bcrypt from "bcryptjs";
    const hash = await bcrypt.hash("123456", 10);`
      },
      { title: "Compare", code: `const match = await bcrypt.compare(
        "123456", hash);` }
    ]
  },


  {
    title: "File Upload (Multer)",
    search: "multer file upload express image",
    steps: [
      { title: "Install", code: "npm install multer" },
      { title: "Setup storage",
        code: `import multer from "multer";
    const upload = multer({ dest: "uploads/" });`
      },
      { title: "Route example",
        code: `app.post("/upload", upload.single("file"), 
  (req,res) => {
    res.send("Uploaded");
  });`
      }
    ]
  },


  {
    title: "React Context API",
    search: "context api global state react",
    steps: [
      { title: "Create context",
        code: `import { createContext } from "react";
  export const AppContext = createContext();`
      },
      { title: "Provider",
        code: `<AppContext.Provider value={{user:"John"}}>
    <App />
  </AppContext.Provider>`
      }
    ]
  },


  {
    title: "Debounce Function",
    search: "debounce search optimization js",
    steps: [
      { title: "Function",
        code: `function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() =>
        fn(...args), delay);
    };
  }`
      }
    ]
  },


  {
    title: "Pagination",
    search: "pagination react api pages",
    steps: [
      { title: "Basic logic",
        code: `const page = 1;
  const limit = 10;
  const start = (page - 1) * limit;
  const end = page * limit;`
      }
    ]
  },


  {
    title: "React Memo",
    search: "react memo optimization performance",
    steps: [
      { title: "Usage",
        code: `import React from "react";
    const MyComponent = React.memo(
     function MyComponent() {
      return <div> Hello </div>;
    });`
      }
    ]
  }
];
export default stages;