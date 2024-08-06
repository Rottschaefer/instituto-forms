import GlobalStyle from "./GlobalStyle";
import { Router } from "./Routes/Router";
import nextImg from "./assets/flower-1.jpg";
import second from "./assets/flowers-4.jpg";
import third from "./assets/flowers-5.jpg";
import fourth from "./assets/flowers-6.jpg";
import sub from "./assets/flowers-7.jpg";

function App() {
  return (
    <>
      <link rel="preload" href={nextImg} as="image" />
      <link rel="preload" href={second} as="image" />
      <link rel="preload" href={third} as="image" />
      <link rel="preload" href={fourth} as="image" />
      <link rel="preload" href={sub} as="image" />

      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
