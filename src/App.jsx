import GlobalStyle from "./GlobalStyle";
import { Router } from "./Routes/Router";
import nextImg from "./assets/flower-1.jpg";
import second from "./assets/clouds.jpg";
import third from "./assets/flower-3.jpg";
import fourth from "./assets/snow-tree.jpg";

function App() {
  return (
    <>
      <link rel="preload" href={nextImg} as="image" />
      <link rel="preload" href={second} as="image" />
      <link rel="preload" href={third} as="image" />
      <link rel="preload" href={fourth} as="image" />

      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
